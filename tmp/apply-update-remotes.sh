#!/usr/bin/env bash
set -euo pipefail

BASE="/Users/nqcdan/OF1/forgejo"
OLD_HOST="forgejo.of1-apps.svc.cluster.local"
NEW_BASE="ssh://git@git.datatp.cloud"

echo "Applying origin URL updates under: $BASE"

tmp=$(mktemp)
find "$BASE" -type d -name .git -prune -print | sed 's#/.git$##' > "$tmp"

changed=0
while IFS= read -r r; do
  url=$(git -C "$r" remote get-url origin 2>/dev/null || true)
  if [[ "$url" == *"$OLD_HOST"* ]]; then
    path="$url"
    path=${path#*://}
    path=${path#*@}
    path=${path#${OLD_HOST}/}
    if [[ "$url" == *"@${OLD_HOST}:"* ]]; then
      path=${url#*@${OLD_HOST}:}
    fi
    new_url="$NEW_BASE/$path"

    echo "- $r"
    echo "  set origin -> $new_url"
    git -C "$r" remote set-url origin "$new_url"
    changed=$((changed+1))
  fi
done < "$tmp"

echo "Updated: $changed repos"
