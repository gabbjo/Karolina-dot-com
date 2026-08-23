#!/usr/bin/env bash
# Deploy official Karolina Bengtsson site to Simply.com public_html
# Requires: lftp (apt install lftp)
# Usage:
#   FTP_PASSWORD='your-password' ./scripts/deploy-simply.sh
#   DEPLOY_ROOT=builds/opus-69b0 FTP_PASSWORD='...' ./scripts/deploy-simply.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="${DEPLOY_ROOT:-${REPO_ROOT}}"
if [[ "${ROOT}" != /* ]]; then
  ROOT="${REPO_ROOT}/${ROOT}"
fi
SERVER="${FTP_SERVER:-ftp.simply.com}"
USER="${FTP_USERNAME:-karolinabengts.com}"
PASS="${FTP_PASSWORD:?Set FTP_PASSWORD}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "Installing lftp..."
  sudo apt-get update -qq && sudo apt-get install -y -qq lftp
fi

echo "Deploying ${ROOT} to ftp://${SERVER}/public_html/ as ${USER} ..."

lftp -u "${USER}","${PASS}" "ftp://${SERVER}" <<EOF
set net:timeout 30
set net:max-retries 2
set ftp:passive-mode true
lcd ${ROOT}
cd public_html
mirror --reverse --delete --verbose \
  --exclude-glob .git/ \
  --exclude-glob .github/ \
  --exclude-glob '*.zip' \
  --exclude-glob DOWNLOAD.md \
  --exclude-glob DEPLOY.md \
  --exclude-glob README.md \
  --exclude-glob scripts/
bye
EOF

echo "Done. Check https://karolinabengtsson.com/"
