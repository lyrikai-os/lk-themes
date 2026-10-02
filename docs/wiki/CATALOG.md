# Theme Catalog — Lyrikai Themes

**Primary source of record** for the 20-theme roster, theme cards, wave assignments, and `nearestCousin` diff anchors.

BPS mirror (sync from here after wave ships): `.admin/docs/plan-suites/lyrikai-themes/specs/theme-catalog.md`

## Legend

- **Profile:** `classic` (flat ThemePalette) · `semantic-rich` (HSL role table) · `genre` (experimental mood skins)
- **Tier:** A = readable daily driver · B = semantic depth · C = bold genre / high-contrast
- **Status:** `shipped` · `planned`
- **nearestCousin:** slug for cousin-diff gate — see [THEME-CARD-PROTOCOL.md](./THEME-CARD-PROTOCOL.md)

## Full roster

| # | Slug | Label | uiTheme | Profile | Tier | Status | Wave | nearestCousin | Research concept |
|---|------|-------|---------|---------|------|--------|------|---------------|------------------|
| 1 | `cream-bright` | Lyrikai Themes Cream Bright | `vs` | classic | A | shipped | — | — (anchor) | warm coffee cream |
| 2 | `black-prism` | Lyrikai Themes Black Prism | `vs-dark` | classic | A | shipped | — | — (anchor) | pure black electric |
| 3 | `role-spectrum-bright` | Lyrikai Themes Role Spectrum Bright | `vs` | semantic-rich | B | shipped | — | `cream-bright` | spectral roles, cool mist |
| 4 | `role-spectrum-dark` | Lyrikai Themes Role Spectrum Dark | `vs-dark` | semantic-rich | B | shipped | — | `black-prism` | spectral roles, indigo-black |
| 5 | `cosmic-void` | Lyrikai Themes Cosmic Void | `vs-dark` | semantic-rich | C | shipped | A | `black-prism` | cosmic deep space |
| 6 | `comic-ink` | Lyrikai Themes Comic Ink | `vs` | genre | C | shipped | A | `cream-bright` | comic book halftone |
| 7 | `glitch-matrix` | Lyrikai Themes Glitch Matrix | `vs-dark` | semantic-rich | C | shipped | A | `black-prism` | glitch matrix terminal |
| 8 | `circus-night` | Lyrikai Themes Circus Night | `vs-dark` | genre | C | shipped | B | `cosmic-void` | circus night carnival |
| 9 | `vegas-neon` | Lyrikai Themes Vegas Neon | `vs-dark` | genre | C | shipped | B | `circus-night` | las vegas neon strip |
| 10 | `rainbow-code` | Lyrikai Themes Rainbow Code | `vs` | genre | C | shipped | B | `comic-ink` | rainbow syntax celebration |
| 11 | `vapor-dream` | Lyrikai Themes Vapor Dream | `vs-dark` | genre | C | shipped | B | `glitch-matrix` | vaporwave sunset |
| 12 | `tron-grid` | Lyrikai Themes Tron Grid | `vs-dark` | genre | C | shipped | C | `vegas-neon` | tron light cycle grid |
| 13 | `arcade-cabinet` | Lyrikai Themes Arcade Cabinet | `vs-dark` | genre | C | shipped | C | `tron-grid` | arcade CRT cabinet |
| 14 | `phosphor-green` | Lyrikai Themes Phosphor Green | `vs-dark` | genre | C | shipped | C | `glitch-matrix` | phosphor monochrome |
| 15 | `sakura-night` | Lyrikai Themes Sakura Night | `vs-dark` | genre | C | shipped | C | `vapor-dream` | sakura night blossom |
| 16 | `deep-ocean` | Lyrikai Themes Deep Ocean | `vs-dark` | genre | C | shipped | D | `cosmic-void` | ocean abyss bioluminescence |
| 17 | `desert-sunset` | Lyrikai Themes Desert Sunset | `vs` | genre | C | shipped | D | `cream-bright` | desert golden hour |
| 18 | `newspaper-ink` | Lyrikai Themes Newspaper Ink | `vs` | genre | C | shipped | D | `cream-bright` | newspaper print grayscale |
| 19 | `gothic-crimson` | Lyrikai Themes Gothic Crimson | `vs-dark` | genre | C | shipped | D | `sakura-night` | gothic cathedral crimson |
| 20 | `honeycomb-amber` | Lyrikai Themes Honeycomb Amber | `vs` | genre | C | shipped | D | `desert-sunset` | honeycomb warm amber |

## Wave summary

| Wave | Version | Slugs |
|------|---------|-------|
| Shipped (anchors) | 0.3.1 | cream-bright, black-prism, role-spectrum-bright, role-spectrum-dark |
| A | 0.4.0 | cosmic-void, comic-ink, glitch-matrix |
| B | 0.5.0 | circus-night, vegas-neon, rainbow-code, vapor-dream |
| C | 0.6.0 | tron-grid, arcade-cabinet, phosphor-green, sakura-night |
| D | 1.0.0 | deep-ocean, desert-sunset, newspaper-ink, gothic-crimson, honeycomb-amber |
| **Catalog closeout** | **1.0.0** | **20/20 themes shipped** |

## Anchor themes (cousin-diff roots)

These four shipped skins are diff-gate anchors — new themes compare against their assigned `nearestCousin`, not against each other in bulk:

- `cream-bright` — light classic anchor
- `black-prism` — dark classic anchor
- `role-spectrum-bright` / `role-spectrum-dark` — semantic-rich pair (compare new semantic skins to the mode-matched anchor)

---

## Shipped theme cards

### 1. Cream Bright (`cream-bright`) — shipped

| Field | Value |
|-------|-------|
| **Label** | Lyrikai Themes Cream Bright |
| **Slug** | `cream-bright` |
| **uiTheme** | `vs` (light) |
| **Profile / Tier** | classic / A |
| **Mood** | Warm coffee-cream paper, terracotta accent, high-chroma syntax |

#### Ground

- Editor: warm cream paper (`#EBE5E0` family)
- Sidebar / tabs inactive: slightly duskier cream (`#E0D8D2`, `#DDD4CE`)
- Borders: soft warm taupe, not cold gray

#### Ink

- Body text: near-black brown (`#2A1F18`)
- Comments: muted warm gray-brown only — never compete with syntax

#### Accent

- Terracotta/coral for activity bar, active tab top border, badges, links
- Primary accent: `#C75B40`

#### Syntax (high chroma)

| Role | Hue | Example hex |
|------|-----|-------------|
| Functions | Cyan | `#0095A8` |
| Keywords | Gold | `#C49400` |
| Decorators | Magenta | `#C21884` |
| Properties | Orange | `#E07800` |
| Strings | Green | `#3D9A00` |
| Types | Violet | `#7B52C4` |
| Variables | Warm coral-orange | `#D45030` |
| Errors / constants | Red | `#E03030` |

#### Avoid

- Purple-indigo glow on UI chrome
- Inter (or any single font) as the visual hero of the theme
- Muddy taupe syntax where everything reads as one brown wash
- Copying Bearded GPL source, JSON, or hex tables verbatim
- Chat / AI panel chrome in v1

---

### 2. Black Prism (`black-prism`) — shipped

| Field | Value |
|-------|-------|
| **Label** | Lyrikai Themes Black Prism |
| **Slug** | `black-prism` |
| **uiTheme** | `vs-dark` (dark) |
| **Profile / Tier** | classic / A |
| **Mood** | Pure black editor, electric cyan accent, high-chroma syntax |

#### Ground

- Editor: pure black (`#000000`)
- Sidebar / panels: barely lifted black (`#0A0A0A`)
- Borders: soft dark gray, not blue-tinted

#### Ink

- Body text: white (`#FFFFFF`)
- Comments: muted gray only — never compete with syntax

#### Accent

- Electric cyan for activity bar, active tab top border, badges, links
- Primary accent: `#00E5FF`

#### Syntax (high chroma)

| Role | Hue | Example hex |
|------|-----|-------------|
| Functions | Cyan | `#00E5FF` |
| Keywords | Gold | `#FFD54F` |
| Decorators | Magenta | `#FF4081` |
| Properties | Orange | `#FF9100` |
| Strings | Green | `#69F0AE` |
| Types | Violet | `#B388FF` |
| Variables | Warm coral-orange | `#FF7043` |
| Errors / constants | Red | `#FF5252` |

#### Avoid

- Purple-indigo glow on UI chrome
- Copying Bearded GPL source, JSON, or hex tables verbatim
- Chat / AI panel chrome in v1

---

### 3. Role Spectrum Bright (`role-spectrum-bright`) — shipped

| Field | Value |
|-------|-------|
| **Label** | Lyrikai Themes Role Spectrum Bright |
| **Slug** | `role-spectrum-bright` |
| **uiTheme** | `vs` (light) |
| **Profile / Tier** | semantic-rich / B |
| **nearestCousin** | `cream-bright` |
| **Mood** | Text-first role spectrum; cool mist chrome; unique hue per semantic role |

#### Ground

- Editor: cool mist (`#EEF1F8`)
- Chrome: `#E4E8F2` / `#D8DEEA`
- Accent: violet `#7C3AED`
- **Not** Cream Bright warm cream or Black Prism cyan

#### Ink

- Body: cool ink (`#1A1D2E`)
- Comments: muted periwinkle-gray

#### Text system

Shared HSL table `ROLE_SPECTRUM_TEXT_ROLES` — see [SCHEMA.md](./SCHEMA.md). Unique hue per role; lightness from `lLight`.

#### Avoid

- Reusing Cream Bright / Black Prism ground or accent hex
- Duplicate token rules per mode
- Mode-specific syntax hue tables (use HSL `lLight`/`lDark` instead)

---

### 4. Role Spectrum Dark (`role-spectrum-dark`) — shipped

| Field | Value |
|-------|-------|
| **Label** | Lyrikai Themes Role Spectrum Dark |
| **Slug** | `role-spectrum-dark` |
| **uiTheme** | `vs-dark` (dark) |
| **Profile / Tier** | semantic-rich / B |
| **nearestCousin** | `black-prism` |
| **Mood** | Text-first role spectrum; deep indigo-black chrome; unique hue per semantic role |

#### Ground

- Editor: deep indigo-black (`#080818`)
- Chrome: `#0C0E18` / `#1A1D2E`
- Accent: lavender `#C084FC`

#### Ink

- Body: soft lavender-white (`#E8EAFF`)
- Comments: muted cool tones

#### Text system

Same HSL table as bright pair; lightness from `lDark`.

#### Avoid

- Same as Role Spectrum Bright — no classic anchor reuse; no per-mode hue tables

---

## Planned theme stubs

Locked cards expand at wave GO. Each stub records mood + cousin for factory diff.

### 5. Cosmic Void (`cosmic-void`) — shipped · Wave A

| Field | Value |
|-------|-------|
| **nearestCousin** | `black-prism` |
| **Mood** | Deep space void; starfield-muted chrome; cool violet-blue accent; nebula syntax hues |

### 6. Comic Ink (`comic-ink`) — shipped · Wave A

| Field | Value |
|-------|-------|
| **nearestCousin** | `cream-bright` |
| **Mood** | Comic book halftone; bold ink outlines; primary-color syntax pops on newsprint ground |

### 7. Glitch Matrix (`glitch-matrix`) — shipped · Wave A

| Field | Value |
|-------|-------|
| **nearestCousin** | `black-prism` |
| **Mood** | Glitch matrix terminal; phosphor-green accent family; digital noise atmosphere |

### 8. Circus Night (`circus-night`) — shipped · Wave B

| Field | Value |
|-------|-------|
| **nearestCousin** | `cosmic-void` |
| **Mood** | Circus night carnival; saturated tent stripes; spotlight gold accent |

### 9. Vegas Neon (`vegas-neon`) — shipped · Wave B

| Field | Value |
|-------|-------|
| **nearestCousin** | `circus-night` |
| **Mood** | Las Vegas neon strip; pinks and cyans; chrome glow restrained; marquee gold keywords |

### 10. Rainbow Code (`rainbow-code`) — shipped · Wave B

| Field | Value |
|-------|-------|
| **nearestCousin** | `comic-ink` |
| **Mood** | Rainbow syntax celebration; prismatic role hues; playful light ground |

### 11. Vapor Dream (`vapor-dream`) — shipped · Wave B

| Field | Value |
|-------|-------|
| **nearestCousin** | `glitch-matrix` |
| **Mood** | Vaporwave sunset; dusk purple-pink sky ground; teal accent |

### 12. Tron Grid (`tron-grid`) — shipped · Wave C

| Field | Value |
|-------|-------|
| **nearestCousin** | `vegas-neon` |
| **Mood** | Tron light-cycle grid; black void; cyan grid lines; minimal chrome |

### 13. Arcade Cabinet (`arcade-cabinet`) — shipped · Wave C

| Field | Value |
|-------|-------|
| **nearestCousin** | `tron-grid` |
| **Mood** | Arcade CRT cabinet; scanline-adjacent borders; candy-cabinet primaries |

### 14. Phosphor Green (`phosphor-green`) — shipped · Wave C

| Field | Value |
|-------|-------|
| **nearestCousin** | `glitch-matrix` |
| **Mood** | Monochrome P1 green phosphor; single-hue syntax ramp; subtle bloom on accent only |

### 15. Sakura Night (`sakura-night`) — shipped · Wave C

| Field | Value |
|-------|-------|
| **nearestCousin** | `vapor-dream` |
| **Mood** | Sakura night blossom; deep plum ground; soft pink petal accent |

### 16. Deep Ocean (`deep-ocean`) — shipped · Wave D

| Field | Value |
|-------|-------|
| **nearestCousin** | `cosmic-void` |
| **Mood** | Ocean abyss bioluminescence; teal depth gradient; jellyfish syntax glow |

### 17. Desert Sunset (`desert-sunset`) — shipped · Wave D

| Field | Value |
|-------|-------|
| **nearestCousin** | `cream-bright` |
| **Mood** | Desert golden hour; warm sand ground; copper sunset accent |

### 18. Newspaper Ink (`newspaper-ink`) — shipped · Wave D

| Field | Value |
|-------|-------|
| **nearestCousin** | `cream-bright` |
| **Mood** | Newspaper print grayscale; newsprint off-white; ink-black body; restrained syntax |

### 19. Gothic Crimson (`gothic-crimson`) — shipped · Wave D

| Field | Value |
|-------|-------|
| **nearestCousin** | `sakura-night` |
| **Mood** | Gothic cathedral crimson; stone dark ground; stained-glass ruby accent |

### 20. Honeycomb Amber (`honeycomb-amber`) — shipped · Wave D

| Field | Value |
|-------|-------|
| **nearestCousin** | `desert-sunset` |
| **Mood** | Honeycomb warm amber; hex-pattern subtle borders; golden wax accent |

---

## Related

- Mint protocol: [THEME-CARD-PROTOCOL.md](./THEME-CARD-PROTOCOL.md)
- Types: [SCHEMA.md](./SCHEMA.md)
- Changelog / versions: [CHANGELOG.md](./CHANGELOG.md)
- Wiki index: [README.md](./README.md)
