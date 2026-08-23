# Karolina Bengtsson — Soprano

An editorial portfolio site for a (fictional) Swedish lyric soprano: engagement
calendar, biography and press, repertoire, discography with a shared audio
transport, film, and representation.

Hand-authored static HTML, CSS and JavaScript. No framework, no build step, no
third-party requests at runtime — fonts, photography, audio and film are all
served from this repository.

```
index.html
assets/
  css/fonts.css     self-hosted @font-face declarations
  css/main.css      design tokens and the whole stylesheet
  js/main.js        reveals, scrollspy, calendar filter, audio transport, film
  fonts/            Newsreader + DM Mono, latin & latin-ext subsets (woff2)
  img/              graded photography, webp + jpeg at three widths each
  audio/            excerpt files for the discography
  video/            self-hosted films
```

## Running it

Any static server will do, but use one that honours HTTP `Range` requests or
seeking within the audio and film will restart the stream:

```bash
npx serve .
# or
python3 -m http.server 8000   # note: no Range support, media seeking will misbehave
```

## Design system

**Palette.** Unbleached linen paper (`#F4F1EA`) with charcoal ink (`#181716`)
and a single muted raw-umber accent (`#6B5C46`) used only for state: the
current section, a premiere, the playhead. Every step of the ink ramp clears
4.5:1 against the paper *and* against the tinted hover rows, so the quiet
metadata is legible rather than merely decorative.

**Type.** Newsreader for display and running text, set with its optical-size
axis tuned per role — 72 at the masthead scale, 14 in metadata. DM Mono at
11px with 0.14em tracking for dates, catalogue numbers, roles and labels.
Both self-hosted; the two most-used faces are preloaded.

**Grid.** A twelve-column grid with fluid gutters (`--gutter`), deliberately
asymmetric: the hero portrait occupies the right five columns from the top
edge, section numbers sit alone in the first column, notes hang in columns
8–11. Hairline rules (1px at 15% ink) carry the structure instead of borders,
cards or shadows.

**Motion.** Opacity and a 14px lift over 0.85s on a single easing curve, with
the name revealed by line masks. Everything is disabled under
`prefers-reduced-motion: reduce`.

## Notable implementation details

- **The calendar is a real `<table>`** — an opera programme index, not cards.
  Below 64em the rows reflow into a stacked register with CSS grid. The
  redundant ARIA roles that pattern usually attracts were removed after
  confirming in the accessibility tree that table, row, rowheader and cell
  semantics survive the reflow; they also make the document fail validation.
- **One shared audio transport** rather than a player per row. The scrubber is
  a `role="slider"` with arrow, Page, Home and End keys, live `aria-valuetext`
  in minutes and seconds, and a polite status region announcing play state.
- **Film loads nothing until asked.** Posters are static images; the `<video>`
  element is constructed on click, and starting a film pauses the audio.
- **No hamburger.** Wide viewports get inline text links with a scrollspy;
  narrow viewports get a full contents page opened by a text button, closable
  with Escape.

## Checks

- W3C Nu HTML validator: 0 messages.
- axe-core (WCAG 2.1 A/AA + best practice) at 1600px and 390px: 0 violations.
- Verified with keyboard-only traversal, and under `prefers-reduced-motion`.

## Content

Everything here is invented for demonstration: the artist, her engagements,
agencies, press quotations and catalogue numbers. Real institutions and
composers are named as they would be in a genuine calendar. Photography is
generated and colour-graded to a single tonal family; the audio excerpts are
synthesised, and the films are slow moves across the stills.
