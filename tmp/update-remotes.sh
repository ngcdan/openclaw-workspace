#!/usr/bin/env bash
set -euo pipefail

BASE="/Users/nqcdan/OF1/forgejo"
OLD_HOST="forgejo.of1-apps.svc.cluster.local"
NEW_BASE="ssh://git@git.datatp.cloud"

echo "Scanning: $BASE"

tmp=$(mktemp)
find "$BASE" -type d -name .git -prune -print | sed 's#/.git$##' > "$tmp"
count=$(wc -l < "$tmp" | tr -d ' ')
echo "Found $count repos"

echo
changed=0
while IFS= read -r r; do
  url=$(git -C "$r" remote get-url origin 2>/dev/null || true)
  if [[ "$url" == *"$OLD_HOST"* ]]; then
    path="$url"
    # https?://host/...
    path=${path#*://}
    # user@host/...
    path=${path#*@}
    # host/...
    path=${path#${OLD_HOST}/}
    # git@host:path
    if [[ "$url" == *"@${OLD_HOST}:"* ]]; then
      path=${url#*@${OLD_HOST}:}
    fi

    new_url="$NEW_BASE/$path"

    echo "- $r"
    echo "  origin: $url"
    echo "  new:    $new_url"
    echo
    changed=$((changed+1))
  fi
done < "$tmp"

echo "Will change: $changed repos"
