# Lyrikai Themes — END-GOAL

**Product:** Lyrikai Themes  
**Extension id:** `lyrikai.lyrikai-themes`  
**Publisher:** lyrikai  
**License:** MIT (all original work)  
**Public repo (target):** [github.com/lyrikai-os/lk-themes](https://github.com/lyrikai-os/lk-themes)  
**Current workspace:** `ide-styles` monorepo (`library/` + `extensions/lyrikai-themes/`)

## North star

Ship **20 original MIT editor themes** in one VS Code/Cursor extension, built from a maintainable **theme factory** (`library/` variations + generator → committed JSON in `extensions/lyrikai-themes/themes/`). Product documentation lives in **`docs/wiki/`** (Unit 4 — primary source of record). This plan suite (`.admin/docs/plan-suites/lyrikai-themes/`) is **planning only** until a build agent receives explicit **GO**.

**v1.0.0 gate:** Wave D complete — 20 themes shipped, catalog closed, public repo published, release tagged.

## Shipped today (v0.3.1)

| Slug | Label | uiTheme | Profile |
|------|-------|---------|---------|
| `cream-bright` | Lyrikai Themes Cream Bright | `vs` | classic |
| `black-prism` | Lyrikai Themes Black Prism | `vs-dark` | classic |
| `role-spectrum-bright` | Lyrikai Themes Role Spectrum Bright | `vs` | semantic-rich |
| `role-spectrum-dark` | Lyrikai Themes Role Spectrum Dark | `vs-dark` | semantic-rich |

## Roadmap — 16 planned themes

| Wave | Version | Themes | Plan |
|------|---------|--------|------|
| A | 0.4.0 | cosmic-void, comic-ink, glitch-matrix | [04-wave-a](./plans/04-wave-a.md) |
| B | 0.5.0 | circus-night, vegas-neon, rainbow-code, vapor-dream | [05-wave-b](./plans/05-wave-b.md) |
| C | 0.6.0 | tron-grid, arcade-cabinet, phosphor-green, sakura-night | [06-wave-c](./plans/06-wave-c.md) |
| D | 1.0.0 | deep-ocean, desert-sunset, newspaper-ink, gothic-crimson, honeycomb-amber | [07-wave-d](./plans/07-wave-d.md) |

Full roster with tiers and cousin-diff anchors: **[docs/wiki/CATALOG.md](../../../docs/wiki/CATALOG.md)** (primary SoR). BPS mirror: [specs/theme-catalog.md](./specs/theme-catalog.md).

**Product wiki:** [docs/wiki/README.md](../../../docs/wiki/README.md)

## Program units (plan suite)

| Unit | Plan | Purpose |
|------|------|---------|
| 1 | [01-extension-scaffold](./plans/01-extension-scaffold.md) | Factory + first skin — **complete** |
| 4 | [02-product-wiki](./plans/02-product-wiki.md) | `docs/wiki/` SoR, CATALOG, RULEBOOK amend |
| 5 | [03-factory-scale](./plans/03-factory-scale.md) | ThemeCard, color-math, validate:themes |
| — | [04–07 waves](./plans/04-wave-a.md) | Theme minting waves A–D |
| — | [08-github-publish](./plans/08-github-publish.md) | `lyrikai-os/lk-themes` remote, tags, VSIX policy |

## Design walls

- **MIT original hex** — all palette values Lyrikai-authored; no Bearded GPL JSON/hex verbatim.
- **Cousin-diff gate** — each new theme must pass minimum perceptual distance from `nearestCousin` (see [guides/theme-card-protocol.md](./guides/theme-card-protocol.md)).
- **Readability tiers** — A (classic), B (semantic-rich), C (genre/experimental); factory must support all three.
- **Inspired-by feeling only** — research concepts (cosmic, comic book, vaporwave, etc.) inform mood, not copied palettes.
- **Avoid:** purple-indigo glow as default chrome, Inter-as-hero, muddy taupe syntax, chat / inline-AI / Cursor agent chrome customization.
- **No user `settings.json` edits** by agents or extension code.

## Out of scope (entire program)

- Chat / inline-AI / Cursor agent chrome customization
- Re-app integration
- Tip / lyrikai-meta wiki writes
- `.hive/` Paper rows

## Verification (v1.0.0)

1. `npm run build` — exit 0; all 20 theme JSON files committed under `extensions/lyrikai-themes/themes/`.
2. `npm run validate:themes` (Unit 5) — cousin-diff + manifest parity pass.
3. `docs/wiki/CATALOG.md` lists all 20 themes; matches extension `package.json` contributes.
4. Extension `package.json` `repository.url` → `https://github.com/lyrikai-os/lk-themes`.
5. Git tag `v1.0.0` + VSIX in `releases/`; F5 / VSIX install shows all 20 in Color Theme picker.

## Paper ≠ GO

This suite is **paper**. No product implementation is authorized by these docs alone. Build agents need explicit user **GO** per unit.
