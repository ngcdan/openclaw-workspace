# TOOLS.md - Local Notes

Lệnh và conventions cụ thể cho môi trường của anh Đàn.

## Google (OAuth)
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

## VS Code Workspaces

- `code_ws ~/OF1/ws/mobile.code-workspace`
- `code_ws ~/OF1/ws/crm.code-workspace`
- `code_ws ~/OF1/ws/datatp-python.code-workspace`

## Build

- `./tools.sh build -clean -code -ui`
- `gradle clean build --refresh-dependencies`
- `gradle publishToMaven`

## Git

- **GitHub:** `git config user.name "nqcdan" && git config user.email "linuss1908@gmail.com"`
- **Forgejo:** `git config -g user.name "jesse.vnhph" && git config -g user.email "jesse.vnhph@openfreightone"`
- `./git.sh working:set crm` / `./git.sh working:set develop`
- `./git.sh working:merge crm`
- `./git.sh status && ./git.sh working:commit "update code" && ./git.sh working:push`

## Mobile / Flutter

- `flutter doctor`
- `flutter clean && flutter pub get`
- `flutter build apk --release`
- `flutter build appbundle --release`
- `flutter build ios --release`

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
