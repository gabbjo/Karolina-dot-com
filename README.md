# Karolina Bengtsson

Personlig webbplats för sopranen Karolina Bengtsson. Ren HTML, CSS och JavaScript — ingen build.

Live: https://karolinabengtsson.com

## Portfolio builds (arkiv)

Fyra parallella editorial-koncept finns i [`builds/`](builds/):

| Mapp | Agent | Beskrivning |
|------|-------|-------------|
| [`builds/opus-69b0/`](builds/opus-69b0/) | Claude Opus 5 | Självhostade typsnitt, ljud och film |
| [`builds/composer-e3ca/`](builds/composer-e3ca/) | Composer 2.5 | Cormorant Garamond, skandinavisk inramning |
| [`builds/grok-5cf4/`](builds/grok-5cf4/) | Grok 4.6 | Katalog 26–27, Oper Frankfurt |
| [`builds/grok-eea0/`](builds/grok-eea0/) | Grok 4.6 | Papperstextur, Schibsted Grotesk |

Öppna [`builds/`](builds/) för en översikt. Zip-arkiv finns i repots rot.

## Öppna lokalt

```
python3 -m http.server
```

Öppna http://localhost:8000

## Språk

SV, EN, DE och FR. Valet sparas som `kb-lang` i localStorage. Första besöket följer `navigator.language` (standard svenska).

## Publicera

Ladda upp innehållet i den här mappen till webbhotellet så att `index.html` ligger i webbrotten. Apache läser `.htaccess` (säkerhets- och cache-headers). Typsnitten ligger i `fonts/` och laddas lokalt, inte från Google Fonts.
