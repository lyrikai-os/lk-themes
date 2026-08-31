# Plan 04 — Wave A

**Status:** planned  
**Wave:** A  
**Version gate:** 0.4.0  
**Themes:** cosmic-void, comic-ink, glitch-matrix

## Goal

Mint and ship **three genre-tier dark/light skins** (Wave A), bump extension to **v0.4.0**, and update catalog status to `shipped` for all three slugs.

## Stop condition

- 3 new variations + JSON in `extensions/lyrikai-themes/themes/`.
- Extension version **0.4.0**; VSIX `releases/lyrikai-themes-0.4.0.vsix`.
- `npm run validate:themes` passes cousin-diff for all 7 themes (4 existing + 3 new).
- CATALOG/wiki entries updated to `shipped` for Wave A slugs.
- User **GO** received and executed.

## In scope

| Slug | uiTheme | nearestCousin | Mood (lock brief) |
|------|---------|---------------|-------------------|
| `cosmic-void` | `vs-dark` | `black-prism` | Deep space void; starfield-muted chrome; cool violet-blue accent; nebula syntax hues |
| `comic-ink` | `vs` | `cream-bright` | Comic halftone paper; bold ink outlines; primary red/blue pop; Ben-Day dot comment fade |
| `glitch-matrix` | `vs-dark` | `black-prism` | Terminal matrix black-green; scanline subtle border; phosphor green accent; corrupted-string syntax |

- Theme cards locked per [theme-card-protocol.md](../guides/theme-card-protocol.md)
- `npm run build` + committed JSON
- CHANGELOG entry 0.4.0

## Out of scope

- Wave B–D themes
- Factory infra unless Plan 03 incomplete (then minimal manual register OK with follow-up)
- GitHub push (Plan 08) unless user GO on publish milestone
- Cursor agent chrome

## Prerequisites

- Plan 01 complete (4 skins).
- Plan 03 complete — **validate:themes** and ThemeCard factory (recommended hard prerequisite).
- Plan 02 recommended — wiki CATALOG for status updates.
- Roster: [theme-catalog.md](../specs/theme-catalog.md).
- User **GO** on this plan.

## Ordered steps

1. **Lock cards** — write full Theme Cards (ground/ink/accent/syntax/avoid) for cosmic-void, comic-ink, glitch-matrix in wave appendix or wiki CATALOG.
2. **Cousin-diff dry-run** — verify palettes vs nearestCousin meet ΔE/hue thresholds before coding.
3. **Mint `cosmic-void`** — `library/src/variations/cosmic-void.ts`; register; build JSON.
4. **Mint `comic-ink`** — variation + JSON.
5. **Mint `glitch-matrix`** — variation + JSON.
6. **Bump version** — `extensions/lyrikai-themes/package.json` → `0.4.0`; update package script VSIX name.
7. **Build + validate** — `npm run build && npm run validate:themes`.
8. **Package VSIX** — `npm run package -w lyrikai-themes` → `releases/lyrikai-themes-0.4.0.vsix`.
9. **Update docs** — CHANGELOG 0.4.0; CATALOG status `shipped` for A slugs; optional art-direction appendix.
10. **Smoke test** — F5 → all 7 themes in Color Theme picker.

## Verification

1. 7 theme JSON files under `extensions/lyrikai-themes/themes/`.
2. `validate:themes` exit 0; cousin-diff passes for new skins.
3. Extension version 0.4.0; VSIX exists.
4. No GPL/Bearded verbatim hex (manual spot-check + validator).
5. Tier C readability: body text readable on ground for each skin.

## Handoff

- **Deliverables:** 3 variations, 3 JSON, v0.4.0 VSIX, catalog/CHANGELOG updates.
- **Total shipped after wave:** 7 themes.
- **Paper ≠ GO** until user authorizes.

## Next dependency

- **Plan 05** — [05-wave-b.md](./05-wave-b.md) @ 0.5.0 (circus-night, vegas-neon, rainbow-code, vapor-dream).
