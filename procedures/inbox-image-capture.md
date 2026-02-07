# Procedure — Auto capture chat screenshots to wiki inbox

## Trigger

When anh Đàn sends an image (Zalo/Outlook/any chat screenshot) **with no extra instruction**, treat it as an inbox capture request.

## Goal

Archive the screenshot into Dan’s wiki inbox so it can be triaged later, without requiring follow-up questions.

## Target location (wiki)

- Notes folder: `/Users/nqcdan/dev/wiki/notes/00_inbox/`
- Assets folder: `/Users/nqcdan/dev/wiki/notes/00_inbox/assets/YYYY-MM-DD/`

## Steps

1) Determine `date` (local Asia/Saigon) and create assets dir.
2) Copy the inbound image into assets dir with a short, descriptive slug:
   - Example: `assets/2026-02-07/crm-request.jpg`
3) Create a markdown note in `notes/00_inbox/`:
   - Filename: `YYYY-MM-DD_<short-slug>.md`
   - Include:
     - a 1-line title
     - `Request:` (if any visible context or if user later adds text)
     - any key extracted items that are obvious (emails, ids, timestamps) — keep minimal
     - embed the image via relative link `![](./assets/YYYY-MM-DD/<file>.jpg)`
4) `git add` the new md + image, then `git commit` + `git push` in `/Users/nqcdan/dev/wiki`.

## Notes

- Don’t block on perfect OCR. If content is unclear, just archive the screenshot.
- If the user adds extra instruction text in the same message, include it under `Request` verbatim.
