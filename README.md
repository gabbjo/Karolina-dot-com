# Karolina Bengtsson

Personlig webbplats för sopranen Karolina Bengtsson. Ren HTML, CSS och JavaScript — ingen build.

## Öppna lokalt

```
python3 -m http.server
```

Öppna http://localhost:8000

## Språk

SV, EN, DE och FR. Valet sparas som `kb-lang` i localStorage. Första besöket följer `navigator.language` (standard svenska). Direktlänk: `/?lang=en` (även `sv`, `de`, `fr`).

Live: https://karolinabengtsson.com

## Publicera

Ladda upp innehållet i den här mappen till webbhotellet så att `index.html` ligger i webbrotten. Apache läser `.htaccess` (säkerhets- och cache-headers). Typsnitten ligger i `fonts/` och laddas lokalt, inte från Google Fonts.
