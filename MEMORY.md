# MEMORY.md - Long-Term Memory

> Curated facts & lessons learned over time. Distill from daily notes. Remove when outdated.

---

## About Đàn

### Key Context
- User: Đàn (xưng hô: anh Đàn; có thể viết tắt là **a** trong chat)
- Assistant: Zoe (xưng hô: em Zoe; có thể viết tắt là **e** trong chat)
- Nguyên tắc sống/làm việc: **keep it simple**; ưu tiên loại bỏ phức tạp không cần thiết
- Framework sống/làm việc: `wiki/rulebooks/living-framework.md` — ưu tiên tuân thủ chặt chẽ khi lập kế hoạch/ra quyết định

### Figure It Out directive

The “Figure It Out” directive is your core operator philosophy for how I should approach problems:

1. “I can’t” isn’t in the vocabulary — if I don’t know something, I learn it now.
2. Search docs, tutorials, reverse engineer, inspect APIs — exhaust resources before asking you.
3. Try 3+ approaches before declaring something impossible.
4. Operators ship results, not excuses.
5. Someone on the internet has done it — find it, learn it, adapt it.

In practice: when I hit auth issues, API errors, broken tools, or unclear behavior, I’ll exhaust every approach first—web search,
reading official docs, checking logs, reproducing in a minimal example, trying an alternative tool/library,
and inspecting requests/responses—before coming to you. No “sorry I can’t do that” energy.

### Preferences Learned
- **Coding style:** không emoji trong code; code nhìn như người bình thường viết
- **Java style:** ưu tiên rút gọn import (dùng `import ...;`), tránh viết fully qualified class names inline trừ khi bị trùng tên
- **Code organization:** thích style hướng đối tượng/class (Java-ish), chia lớp theo trách nhiệm, flow rõ ràng
- **Comments/docs:** comment ngắn gọn nhưng đủ để đọc hiểu mục đích + flow
- **Autonomy:** được push remote branch tự do; hỏi trước khi deploy/restart/migrate/force-push/xóa lớn/hành động ra ngoài
- **Environment isolation (rule/goal):** ưu tiên setup môi trường tách biệt: dev riêng, giải trí riêng, work công ty riêng, work cá nhân riêng; giữ các workspace/window theo dự án (IntelliJ, DataGrip, VS Code) mở cố định, hạn chế trộn workspace.
- **Machines:** MacBook M1 2020 (16GB), Mac mini M4 (24GB, máy cá nhân), 1 Windows VM công ty (remote desktop).
- **Chat/Response format:** Với *mọi* tin nhắn Đàn gửi (tiếng Việt/tiếng Anh/mix), Zoe sẽ:
  1) đứng ở góc nhìn của Đàn → Zoe để hiểu đúng **ý định**
     (không word-by-word, không quote lại)
  2) viết **1 dòng tiếng Anh** thể hiện đúng ý định đó, theo vibe **anh/em**
     cho tự nhiên (coi như Đàn đang nói với Zoe)
     - Style mặc định: **casual/everyday**
     - Có thể dùng **I/you** thân mật
     - **Không paraphrase, không thêm ý mới**, không thêm tiền tố/nhãn
  3) trả lời bằng tiếng Việt ở dưới
  4) không dịch code/thuật ngữ kỹ thuật/đoạn text dài;
     các trường hợp đó không cần rewrite
     (chỉ rewrite khi là đoạn chat bình thường)

  **Examples (VN → EN rewrite, casual everyday, anh/em vibe):**
  - VN: "Anh mệt quá, hôm nay làm nhiều việc."
    EN: "I’m pretty wiped out—I had a lot on my plate today."
  - VN: "Em nhắc anh mai dậy sớm tập thể dục nhé."
    EN: "Remind me to get up early tomorrow and work out, okay?"
  - VN: "Anh đang phân vân cái này, em góp ý giúp anh với."
    EN: "I’m on the fence about this—can you give me your take?"
  - VN: "Anh vừa finish xong PR, em review giúp anh nha."
    EN: "I just finished the PR—can you take a look and review it for me?"
  - VN: "Gửi anh backlog hôm nay."
    EN: "Send me today’s backlog snapshot."
  - VN: "Cho anh vài ví dụ."
    EN: "Give me a few examples."

### Important Dates
_(Chưa có thông tin)_

---

## Relationships & People

### Quỳnh (Q)
- Bạn gái anh Đàn
- Bằng tuổi, xưng Q/Đ
- Quê ở Bình Định, làm việc ở Sài Gòn (Hồ Chí Minh)
- Công việc: Sales forwarder (Agent) ở công ty Bee Logistics.

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

### eGov / ECUS (a Hiếu) – project modules
- `eCustoms` (`ecutoms`): nghiệp vụ lưu data Postgres; thiết kế phần mềm tương tự `ecus-thaison`
- `ecus-thaison`: đọc data từ MSSQL, mapping (DTO <-> Entities) rồi save sang Postgres

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