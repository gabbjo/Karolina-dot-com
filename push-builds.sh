#!/usr/bin/env bash
# Run locally after cloning, or use once GITHUB_TOKEN is available in the agent environment.
set -euo pipefail

REPO="https://github.com/gabbjo/Karolina-dot-com.git"
BRANCH="cursor/agent-portfolio-builds-e3ca"

if [[ -n "${GITHUB_TOKEN:-}" ]]; then
  git push "https://x-access-token:${GITHUB_TOKEN}@github.com/gabbjo/Karolina-dot-com.git" "$BRANCH"
  echo "Pushed to $BRANCH"
else
  echo "Set GITHUB_TOKEN (repo scope) and re-run, or:"
  echo "  git push -u origin $BRANCH"
fi
