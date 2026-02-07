# Workflow

## Morning

### 1) Daily pull + build (mỗi sáng)
- Script chuẩn: `/Users/nqcdan/dev/wiki/automation/of1_daily_build.sh`
- Repo/dir:
  - `ROOT_DIR=/Users/nqcdan/OF1/forgejo/of1-platform/of1-build`
- Branch/workingset: `crm`
- Steps chính trong script:
  1. `./git.sh checkout crm`
  2. `./git.sh status`
  3. `./git.sh working:commit "review code"` (commit local WIP nếu có)
  4. `./git.sh fetch origin crm`
  5. `./git.sh merge --no-edit origin/crm`
  6. Clean output dir (guarded): `../working/release-platform/server`
  7. Build: `./tools.sh build -clean -code -ui`
- OK/FAIL:
  - OK: script kết thúc với log `=== OF1 DAILY CRM BUILD: success ===`
  - FAIL: exit non-zero + in `ERROR: ...` hoặc fail ở build step
- Notes:
  - Script dùng `set -euo pipefail` → fail là dừng ngay.
  - Có guard để tránh xoá nhầm thư mục ngoài `.../working/release-platform/server`.

### 2) Backlog snapshot (mỗi sáng 07:00)
- Source: `/Users/nqcdan/dev/wiki/BACKLOG.md`
- Schedule: **07:00 Asia/Saigon mỗi ngày**
- Delivery: **Telegram** → chat id `7254431752`
- Nội dung: plaintext tóm tắt (Current focus + Reporting/Review), gọn.

## Afternoon
- (TBD)

## Evening
- (TBD)


