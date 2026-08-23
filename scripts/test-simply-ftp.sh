#!/usr/bin/env bash
# Test Simply.com FTP connection with multiple common settings.
# Usage:
#   FTP_PASSWORD='your-password' ./scripts/test-simply-ftp.sh
# Optional:
#   FTP_USERNAME=karolinabengtsson.com

set -euo pipefail

PASS="${FTP_PASSWORD:?Set FTP_PASSWORD}"
USER="${FTP_USERNAME:-karolinabengtsson.com}"

if ! command -v lftp >/dev/null 2>&1; then
  sudo apt-get update -qq && sudo apt-get install -y -qq lftp
fi

SERVERS=(
  "karolinabengtsson.com"
  "ftp.karolinabengtsson.com"
  "ftp.simply.com"
  "linux1.simply.com"
  "linux2.simply.com"
  "linux3.simply.com"
)

try_connect() {
  local proto="$1"
  local server="$2"
  local extra="${3:-}"

  echo "── Trying ${proto}://${server} (user: ${USER}) ${extra}"
  if lftp -u "${USER}","${PASS}" "${proto}://${server}" <<EOF
set net:timeout 15
set net:max-retries 1
set ssl:verify-certificate no
set ftp:ssl-force $([ "$proto" = "ftps" ] && echo true || echo false)
set ftp:ssl-protect-data $([ "$proto" = "ftps" ] && echo true || echo false)
set ftp:passive-mode true
${extra}
pwd
ls
bye
EOF
  then
    echo "✓ SUCCESS: ${proto}://${server}"
    return 0
  else
    echo "✗ Failed: ${proto}://${server}"
    return 1
  fi
}

echo "Testing Simply FTP for user: ${USER}"
echo ""

for server in "${SERVERS[@]}"; do
  try_connect "ftps" "$server" && exit 0
  try_connect "ftp" "$server" && exit 0
done

# FTPS with active mode (Simply sometimes requires this)
for server in "karolinabengtsson.com" "ftp.simply.com"; do
  try_connect "ftps" "$server" "set ftp:passive-mode false" && exit 0
done

echo ""
echo "All connection attempts failed."
echo ""
echo "Checklist:"
echo "  1. Username must be your WEB HOSTING domain (e.g. karolinabengtsson.com)"
echo "     — NOT your Simply.com login email"
echo "  2. Password from: Simply control panel → Web hosting → Login details → FTP password"
echo "     — NOT your Simply.com account password (unless they are the same)"
echo "  3. Find exact server name under: Administration in the control panel"
echo "  4. If hosting is on another domain, use that domain as username"
exit 1
