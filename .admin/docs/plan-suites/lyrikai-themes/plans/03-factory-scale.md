# Plan 03 — Factory Scale (Unit 5)

**Status:** planned  
**Unit:** 5  
**Version gate:** none (infra unit; enables waves A–D)

## Goal

Scale the theme factory from hand-maintained registrations to a **ThemeCard-driven pipeline**: shared color math, typed cards, theme factory generator, auto-manifest for extension `package.json`, and **`npm run validate:themes`** with cousin-diff enforcement per [theme-card-protocol.md](../guides/theme-card-protocol.md).

## Stop condition

- `library/src/shared/color-math.ts` — ΔE, hue distance, contrast helpers.
- `library/src/shared/theme-card.ts` — `ThemeCard` type + validation.
- `library/src/factory/theme-factory.ts` — card → `ThemeVariation` + JSON emit.
- Auto-manifest: build updates `extensions/lyrikai-themes/package.json` `contributes.themes` from registry.
- Root script `validate:themes` — cousin-diff vs `nearestCousin`, manifest parity, no duplicate slugs.
- Existing 4 skins still build identically (snapshot or diff test).
- **No new theme slugs** in this unit (waves add skins).

## In scope

- `color-math.ts` — CIEDE2000 ΔE, hue angle diff, relative luminance
- `ThemeCard` interface — slug, label, uiTheme, profile, tier, nearestCousin, palette refs
- `theme-factory.ts` — register cards, emit variations, hook existing generators
- Refactor `theme-registry.ts` to consume cards (backward compatible with current 4 skins)
- `library/src/build.ts` — auto-manifest step after JSON generation
- `package.json` (root) — `"validate:themes": "npm run validate:themes -w library"`
- `library/package.json` — validate script implementation
- Unit tests for color-math and cousin-diff pass/fail cases
- Document factory usage in `docs/wiki/ARCHITECTURE.md` (if Unit 4 done) or BPS README

## Out of scope

- Minting wave A–D theme variations (Plans 04–07)
- VSIX packaging changes beyond manifest auto-sync
- Marketplace publish
- GitHub remote (Plan 08)
- Cursor agent chrome tokens

## Prerequisites

- Plan 01 complete — 4 skins build at v0.3.1.
- [theme-card-protocol.md](../guides/theme-card-protocol.md) defines cousin-diff thresholds.
- Recommended: Plan 02 complete so `docs/wiki/THEME-CARD-PROTOCOL.md` is public SoR (not blocking if BPS guide exists).
- User **GO** on this plan.

## Ordered steps

1. **Add `color-math.ts`** — `deltaE(hexA, hexB)`, `hueDelta(hexA, hexB)`, `luminance(hex)`; export thresholds as constants matching protocol (ΔE ≥ 8 ground/accent, hue ≥ 15° accent).
2. **Define `ThemeCard` type** — fields from protocol + `palette: ThemePalette | TextRolePalette | GenrePalette` union; `nearestCousin?: string` (required for non-anchor skins).
3. **Implement `theme-factory.ts`** — `registerCard(card)`, `cardToVariation(card)`, integrate with existing `generators/vscode/`.
4. **Migrate 4 shipped skins to cards** — cream-bright, black-prism, role-spectrum pair; anchors have no `nearestCousin` or self-skip in validator.
5. **Auto-manifest** — after build, rewrite `contributes.themes` array in extension `package.json` from registry order (preserve version/scripts manually or via merge).
6. **Implement `validate:themes`** — checks:
   - Every registry slug has JSON file `{slug}` naming convention
   - Manifest entries match registry labels/paths/uiTheme
   - Cousin-diff pass for each skin with `nearestCousin`
   - No duplicate hex blocks between skin and cousin (ground, accent, syntax keyword)
7. **Wire root script** — `npm run validate:themes` from workspace root.
8. **Tests** — color-math known pairs; cousin-diff fail on cream-bright clone; pass on role-spectrum vs cream-bright.
9. **Run build + validate** — exit 0; committed JSON unchanged or regenerated identically.

## Verification

1. `npm run build` — exit 0; 4 theme JSON files present.
2. `npm run validate:themes` — exit 0 on current tree.
3. Introduce deliberate cousin-fail fixture in test only — validator catches it.
4. Auto-manifest: adding a test card in dev branch updates contributes (remove test card before handoff).
5. No regression in F5 Color Theme picker for all 4 labels.

## Handoff

- **Deliverables:** color-math, ThemeCard, theme-factory, validate:themes, auto-manifest, tests.
- **Consumers:** Wave plans 04–07 mint new cards through factory; each wave ends with `validate:themes` green.
- **Paper ≠ GO:** this plan does not run until user says GO.

## Next dependency

- **Plan 04** — [04-wave-a.md](./04-wave-a.md) first theme mint wave @ 0.4.0 (requires validate:themes).
