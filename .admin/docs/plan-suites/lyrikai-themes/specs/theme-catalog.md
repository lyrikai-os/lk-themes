# Theme Catalog — 20-Theme Roster

**Purpose:** BPS roster and cousin-diff anchor table. After Unit 4, **`docs/wiki/CATALOG.md`** becomes the primary source of record; keep this file in sync or replace with a thin pointer.

**Legend**

- **Profile:** `classic` (flat ThemePalette) · `semantic-rich` (HSL role table) · `genre` (experimental mood skins)
- **Tier:** A = readable daily driver · B = semantic depth · C = bold genre / high-contrast
- **Status:** `shipped` · `planned`
- **nearestCousin:** slug used by cousin-diff gate ([theme-card-protocol](../guides/theme-card-protocol.md))

## Full roster

| # | Slug | Label | uiTheme | Profile | Tier | Status | Wave | nearestCousin | Research concept |
|---|------|-------|---------|---------|------|--------|------|---------------|------------------|
| 1 | `cream-bright` | Lyrikai Themes Cream Bright | `vs` | classic | A | shipped | — | — (anchor) | warm coffee cream |
| 2 | `black-prism` | Lyrikai Themes Black Prism | `vs-dark` | classic | A | shipped | — | — (anchor) | pure black electric |
| 3 | `role-spectrum-bright` | Lyrikai Themes Role Spectrum Bright | `vs` | semantic-rich | B | shipped | — | `cream-bright` | spectral roles, cool mist |
| 4 | `role-spectrum-dark` | Lyrikai Themes Role Spectrum Dark | `vs-dark` | semantic-rich | B | shipped | — | `black-prism` | spectral roles, indigo-black |
| 5 | `cosmic-void` | Lyrikai Themes Cosmic Void | `vs-dark` | genre | C | planned | A | `black-prism` | cosmic deep space |
| 6 | `comic-ink` | Lyrikai Themes Comic Ink | `vs` | genre | C | planned | A | `cream-bright` | comic book halftone |
| 7 | `glitch-matrix` | Lyrikai Themes Glitch Matrix | `vs-dark` | genre | C | planned | A | `black-prism` | glitch matrix terminal |
| 8 | `circus-night` | Lyrikai Themes Circus Night | `vs-dark` | genre | C | planned | B | `cosmic-void` | circus night carnival |
| 9 | `vegas-neon` | Lyrikai Themes Vegas Neon | `vs-dark` | genre | C | planned | B | `circus-night` | las vegas neon strip |
| 10 | `rainbow-code` | Lyrikai Themes Rainbow Code | `vs` | genre | C | planned | B | `comic-ink` | rainbow syntax celebration |
| 11 | `vapor-dream` | Lyrikai Themes Vapor Dream | `vs-dark` | genre | C | planned | B | `glitch-matrix` | vaporwave sunset |
| 12 | `tron-grid` | Lyrikai Themes Tron Grid | `vs-dark` | genre | C | planned | C | `vegas-neon` | tron light cycle grid |
| 13 | `arcade-cabinet` | Lyrikai Themes Arcade Cabinet | `vs-dark` | genre | C | planned | C | `tron-grid` | arcade CRT cabinet |
| 14 | `phosphor-green` | Lyrikai Themes Phosphor Green | `vs-dark` | genre | C | planned | C | `glitch-matrix` | phosphor monochrome |
| 15 | `sakura-night` | Lyrikai Themes Sakura Night | `vs-dark` | genre | C | planned | C | `vapor-dream` | sakura night blossom |
| 16 | `deep-ocean` | Lyrikai Themes Deep Ocean | `vs-dark` | genre | C | planned | D | `cosmic-void` | ocean abyss bioluminescence |
| 17 | `desert-sunset` | Lyrikai Themes Desert Sunset | `vs` | genre | C | planned | D | `cream-bright` | desert golden hour |
| 18 | `newspaper-ink` | Lyrikai Themes Newspaper Ink | `vs` | genre | C | planned | D | `cream-bright` | newspaper print grayscale |
| 19 | `gothic-crimson` | Lyrikai Themes Gothic Crimson | `vs-dark` | genre | C | planned | D | `sakura-night` | gothic cathedral crimson |
| 20 | `honeycomb-amber` | Lyrikai Themes Honeycomb Amber | `vs` | genre | C | planned | D | `desert-sunset` | honeycomb warm amber |

## Wave summary

| Wave | Version | Slugs |
|------|---------|-------|
| Shipped | 0.3.1 | cream-bright, black-prism, role-spectrum-bright, role-spectrum-dark |
| A | 0.4.0 | cosmic-void, comic-ink, glitch-matrix |
| B | 0.5.0 | circus-night, vegas-neon, rainbow-code, vapor-dream |
| C | 0.6.0 | tron-grid, arcade-cabinet, phosphor-green, sakura-night |
| D | 1.0.0 | deep-ocean, desert-sunset, newspaper-ink, gothic-crimson, honeycomb-amber |

## Anchor themes (cousin-diff roots)

These four shipped skins are diff-gate anchors — new themes compare against their assigned `nearestCousin`, not against each other in bulk:

- `cream-bright` — light classic anchor
- `black-prism` — dark classic anchor
- `role-spectrum-bright` / `role-spectrum-dark` — semantic-rich pair (compare new semantic skins to the mode-matched anchor)

## Related docs

- Deep art direction for shipped skins 01–03: [art-direction.md](./art-direction.md)
- Mint protocol: [theme-card-protocol.md](../guides/theme-card-protocol.md)
- Wave execution: [plans/04-wave-a.md](../plans/04-wave-a.md) through [07-wave-d.md](../plans/07-wave-d.md)
