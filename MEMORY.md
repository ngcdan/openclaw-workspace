# MEMORY.md - Long-term memory

_Curated facts & lessons learned over time. Không lặp USER.md (con người) hay SOUL.md (AI persona)._

## Identity & Preferences
- User: Đàn (xưng hô: anh Đàn; có thể viết tắt là **a** trong chat)
- Assistant: Zoe (xưng hô: em Zoe; có thể viết tắt là **e** trong chat)
- Bạn gái anh Đàn: Quỳnh (Q) — bằng tuổi, xưng Q/Đ
- Coding style: không emoji trong code; code nhìn như người bình thường viết
- Autonomy: được push remote branch tự do; hỏi trước khi deploy/restart/migrate/force-push/xóa lớn/hành động ra ngoài

## Workspaces / Repos
- Daily work wiki/notes repo: `/Users/nqcdan/dev/wiki` (workspace ghi chú công việc hằng ngày)
- Framework sống/làm việc: `wiki/rulebooks/living-framework.md` — framework để anh sống tập trung và xử lý mọi việc có hệ thống; ưu tiên tuân thủ chặt chẽ khi lập kế hoạch/ra quyết định
- Personal finance repo: `/Users/nqcdan/dev/personal-finance` — ghi log chi/thu và tự recompute rollups
  - Command: bắt đầu bằng `/finance ...` (vd: `/finance chi 73k cafe`, `/finance thu 1m luong`)
  - Automation script: `/Users/nqcdan/dev/personal-finance/automation/finance.mjs` (append `transactions.md`, recompute, rồi `git add/commit/push`)

## Tech Stack (OF1)
- Platform: Java (Gradle), Kubernetes, Forgejo (self-hosted Git)
- Mobile: Flutter (Android + iOS)
- Data/Python: venv tại `of1-platform/datatp-python`
- Terminal: kitty + zsh + oh-my-zsh + powerlevel10k
- macOS, Homebrew

## Work habits / Working system (Dan)
- Nguyên tắc: **keep it simple**; ưu tiên loại bỏ phức tạp không cần thiết.
- **Viết ra để rỗng não**: mọi việc/ý tưởng/request phải đi qua note/issue/checklist (não để suy nghĩ, không để nhớ).
- **Batch inbox** để giảm context switching: chỉ mở user inbox theo 2 khung giờ cố định ~**11:00** và ~**16:00**; ngoài khung này ưu tiên deep work (code/review/plan).
- **One-pipeline rule**: request từ Zalo/Outlook/call cuối cùng phải được chuẩn hoá và đổ về 1 chỗ trong `wiki/work/` (issue/backlog/tracking).

## Decisions & Context
- 2026-02-07: “Backlog” mặc định đọc từ `/Users/nqcdan/dev/wiki/BACKLOG.md`.
- 2026-02-07: Gửi email nên dùng automation script qua **Gmail API OAuth** (không dựa vào Apple Mail).
  - Secrets path (ổn định): `/Users/nqcdan/.openclaw/secrets/google/{credentials.json,token.json}`
- 2026-02-07: Email style preference: thường mở đầu bằng **"Hi a,"** (ít dùng "Chào a,") và viết gọn, tránh câu dẫn dài.
  - Subject format: `Daily backlog snapshot – YYYY-MM-DD` (lưu ý ký tự “–” non-ASCII → header phải encode RFC2047 để tránh lỗi kiểu `Ã¢Â€Â“`).
- 2026-02-07: Canonical script gửi backlog snapshot đặt trong OpenClaw workspace (không đặt ad-hoc trong repo khác):
  - `/Users/nqcdan/.openclaw/workspace/automation/gmail/send-backlog-snapshot.mjs`
  - `npm i` tại `/Users/nqcdan/.openclaw/workspace/automation/gmail`
- 2026-02-03: Kết nối Google Workspace (Gmail, Calendar, Drive).
- 2026-02-03: Set up heartbeats cho proactive checking.

## Open Loops
_(Những việc anh Đàn nhắc nhưng chưa close.)_

## Lessons Learned
- **Check systems before answering.** Khi anh Đàn hỏi về recurring tasks, briefings, automations → check cron/config TRƯỚC, không trả lời từ "trí nhớ". (2026-02-03)
- **Không focus sai hướng.** Khi anh nói "nghi ngờ X", lắng nghe thay vì đào sâu hướng cũ. VD: anh nói lỗi init shell, em cứ hỏi phím Enter → mất thời gian. (2026-02-04)
- **Video không đọc được.** Tool hiện không trích nội dung từ video mp4 — cần xin screenshot hoặc timestamp. (2026-02-03)