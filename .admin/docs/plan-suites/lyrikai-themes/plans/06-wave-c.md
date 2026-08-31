# Plan 06 — Wave C

**Status:** planned  
**Wave:** C  
**Version gate:** 0.6.0  
**Themes:** tron-grid, arcade-cabinet, phosphor-green, sakura-night

## Goal

Mint and ship **four retro / genre skins** (Wave C), bump extension to **v0.6.0**, total **15 themes** shipped.

## Stop condition

- 4 new variations + JSON committed.
- Extension **v0.6.0**; VSIX `releases/lyrikai-themes-0.6.0.vsix`.
- `validate:themes` passes for all 15 themes.
- CATALOG status `shipped` for Wave C slugs.

## In scope

| Slug | uiTheme | nearestCousin | Mood (lock brief) |
|------|---------|---------------|-------------------|
| `tron-grid` | `vs-dark` | `vegas-neon` | Black grid void; cyan light-cycle lines; minimal chrome; electric cyan syntax |
| `arcade-cabinet` | `vs-dark` | `tron-grid` | CRT bezel dark blue; warm amber score accent; chunky arcade primaries in syntax |
| `phosphor-green` | `vs-dark` | `glitch-matrix` | Monochrome P1 green phosphor; single-hue syntax ramp; subtle bloom on accent only |
| `sakura-night` | `vs-dark` | `vapor-dream` | Night sakura indigo ground; pink blossom accent; soft petal syntax pastels |

- Theme cards + cousin-diff
- CHANGELOG 0.6.0

## Out of scope

- Wave D themes (final 5)
- v1.0.0 catalog closeout (Plan 07)
- Cursor agent chrome

## Prerequisites

- Wave B complete @ 0.5.0 (11 themes).
- Plan 03 factory validation green.
- User **GO** on this plan.

## Ordered steps

1. Lock Theme Cards for tron-grid, arcade-cabinet, phosphor-green, sakura-night.
2. Cousin-diff dry-run vs cousins (tron vs vegas-neon, phosphor vs glitch-matrix, etc.).
3. Mint `tron-grid`.
4. Mint `arcade-cabinet`.
5. Mint `phosphor-green` — verify monochrome ramp still passes diff vs glitch-matrix (not identical green).
6. Mint `sakura-night`.
7. Bump extension to **0.6.0**.
8. Build, validate, package VSIX 0.6.0.
9. Update CATALOG + CHANGELOG; F5 smoke 15 themes.

## Verification

1. 15 theme JSON files.
2. `validate:themes` exit 0.
3. phosphor-green ΔE vs glitch-matrix ≥ 8 on ground and accent.
4. sakura-night distinct from vapor-dream (hue separation on accent).
5. VSIX 0.6.0 present.

## Handoff

- **Deliverables:** 4 variations, v0.6.0 VSIX.
- **Total shipped:** 15 themes (5 remaining for v1.0.0).
- **Paper ≠ GO** until user authorizes.

## Next dependency

- **Plan 07** — [07-wave-d.md](./07-wave-d.md) @ 1.0.0 catalog closeout.
