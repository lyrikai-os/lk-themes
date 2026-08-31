# Art Direction — Shipped Skins (01–03)

> **Catalog SoR:** Full 20-theme roster, wave assignments, and `nearestCousin` diff anchors live in [theme-catalog.md](./theme-catalog.md). After Unit 4, **`docs/wiki/CATALOG.md`** becomes the primary source of record — do not duplicate all 20 cards here. This file holds **deep art direction** for the four shipped skins only.

---

# Art Direction — Skin 01: Cream Bright

## Theme card

| Field | Value |
|-------|-------|
| **Label** | Lyrikai Themes Cream Bright |
| **Slug** | `cream-bright` |
| **uiTheme** | `vs` (light) |
| **Mood** | Warm coffee-cream paper, terracotta accent, high-chroma syntax |

### Ground

- Editor: warm cream paper (`#EBE5E0` family — original MIT hex)
- Sidebar / tabs inactive: slightly duskier cream (`#E0D8D2`, `#DDD4CE`)
- Borders: soft warm taupe, not cold gray

### Ink

- Body text: near-black brown (`#2A1F18`)
- Comments: muted warm gray-brown only — never compete with syntax

### Accent

- Terracotta/coral for activity bar, active tab top border, badges, links
- Primary accent: `#C75B40` (original cousin — not Bearded `#D3694C`)

### Syntax (high chroma)

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

## Avoid list

- Purple-indigo glow on UI chrome
- Inter (or any single font) as the visual hero of the theme
- Muddy taupe syntax where everything reads as one brown wash
- Copying Bearded GPL source, JSON, or hex tables verbatim
- Chat / AI panel chrome in v1

## Reference (feeling only)

Coffee Cream light themes: warm paper ground, coral accent energy, readable brown ink. Structure reference: Bearded Theme pipeline shape (MIT library → extension JSON).

---

# Art Direction — Skin 02: Black Prism

## Theme card

| Field | Value |
|-------|-------|
| **Label** | Lyrikai Themes Black Prism |
| **Slug** | `black-prism` |
| **uiTheme** | `vs-dark` (dark) |
| **Mood** | Pure black editor, electric cyan accent, high-chroma syntax |

### Ground

- Editor: pure black (`#000000` — original MIT hex)
- Sidebar / panels: barely lifted black (`#0A0A0A`)
- Borders: soft dark gray, not blue-tinted

### Ink

- Body text: white (`#FFFFFF`)
- Comments: muted gray only — never compete with syntax

### Accent

- Electric cyan for activity bar, active tab top border, badges, links
- Primary accent: `#00E5FF` (original — not terracotta)

### Syntax (high chroma)

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

## Avoid list

- Purple-indigo glow on UI chrome
- Copying Bearded GPL source, JSON, or hex tables verbatim
- Chat / AI panel chrome in v1

---

# Art Direction — Skin 03: Role Spectrum (Bright + Dark pair)

## Theme card

| Field | Value |
|-------|-------|
| **Labels** | Lyrikai Themes Role Spectrum Bright / Role Spectrum Dark |
| **Slugs** | `role-spectrum-bright`, `role-spectrum-dark` |
| **uiTheme** | `vs` (bright) / `vs-dark` (dark) |
| **textProfile** | `semantic-rich` — one HSL role table, two spectral grounds |
| **Mood** | Text-first role spectrum; cool mist or deep indigo-black chrome; unique hue per semantic role |

### Ground (varies by mode — distinct from Skins 01/02)

- **Bright:** cool mist editor (`#EEF1F8`), chrome `#E4E8F2` / `#D8DEEA`, violet accent `#7C3AED`
- **Dark:** deep indigo-black editor (`#06080F`), chrome `#0C0E18` / `#1A1D2E`, lavender accent `#C084FC`
- **Not** Cream Bright warm cream (`#EBE5E0`) or Black Prism pure black / cyan (`#00E5FF`)

### Ink (varies by mode)

- **Bright:** cool ink body (`#1A1D2E`), muted periwinkle-gray comments
- **Dark:** soft lavender-white body (`#E8EAFF`), muted cool comments
- Comment alpha and faint punctuation opacity vary by mode; role hues resolve from shared HSL table

### Text system (shared HSL table — unique hue per role)

One `ROLE_SPECTRUM_TEXT_ROLES` table: `{ h, s, lLight, lDark, fontStyle? }` per role. `resolveRoleHex(role, mode)` generates foregrounds.

| Role | Hue family | Style |
|------|------------|-------|
| Functions / methods | Azure ~h220 | bold on definitions |
| Keywords | Amber ~h32 | — |
| Types / class | Indigo ~h239 | — |
| Interface | Periwinkle ~h234 | — |
| Variables | Tangerine ~h21 | — |
| Parameters | Teal ~h174 | italic |
| Readonly | Slate ~h215 | — |
| Global / static | Rose ~h347 | bold |
| Properties | Orange ~h25 | — |
| Strings | Emerald ~h160 | — |
| Decorators / macros | Fuchsia ~h293 | — |
| Constants / numbers | Red family ~h0 / h355 | — |
| Tags | Sky ~h200 | — |
| Namespace | Cobalt ~h224 | — |
| Type parameters | Violet ~h270 | italic |
| Enum members | Lime ~h85 | — |
| Markdown h1 / h2 / h3 | Violet → fuchsia → rose | bold |
| Bracket rainbow | 6 role hues | keyword → property |

### Avoid list

- Reusing Cream Bright / Black Prism ground or accent hex
- Duplicate token rules per mode (forbidden)
- Mode-specific syntax hue tables (use HSL lLight/lDark instead)
- Copying Bearded GPL source, JSON, or hex tables verbatim
