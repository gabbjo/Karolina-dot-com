#!/usr/bin/env bash
# Deploy official Karolina Bengtsson site to Simply.com public_html
# Requires: lftp (apt install lftp)
# Usage:
#   FTP_SERVER=karolinabengtsson.com \
#   FTP_USERNAME=karolinabengtsson.com \
#   FTP_PASSWORD='your-password' \
#   ./scripts/deploy-simply.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SERVER="${FTP_SERVER:-karolinabengtsson.com}"
USER="${FTP_USERNAME:?Set FTP_USERNAME}"
PASS="${FTP_PASSWORD:?Set FTP_PASSWORD}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "Installing lftp..."
  sudo apt-get update -qq && sudo apt-get install -y -qq lftp
fi

echo "Deploying to ftps://${SERVER}/public_html/ ..."

lftp -u "${USER}","${PASS}" "ftps://${SERVER}" <<EOF
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ssl:verify-certificate no
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
