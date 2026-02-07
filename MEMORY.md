# MEMORY.md - Long-Term Memory

> Curated facts & lessons learned over time. Distill from daily notes. Remove when outdated.

---

## About Đàn

### Key Context
- User: Đàn (xưng hô: anh Đàn; có thể viết tắt là **a** trong chat)
- Assistant: Zoe (xưng hô: em Zoe; có thể viết tắt là **e** trong chat)
- Nguyên tắc sống/làm việc: **keep it simple**; ưu tiên loại bỏ phức tạp không cần thiết
- Framework sống/làm việc: `wiki/rulebooks/living-framework.md` — ưu tiên tuân thủ chặt chẽ khi lập kế hoạch/ra quyết định

### Preferences Learned
- **Coding style:** không emoji trong code; code nhìn như người bình thường viết
- **Autonomy:** được push remote branch tự do; hỏi trước khi deploy/restart/migrate/force-push/xóa lớn/hành động ra ngoài

### Important Dates
_(Chưa có thông tin)_

---

## Relationships & People

### Quỳnh (Q)
- Bạn gái anh Đàn
- Bằng tuổi, xưng Q/Đ

---

## Workspaces & Tech Stack

### Repos
- **Daily wiki/notes:** `/Users/nqcdan/dev/wiki` (workspace ghi chú công việc hằng ngày)
- **Personal finance:** `/Users/nqcdan/dev/personal-finance` — ghi log chi/thu và tự recompute rollups
  - Command: bắt đầu bằng `/finance ...` (vd: `/finance chi 73k cafe`, `/finance thu 1m luong`)
  - Automation script: `/Users/nqcdan/dev/personal-finance/automation/finance.mjs` (append `transactions.md`, recompute, rồi `git add/commit/push`)
- **Backlog mặc định:** `/Users/nqcdan/dev/wiki/BACKLOG.md`

### Tech Stack (OF1)
- Platform: Java (Gradle), Kubernetes, Forgejo (self-hosted Git)
- Mobile: Flutter (Android + iOS)
- Data/Python: venv tại `of1-platform/datatp-python`
- Terminal: kitty + zsh + oh-my-zsh + powerlevel10k
- macOS, Homebrew

## Work habits / Working system (Dan)
- Nguyên tắc: **keep it simple**; ưu tiên loại bỏ phức tạp không cần thiết.
- **Viết ra để rỗng não**: mọi việc/ý tưởng/request phải đi qua note/issue/checklist (não để suy nghĩ, không để nhớ).
- **Batch inbox** để giảm context switching: chỉ mở user inbox theo 2 khung giờ cố định ~**11:00** và ~**16:00**; ngoài khung này ưu tiên deep work (code/review/plan).

---

## Decisions & Context

### Automations & Scripts
- **Gmail API OAuth:** dùng cho gửi email (không dựa vào Apple Mail)
  - Secrets: `/Users/nqcdan/.openclaw/secrets/google/{credentials.json,token.json}`
- **Backlog snapshot script:** `/Users/nqcdan/.openclaw/workspace/automation/gmail/send-backlog-snapshot.mjs`
  - Subject format: `Daily backlog snapshot – YYYY-MM-DD` (encode RFC2047 cho ký tự non-ASCII)
  - `npm i` tại `/Users/nqcdan/.openclaw/workspace/automation/gmail`
- **Screenshot → inbox rule (2026-02-07):** Khi anh Đàn ném ảnh chụp màn hình từ Zalo/Outlook/bất kỳ chat nào **mà không nói gì thêm**,
  tự động archive vào `wiki/notes/00_inbox/` (kèm `assets/YYYY-MM-DD/`), tạo 1 note markdown embed ảnh + trích xuất tối thiểu (email/timestamp nếu rõ), rồi commit+push
- **Email style:** thường mở đầu bằng **"Hi a/e,"** (ít dùng "Chào a/e,") và viết gọn, tránh câu dẫn dài

## Open Loops
_(Những việc anh Đàn nhắc nhưng chưa close.)_

---

## Lessons Learned

### 2026-02-03 - Check systems before answering
Khi anh Đàn hỏi về recurring tasks, briefings, automations → check cron/config TRƯỚC, không trả lời từ "trí nhớ".

### 2026-02-03 - Video không đọc được
Tool hiện không trích nội dung từ video mp4 — cần xin screenshot hoặc timestamp.

### 2026-02-04 - Không focus sai hướng
Khi anh nói "nghi ngờ X", lắng nghe thay vì đào sâu hướng cũ. VD: anh nói lỗi init shell, em cứ hỏi phím Enter → mất thời gian.

---

## Ongoing Context

### Active Projects
_(Đang theo dõi qua daily notes)_

### Key Decisions Made
| Date | Decision |
|------|----------|
| 2026-02-03 | Kết nối Google Workspace (Gmail, Calendar, Drive) |
| 2026-02-03 | Set up heartbeats cho proactive checking |
| 2026-02-07 | Backlog mặc định đọc từ `/Users/nqcdan/dev/wiki/BACKLOG.md` |
| 2026-02-07 | Gửi email dùng Gmail API OAuth (không Apple Mail) |
| 2026-02-07 | Canonical script backlog snapshot đặt trong OpenClaw workspace |

### Things to Remember
_(Những điều khác cần nhớ)_

---

*Review and update periodically. Daily notes are raw; this is curated.*