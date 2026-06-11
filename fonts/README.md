# Fonts

The site loads its typefaces from Google Fonts (see the `<link>` in each page's
`<head>` and the `@import` at the top of `styles/style.css`):

- **Barlow Condensed** (700 / 900, incl. italic) — `--font-display`
  Big display headings, hero title, crew/showgroup names, schedule times.
- **Syne** (500 / 700) — `--font-heading`
  Section headings (`h2`, `h3`).
- **Helvetica Neue / Helvetica / Arial** (system) — `--font-body`
  Body copy, labels, UI text.

All three are defined as CSS custom properties in `:root` in `styles/style.css`.
Change a font there and it updates across every page.

This folder is currently unused — no self-hosted font files are required.
