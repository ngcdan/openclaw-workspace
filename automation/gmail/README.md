# Gmail automation (OpenClaw workspace)

## Send daily backlog snapshot

```bash
cd /Users/nqcdan/.openclaw/workspace/automation/gmail
npm i
node send-backlog-snapshot.mjs --date YYYY-MM-DD
```

Defaults:
- Backlog source: `/Users/nqcdan/dev/wiki/BACKLOG.md`
- OAuth secrets:
  - credentials: `/Users/nqcdan/.openclaw/secrets/google/credentials.json`
  - token: `/Users/nqcdan/.openclaw/secrets/google/token.json`

Template:
- Subject: `Daily backlog snapshot – YYYY-MM-DD`
- Body starts with `Hi a,` then renders `## Current focus` and `## Reporting / Review` sections.
