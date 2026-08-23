Karolina Bengtsson — Editorial Portfolio Builds
==============================================

Four independent portfolio builds from parallel Cloud Agent runs.
Each folder is a self-contained static site, ready to publish.

FOLDERS
-------

composer-e3ca/
  Agent: Composer 2.5
  Stack: Vite + Tailwind v3
  Typography: Cormorant Garamond / Newsreader / IBM Plex Mono
  Framing: Scandinavian house soprano (Stockholm, Malmö, GöteborgsOperan)
  Entry: index.html

grok-5cf4/
  Agent: Grok 4.6
  Stack: Plain HTML / CSS / JS (no build step)
  Typography: Newsreader / Familjen Grotesk / IBM Plex Mono
  Framing: Oper Frankfurt ensemble (Katalog 26–27)
  Entry: index.html
  Includes: Multiple portrait plates in assets/img/

grok-eea0/
  Agent: Grok 4.6
  Stack: Vite + Tailwind v4
  Typography: Newsreader / Schibsted Grotesk / IBM Plex Mono
  Framing: Oper Frankfurt ensemble, Birgit Nilsson Stipendium
  Entry: index.html
  Includes: Local portrait assets in media/

opus-69b0/
  Agent: Claude Opus 5
  Stack: Plain HTML / CSS / JS (no build step, no third-party runtime requests)
  Typography: Newsreader / DM Mono (self-hosted woff2)
  Framing: Fictional Swedish lyric soprano, full editorial catalogue
  Entry: index.html
  Includes: Self-hosted fonts, photography (webp+jpeg), audio excerpts, films
  Note: Use a static server with HTTP Range support for media seeking (e.g. npx serve .)

ZIP ARCHIVES
------------

karolina-bengtsson-portfolios.zip  — all four builds
composer-e3ca.zip
grok-5cf4.zip
grok-eea0.zip
opus-69b0.zip

PUBLISHING
----------

Upload any single folder to static hosting (Netlify, Vercel, GitHub Pages,
Cloudflare Pages, S3, etc.). Open index.html locally to preview.

All builds use relative asset paths and require no server-side runtime.

NOTES
-----

- Some builds use external URLs for demo audio/video embeds.
- Replace placeholder portraits and biography copy with production content.
- Ticket and press-kit links are placeholders.
