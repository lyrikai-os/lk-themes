# Plan 05 — Wave B

**Status:** planned  
**Wave:** B  
**Version gate:** 0.5.0  
**Themes:** circus-night, vegas-neon, rainbow-code, vapor-dream

## Goal

Mint and ship **four carnival / neon genre skins** (Wave B), bump extension to **v0.5.0**, total **11 themes** shipped.

## Stop condition

- 4 new variations + JSON committed.
- Extension **v0.5.0**; VSIX `releases/lyrikai-themes-0.5.0.vsix`.
- `validate:themes` passes for all 11 themes.
- CATALOG status `shipped` for Wave B slugs.

## In scope

| Slug | uiTheme | nearestCousin | Mood (lock brief) |
|------|---------|---------------|-------------------|
| `circus-night` | `vs-dark` | `cosmic-void` | Big-top midnight; striped accent borders; warm spotlight gold + carnival red syntax |
| `vegas-neon` | `vs-dark` | `circus-night` | Strip neon pinks and cyans; chrome glow restrained; marquee gold keywords |
| `rainbow-code` | `vs` | `comic-ink` | Light ground; deliberate multi-hue syntax rainbow; accent single hue to avoid clown UI |
| `vapor-dream` | `vs-dark` | `glitch-matrix` | Vaporwave dusk purple-pink sky ground; teal accent; sunset gradient chrome hints |

- Theme cards + cousin-diff per protocol
- CHANGELOG 0.5.0

## Out of scope

- Wave C–D themes
- GitHub release tag (unless Plan 08 GO)
- Cursor agent chrome

## Prerequisites

- Wave A complete @ 0.4.0 (7 themes).
- Plan 03 validate:themes operational.
- User **GO** on this plan.

## Ordered steps

1. Lock Theme Cards for all four slugs (cousin-diff vs assigned cousins).
2. Cousin-diff dry-run — palettes must diverge from Wave A cousins (circus vs cosmic, etc.).
3. Mint `circus-night` → variation + JSON.
4. Mint `vegas-neon` → variation + JSON.
5. Mint `rainbow-code` → variation + JSON.
6. Mint `vapor-dream` → variation + JSON.
7. Bump extension to **0.5.0**; update VSIX script path.
8. `npm run build && npm run validate:themes`.
9. Package VSIX 0.5.0.
10. Update CATALOG + CHANGELOG; F5 smoke all 11 themes.

## Verification

1. 11 theme JSON files present.
2. `validate:themes` exit 0.
3. cousin-diff: vegas-neon vs circus-night passes (not too similar).
4. rainbow-code tier C still meets body/comment contrast on light ground.
5. VSIX 0.5.0 in `releases/`.

## Handoff

- **Deliverables:** 4 variations, v0.5.0 VSIX, doc updates.
- **Total shipped:** 11 themes.
- **Paper ≠ GO** until user authorizes.

## Next dependency

- **Plan 06** — [06-wave-c.md](./06-wave-c.md) @ 0.6.0.
