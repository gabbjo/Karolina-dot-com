# Agent Portfolio Builds

Three independent editorial portfolio builds from parallel Cloud Agent runs (Aug 2026).

## Folders

| Folder | Agent | Stack | Notes |
|--------|-------|-------|-------|
| `builds/composer-e3ca/` | Composer 2.5 | Vite + Tailwind v3 | Cormorant Garamond, Stockholm/Malmö framing |
| `builds/grok-5cf4/` | Grok 4.6 | Plain HTML/CSS | Katalog 26–27, Oper Frankfurt, 5 portrait plates |
| `builds/grok-eea0/` | Grok 4.6 | Vite + Tailwind v4 | Paper-grain texture, Schibsted Grotesk |

## Zip archives (repo root)

- `karolina-bengtsson-portfolios.zip` — all three builds
- `composer-e3ca.zip` — Composer build only (13 KB)
- `grok-5cf4.zip` — Grok HTML build (1.3 MB)
- `grok-eea0.zip` — Grok Vite build (1.8 MB)

## Preview locally

```bash
cd builds/composer-e3ca && python3 -m http.server 8080
```

Or unzip any archive and open `index.html`.

## Publish

Upload any single build folder to static hosting. No build step required.
