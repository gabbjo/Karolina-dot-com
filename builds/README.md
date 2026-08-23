# Agent Portfolio Builds

Four independent editorial portfolio builds from parallel Cloud Agent runs (Aug 2026).

## Folders

| Folder | Agent | Stack | Notes |
|--------|-------|-------|-------|
| `composer-e3ca/` | Composer 2.5 | Vite + Tailwind v3 | Cormorant Garamond, Stockholm/Malmö framing |
| `grok-5cf4/` | Grok 4.6 | Plain HTML/CSS | Katalog 26–27, Oper Frankfurt, 5 portrait plates |
| `grok-eea0/` | Grok 4.6 | Vite + Tailwind v4 | Paper-grain texture, Schibsted Grotesk |
| `opus-69b0/` | Claude Opus 5 | Plain HTML/CSS | Self-hosted fonts, audio, film — no third-party runtime |

## Zip archives (repo root)

- `karolina-bengtsson-portfolios.zip` — all four builds (9.5 MB)
- `composer-e3ca.zip` — Composer build only (13 KB)
- `grok-5cf4.zip` — Grok HTML build (1.3 MB)
- `grok-eea0.zip` — Grok Vite build (1.8 MB)
- `opus-69b0.zip` — Opus build (6.4 MB)

## Preview locally

```bash
cd builds/opus-69b0 && npx serve .
# or any build folder with python3 -m http.server 8080
```

## Publish

Upload any single build folder to static hosting. No build step required.
