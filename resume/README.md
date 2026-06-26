# Résumé sources

The committed `public/resume.pdf` (EN) and `public/resume-ko.pdf` (KO) are
rendered from the HTML in this directory. These sources used to live in an OS
temp dir and got wiped — they live in the repo now so that can't happen again.

```
resume.html        EN résumé
resume-ko.html     KO résumé (홍현석)
resume.css         shared stylesheet (design tokens mirror docs/DESIGN.md)
fonts/             self-hosted STATIC woff2 (see "Fonts" below)
```

Both résumés must stay **one A4 page**. The content is the résumé's own copy
(more detailed than the homepage CV in `content/`) — keep them roughly in sync
but they are intentionally separate.

## Regenerate the PDFs

Render with the gstack browse binary
(`~/.claude/skills/gstack/browse/dist/browse.exe`), one file at a time:

```sh
BROWSE=~/.claude/skills/gstack/browse/dist/browse.exe
$BROWSE viewport 794x1123
$BROWSE goto "file:///C:/WEBD/HOMEPAGE/resume/resume.html"
# wait until fonts are ready, else Chromium renders with fallbacks:
$BROWSE js "document.fonts.status"   # poll until "loaded"
$BROWSE pdf "C:/WEBD/HOMEPAGE/public/resume.pdf" --format a4 --print-background --tagged
```

Repeat for `resume-ko.html` → `public/resume-ko.pdf`. Restart the browse server
(`$BROWSE restart`) if you swapped a font file — it caches them.

## Verify (do this every time)

- **One page**: `pdfinfo <pdf>` → `Pages: 1`. The body `scrollHeight` must stay
  under 1123px (A4 @ 96dpi). If it overflows, tighten `body padding` /
  `section margin-top` / `.item margin-top` in `resume.css`.
- **Fonts embed as CID TrueType, never Type 3** (MiKTeX ships `pdffonts`):

  ```sh
  pdffonts public/resume.pdf
  ```

  Every row must read `CID TrueType`. `Type 3` = Chromium outlined a *variable*
  font → garbled, non-selectable, ATS-unsafe. `GulimChe` / `Arial` showing up =
  a glyph fell through to a system font.

## Fonts

Self-hosted **static** woff2 only (variable fonts embed as Type 3):

- **Pretendard** (Regular/Medium/SemiBold/Bold/ExtraBold) — body + headings,
  Korean and Latin. From the `pretendard` npm package's `static/woff2`.
- **Geist Mono Regular** — dates, URLs, tech lines. Must be the **static** build
  (`@fontsource/geist-mono`'s `geist-mono-latin-400-normal.woff2`). The variable
  `GeistMonoVF` shipped by the `geist` package / next-devtools embeds as Type 3.

The mono font stack is `"Geist Mono", "Pretendard", monospace` so Korean inside
a mono context (e.g. `현재`, the city in the contact line) falls back to
Pretendard, not the system `monospace` (GulimChe on Windows).
