# Karolina Bengtsson

Personal website for soprano Karolina Bengtsson. Plain HTML, CSS and a few lines of JavaScript — no build step, no third-party fonts.

Live: https://karolinabengtsson.com

The published site is a refined version of the Grok 4.6 editorial build (`builds/grok-5cf4`), using Tore Sjöqvist’s four outdoor portraits and biography text from the official artist materials. Google Fonts and unverified catalogue copy from the first Grok drafts were removed.

## Open locally

```
python3 -m http.server
```

Open http://localhost:8000

## Publish

Upload the contents of this folder to the web host so that `index.html` is in the web root. Apache reads `.htaccess` (security and cache headers). Fonts live in `fonts/` and load locally.

Zip files, `scripts/`, and markdown notes are not deployed.
