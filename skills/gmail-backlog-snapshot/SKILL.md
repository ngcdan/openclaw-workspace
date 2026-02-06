---
name: gmail-backlog-snapshot
description: Send Dan’s daily backlog snapshot email via Gmail API OAuth by reading /Users/nqcdan/dev/wiki/BACKLOG.md and emailing a plaintext summary. Use when the user says things like “send backlog snapshot”, “gửi backlog snapshot”, “gửi mail backlog hôm nay”, or asks to email the Current focus / Reporting sections from BACKLOG.md.
---

# Gmail Backlog Snapshot

Send a daily backlog snapshot email (plaintext) from `BACKLOG.md` using Gmail API OAuth.

## Quick start (most common)

Run the script (defaults are usually correct):

```bash
node ./scripts/send-backlog-snapshot.mjs
```

To force a date (YYYY-MM-DD):

```bash
node ./scripts/send-backlog-snapshot.mjs --date 2026-02-07
```

## What it sends

- Reads backlog from: `/Users/nqcdan/dev/wiki/BACKLOG.md` (override with `--backlog`)
- Extracts checklist items from:
  - `## Current focus`
  - `## Reporting / Review`
- Sends email body (Vietnamese) starting with `Hi a,`
- Subject default: `Daily backlog snapshot – YYYY-MM-DD` (note: uses RFC2047 encoding for the en-dash)

## Parameters

All args are optional:

- `--to <email>` (default: `nqcdan1908@gmail.com`)
- `--date <YYYY-MM-DD>` (default: today)
- `--subject <text>` (default: `Daily backlog snapshot – <date>`)
- `--backlog <path>` (default: `/Users/nqcdan/dev/wiki/BACKLOG.md`)
- `--credentials <path>` (default: `/Users/nqcdan/.openclaw/secrets/google/credentials.json`)
- `--token <path>` (default: `/Users/nqcdan/.openclaw/secrets/google/token.json`)

Example:

```bash
node ./scripts/send-backlog-snapshot.mjs \
  --to nqcdan1908@gmail.com \
  --date 2026-02-07 \
  --backlog /Users/nqcdan/dev/wiki/BACKLOG.md
```

## OAuth / first run behavior

- If `token.json` exists, it will reuse it.
- If not, it prints an OAuth URL and asks for the code, then writes `token.json`.

## Operational guardrails

- If the user did not explicitly ask to send the email (vs. just “draft”), ask a single confirmation question: recipient + date.
- If `BACKLOG.md` section headings change, update the script extraction headings accordingly.
