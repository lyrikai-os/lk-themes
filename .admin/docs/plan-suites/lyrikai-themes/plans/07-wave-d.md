# Plan 07 — Wave D (Catalog Closeout)

**Status:** planned  
**Wave:** D  
**Version gate:** 1.0.0  
**Themes:** deep-ocean, desert-sunset, newspaper-ink, gothic-crimson, honeycomb-amber

## Goal

Mint the **final five genre skins**, ship extension **v1.0.0**, close the **20-theme catalog**, and satisfy [END-GOAL.md](../END-GOAL.md) verification gates.

## Stop condition

- 5 new variations + JSON; **20 total** themes in extension.
- Extension **v1.0.0**; VSIX `releases/lyrikai-themes-1.0.0.vsix`.
- `validate:themes` passes for entire catalog.
- All 20 CATALOG entries `shipped`.
- Git tag `v1.0.0` (coordinate with Plan 08 if remote ready).
- User **GO** received and executed.

## In scope

| Slug | uiTheme | nearestCousin | Mood (lock brief) |
|------|---------|---------------|-------------------|
| `deep-ocean` | `vs-dark` | `cosmic-void` | Abyssal blue-black; bioluminescent teal accent; deep sea syntax cyans and jellies |
| `desert-sunset` | `vs` | `cream-bright` | Warm sand ground; saguaro green accent; sunset orange–violet syntax |
| `newspaper-ink` | `vs` | `cream-bright` | Newsprint off-white; grayscale chrome; ink-black body; restrained syntax (tier C but readable) |
| `gothic-crimson` | `vs-dark` | `sakura-night` | Cathedral stone dark; crimson stained-glass accent; muted gold syntax |
| `honeycomb-amber` | `vs` | `desert-sunset` | Honeycomb warm amber ground; hex-border subtle pattern via border tokens; golden syntax |

- Final CHANGELOG 1.0.0 entry — catalog complete
- END-GOAL verification checklist run

## Out of scope

- Post-1.0 theme additions (new program / v2 suite)
- Cursor agent chrome
- Marketplace listing (optional follow-up)

## Prerequisites

- Wave C complete @ 0.6.0 (15 themes).
- Plan 02 wiki CATALOG (recommended for public closeout).
- Plan 03 validate:themes.
- Plan 08 remote ready or staged locally for tag push.
- User **GO** on this plan.

## Ordered steps

1. Lock Theme Cards for all five Wave D slugs.
2. Cousin-diff dry-run — newspaper-ink vs cream-bright, honeycomb vs desert-sunset, gothic vs sakura-night.
3. Mint `deep-ocean`.
4. Mint `desert-sunset`.
5. Mint `newspaper-ink` — extra contrast review (grayscale tier C).
6. Mint `gothic-crimson`.
7. Mint `honeycomb-amber`.
8. Bump extension to **1.0.0** (semver major — catalog milestone).
9. `npm run build && npm run validate:themes` — full 20-theme pass.
10. Package VSIX 1.0.0.
11. Update CATALOG — all 20 `shipped`; wiki CHANGELOG 1.0.0 “catalog complete”.
12. Run END-GOAL verification checklist (build, validate, F5 all 20, manifest parity).
13. Coordinate with Plan 08 — tag `v1.0.0`, push if remote GO.

## Verification

1. Exactly **20** JSON files in `extensions/lyrikai-themes/themes/`.
2. `package.json` contributes lists 20 themes with correct labels/uiTheme.
3. `validate:themes` exit 0 — full cousin-diff matrix for non-anchors.
4. F5 Color Theme picker shows all 20 Lyrikai Themes labels.
5. VSIX 1.0.0 installs and activates any theme.
6. [theme-catalog.md](../specs/theme-catalog.md) / wiki CATALOG all `shipped`.

## Handoff

- **Deliverables:** 5 variations, v1.0.0 VSIX, catalog closeout docs.
- **Program complete** for 20-theme v1 scope per END-GOAL.
- **Paper ≠ GO** until user authorizes.

## Next dependency

- **Plan 08** — [08-github-publish.md](./08-github-publish.md) for `lyrikai-os/lk-themes` public repo, release tags, VSIX gitignore policy.
