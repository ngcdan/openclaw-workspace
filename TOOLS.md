# TOOLS.md - Local Notes

Lệnh và conventions cụ thể cho môi trường của anh Đàn.

## Google (OAuth), Cloudflare
- Account: `nqcdan1908@gmail.com`
- Password: `Nqcdan:1023@@`
- Canonical secrets location (stable):
  - OAuth client: `/Users/nqcdan/.openclaw/secrets/google/credentials.json`
  - OAuth token: `/Users/nqcdan/.openclaw/secrets/google/token.json`
- Gmail API OAuth (Desktop client) automation project:

## Navigate

| Alias | Path |
|-------|------|
| OF1 platform start | `cd /Users/nqcdan/OF1/forgejo/of1-platform/working/release-platform/server-env` |
| OF1 root (build) | `cd /Users/nqcdan/OF1/forgejo/of1-platform/of1-build` |
| OF1 mobile | `cd /Users/nqcdan/OF1/forgejo/of1-platform/of1-mobile/apps/mobile` |
| OF1 python | `cd /Users/nqcdan/OF1/forgejo/of1-platform/datatp-python && source venv/bin/activate` |
| OF1 beta namespace | `cd /Users/nqcdan/OF1/forgejo/of1-cloud/of1-cloud-dev/namespaces/of1/beta/platform` |
| OF1 CRM namespace | `cd /Users/nqcdan/OF1/forgejo/of1-cloud/of1-cloud-dev/namespaces/of1/dev/crm` |

## Shell / Environment (zsh)

- Shell: zsh + oh-my-zsh + powerlevel10k
- **tmux auto-attach:** nếu interactive login shell và không phải SSH → auto attach/create session `default`
- **TERM over SSH:** nếu có `SSH_CONNECTION` → `TERM=xterm-256color` (tránh glitch render)
- Loads:
  - `brew shellenv`
  - `nvm` (`$NVM_DIR`, `nvm.sh`)
  - `pyenv` (`$PYENV_ROOT`)
  - `sdkman`
  - `fzf` config + `fzf-cheatsheet` (bind `Alt+g`)
  - OpenClaw completion: `openclaw completion --shell zsh`

## VS Code Workspaces

- Function: `vscode <path-to-.code-workspace>` (mở workspace; nếu đã có window thì focus đúng window)
  - Tip: có thể alias thêm `alias code_ws=vscode` nếu muốn đúng thói quen gọi `code_ws`.
- Examples:
  - `vscode ~/OF1/ws/mobile.code-workspace`
  - `vscode ~/OF1/ws/crm.code-workspace`
  - `vscode ~/OF1/ws/datatp-python.code-workspace`

## Build

- `./tools.sh build -clean -code -ui`
- (Shortcut) `of1b` / `of1-daily-build` → chạy `/Users/nqcdan/dev/wiki/automation/of1_daily_build.sh`
- `gradle clean build --refresh-dependencies`
- `gradle publishToMaven`

## eGov (a Hiếu)

### Run/build
- Root dir: `~/Documents/projects/forgejo/of1-egov`
- Build (Java): `./tools.sh build -clean -code -ui`
- Env dir: `~/Documents/projects/forgejo/working/release-egov/server-env`
- Run server: `ENV_NAME=dev ./instances.sh run`
- Web UI dir: `~/Documents/projects/forgejo/of1-egov/webui/egov`
- Web UI dev: `pnpm run dev-server`

### Questions to ask / discuss
1) Flow run server eGov
   - Start server platform / UI phoenix
   - Start server eGov / UI
   - Bật lại nginx vào cổng `localhost:8080`
2) Branching + libs sync
   - DB platform là beta
   - Code eGov của các dự án công ty (trừ eGov) luôn update theo nhánh `dev`?
     - Nếu đúng: nhánh `egov` em có được merge/update từ `dev` về không?
   - Note: chỉ làm việc trên nhánh `egov_local_server`, sau đó tạo pull request vào nhánh `egov`
   - Flow làm việc: checkout `egov-local-server` -> làm -> tạo PR -> submit merge vào `egov`
   - Lib Java + UI của platform publish lên Nexus có update đồng bộ với release của `dev` không?
3) DB info
   - `of1@egov-dev`: `postgres.of1-dev-egov.svc.cluster.local:5432/egov`
   - `of1@egov-prod`: `egov-server.of1-prod-platform.svc.cluster.local:5432/egov`
   - `of1@platform-egov`: DB beta
   - `of1@ecus-prod`: `win-server-16-ecus-hp.beehp-prod-logs.svc.cluster.local:1433;database=ECUS5VNACCS`
   - `of1@ecus-snapshot`: `win-server-16-ecus-hp.of1-dev-egov.svc.cluster.local:1433;database=ECUS5VNACCS`
   - `of1@ecus-dev`: ???

## Git

- **GitHub:** `git config user.name "nqcdan" && git config user.email "linuss1908@gmail.com"`
- **Forgejo:** `git config -g user.name "jesse.vnhph" && git config -g user.email "jesse.vnhph@openfreightone"`
- `./git.sh working:set crm` / `./git.sh working:set develop`
- `./git.sh working:merge crm`
- `./git.sh status && ./git.sh working:commit "update code" && ./git.sh working:push`

## Mobile / Flutter

- Flutter bin in PATH: `/Users/nqcdan/dev/tools/flutter/bin`
- `flutter doctor`
- `flutter clean && flutter pub get`
- `flutter build apk --release`
- `flutter build appbundle --release`
- `flutter build ios --release`

### iOS Signing (OF1 Mobile)
- Expected `DEVELOPMENT_TEAM`: `7UUQ3ZFF85`
- Expected `PRODUCT_BUNDLE_IDENTIFIER`: `beelogistics.cloud.of1`
- If build error mentions other Team ID (e.g. `Y435B5XJHH`) or bundle (e.g. `com.lam.of1mobile`), likely a bad commit in `apps/mobile/ios/Runner.xcodeproj/project.pbxproj`.

## K8s / Server

- `tar -xvf server.tar`
- Copy local → remote: `kns-ctl of1-prod-platform cp-to server.tar server:/home/datatp/release-platform`
- Copy remote → local: `kns-ctl of1-beta-platform cp-from server:home/datatp/release-platform/server.tar ./server.tar`
- `kns-ctl of1-prod-platform get services,pods`
- `kns-ctl of1-dev-crm get services,pods`
- `./k-ctl.sh ns status`
- `./k-ctl.sh admin undeploy` → `./k-ctl.sh admin sync-pv` → `./k-ctl.sh admin deploy`
- Exec vào pod: `kns-ctl of1-prod-platform exec -it python-msa -- su - datatp`
- Exec CRM: `kns-ctl of1-dev-crm exec -it server -- su - datatp`
- Nginx: `ssh of1@nginx-waf.of1-apps.svc.cluster.local`
