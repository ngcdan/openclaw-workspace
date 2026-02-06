import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(question, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

function base64UrlEncode(str) {
  return Buffer.from(str, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function getArg(name, fallback) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return fallback;
  const v = process.argv[idx + 1];
  return v ?? fallback;
}

function encodeHeaderValue(value) {
  // RFC 2047 for non-ASCII header values (e.g., en-dash “–”)
  if (/^[\x00-\x7F]*$/.test(value)) return value;
  const b64 = Buffer.from(value, "utf8").toString("base64");
  return `=?UTF-8?B?${b64}?=`;
}

function extractSection(md, heading) {
  const lines = md.split(/\r?\n/);
  const start = lines.findIndex((l) => l.trim() === heading.trim());
  if (start === -1) return [];
  const out = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^##\s+/.test(l)) break;
    out.push(l);
  }
  return out;
}

function parseChecklistItems(sectionLines) {
  return sectionLines
    .map((l) => l.trim())
    .filter((l) => l.startsWith("-"))
    .map((l) => l.replace(/^-\s*\[\s*[xX ]\s*\]\s*/, "- ").replace(/^-\s*/, "- "));
}

async function getAuthorizedClient({ credentialsPath, tokenPath }) {
  const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));
  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(tokenPath)) {
    const token = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });

  console.log("Open this URL in your browser:\n" + authUrl + "\n");
  const code = await ask("Paste the code here: ");

  const { tokens } = await oAuth2Client.getToken(code.trim());
  fs.mkdirSync(path.dirname(tokenPath), { recursive: true });
  fs.writeFileSync(tokenPath, JSON.stringify(tokens, null, 2));
  oAuth2Client.setCredentials(tokens);
  return oAuth2Client;
}

async function main() {
  const to = getArg("--to", "nqcdan1908@gmail.com");
  const date = getArg("--date", new Date().toISOString().slice(0, 10));
  const subject = getArg("--subject", `Daily backlog snapshot – ${date}`);

  const backlogPath = getArg("--backlog", "/Users/nqcdan/dev/wiki/BACKLOG.md");
  const credentialsPath = getArg(
    "--credentials",
    "/Users/nqcdan/.openclaw/secrets/google/credentials.json"
  );
  const tokenPath = getArg("--token", "/Users/nqcdan/.openclaw/secrets/google/token.json");

  const md = fs.readFileSync(backlogPath, "utf8").trimEnd();

  const currentFocus = parseChecklistItems(extractSection(md, "## Current focus"));
  const reportingReview = parseChecklistItems(extractSection(md, "## Reporting / Review"));

  const body = [
    "Hi a,",
    "",
    "Backlog hôm nay (từ wiki/BACKLOG.md):",
    "",
    "1) Current focus",
    ...(currentFocus.length ? currentFocus : ["- (empty)"]),
    "",
    "2) Daily report",
    ...(reportingReview.length ? reportingReview : ["- (Ý tưởng summary từ nguồn có sẵn - làm sau)"]),
    "",
    "Thanks,",
    "Zoe",
  ].join("\n");

  const auth = await getAuthorizedClient({ credentialsPath, tokenPath });
  const gmail = google.gmail({ version: "v1", auth });

  const raw = [
    `To: ${to}`,
    "Content-Type: text/plain; charset=utf-8",
    "MIME-Version: 1.0",
    `Subject: ${encodeHeaderValue(subject)}`,
    "",
    body,
  ].join("\r\n");

  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw: base64UrlEncode(raw) },
  });

  console.log("Sent. Message id:", res.data.id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
