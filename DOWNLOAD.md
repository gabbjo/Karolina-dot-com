# Download Portfolio Builds

All three completed portfolio builds are on branch `cursor/portfolio-downloads-e3ca`.

## Option 1 — From Cursor / Origin (recommended)

1. Open the repo: https://cursor.com/codebase/gabriel-bengtsson/Please-let-me-be
2. Switch branch to **`cursor/portfolio-downloads-e3ca`**
3. Download any of these files (click file → download / raw):

| File | Size | Contents |
|------|------|----------|
| `karolina-bengtsson-portfolios.zip` | 3.1 MB | All three builds |
| `composer-e3ca.zip` | 13 KB | Composer 2.5 build only |
| `grok-5cf4.zip` | 1.3 MB | Grok HTML build + 5 portraits |
| `grok-eea0.zip` | 1.8 MB | Grok Vite build + portraits |

## Option 2 — Git clone

```bash
git clone --branch cursor/portfolio-downloads-e3ca --depth 1 \
  https://origin.cursor.com/git/gabriel-bengtsson/Please-let-me-be.git \
  karolina-portfolios

cd karolina-portfolios
unzip karolina-bengtsson-portfolios.zip
```

## Option 3 — Sparse checkout (single zip only)

```bash
git clone --filter=blob:none --sparse \
  https://origin.cursor.com/git/gabriel-bengtsson/Please-let-me-be.git \
  karolina-portfolios

cd karolina-portfolios
git sparse-checkout set karolina-bengtsson-portfolios.zip
git checkout cursor/portfolio-downloads-e3ca
```

## After extracting

Each folder is a static site. Open `index.html` in a browser, or upload to any static host.

```
composer-e3ca/index.html
grok-5cf4/index.html
grok-eea0/index.html
```
