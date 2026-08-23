# Download Portfolio Builds

All four completed portfolio builds are on branch `cursor/portfolio-downloads-e3ca`.

## Option 1 — From Cursor / Origin (recommended)

1. Open the repo: https://cursor.com/codebase/gabriel-bengtsson/Please-let-me-be
2. Switch branch to **`cursor/portfolio-downloads-e3ca`**
3. Download any of these files (click file → download / raw):

| File | Size | Contents |
|------|------|----------|
| `karolina-bengtsson-portfolios.zip` | 9.5 MB | All four builds |
| `composer-e3ca.zip` | 13 KB | Composer 2.5 build |
| `grok-5cf4.zip` | 1.3 MB | Grok HTML build + 5 portraits |
| `grok-eea0.zip` | 1.8 MB | Grok Vite build + portraits |
| `opus-69b0.zip` | 6.4 MB | Opus build + fonts, audio, video |

## Option 2 — Git clone

```bash
git clone --branch cursor/portfolio-downloads-e3ca --depth 1 \
  https://origin.cursor.com/git/gabriel-bengtsson/Please-let-me-be.git \
  karolina-portfolios

cd karolina-portfolios
unzip karolina-bengtsson-portfolios.zip
```

## After extracting

Each folder is a static site. Open `index.html` in a browser, or upload to any static host.

```
composer-e3ca/index.html   — Composer 2.5 (Vite + Tailwind v3)
grok-5cf4/index.html       — Grok (plain HTML, Katalog 26–27)
grok-eea0/index.html       — Grok (Vite + Tailwind v4)
opus-69b0/index.html       — Opus (self-hosted fonts, audio, film)
```

**Opus note:** Use a server with HTTP Range support for media seeking (`npx serve .`).
