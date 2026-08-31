# Plan 02 — Product Wiki (Unit 4)

**Status:** planned  
**Unit:** 4  
**Version gate:** none (docs-only unit; precedes wave releases)

## Goal

Create **`docs/wiki/`** as the product source of record for Lyrikai Themes: catalog, protocol, install guide, and changelog. Amend **RULEBOOK rule 4** so agents may write `docs/wiki/` (not just `.admin/` plan suites). Mirror the BPS roster into **`CATALOG.md`** with full theme cards and cousin-diff metadata.

## Stop condition

- `docs/wiki/` exists with required pages (see steps).
- `agents/.gears/RULEBOOK.md` rule 4 updated.
- `docs/wiki/CATALOG.md` lists all 20 themes; shipped four marked `shipped`, rest `planned`.
- BPS [theme-catalog.md](../specs/theme-catalog.md) has a pointer to wiki CATALOG as SoR (or thin sync note).
- **No theme code changes** in this unit unless user explicitly expands scope.

## In scope

- `docs/wiki/README.md` — wiki index
- `docs/wiki/CATALOG.md` — primary SoR: 20-theme table + expandable cards
- `docs/wiki/THEME-CARD-PROTOCOL.md` — cousin-diff rules (canonical public copy of [guides/theme-card-protocol.md](../guides/theme-card-protocol.md))
- `docs/wiki/INSTALL.md` — F5, VSIX, marketplace-ready instructions
- `docs/wiki/CHANGELOG.md` — version history aligned with extension semver
- `docs/wiki/ARCHITECTURE.md` — library → extension pipeline (user-facing)
- RULEBOOK amend: rule 4 allows `docs/wiki/` product docs

## Out of scope

- Implementing `color-math.ts`, ThemeCard factory, or new theme variations (Unit 5 / waves)
- GitHub remote push or release tags (Plan 08)
- Cursor agent chrome documentation
- Tip / lyrikai-meta wiki writes
- `.hive/` Paper row

## Prerequisites

- Plan 01 complete (extension + 4 shipped skins at v0.3.1).
- BPS suite present: [END-GOAL.md](../END-GOAL.md), [theme-catalog.md](../specs/theme-catalog.md), [theme-card-protocol.md](../guides/theme-card-protocol.md).
- User **GO** on this plan.

## Ordered steps

1. **Scaffold `docs/wiki/`** — create folder at repo root (sibling to `library/`, `extensions/`).
2. **Write `docs/wiki/README.md`** — link all wiki pages; state CATALOG is SoR; link public repo target `https://github.com/lyrikai-os/lk-themes`.
3. **Write `docs/wiki/CATALOG.md`** — import roster from [specs/theme-catalog.md](../specs/theme-catalog.md); add card sections for shipped skins (ground/ink/accent/syntax from [art-direction.md](../specs/art-direction.md)); stub cards for planned themes with mood one-liner + `nearestCousin`.
4. **Write `docs/wiki/THEME-CARD-PROTOCOL.md`** — public cousin-diff spec:
   - Brief → lock → mint flow
   - ΔE and hue thresholds (match [guides/theme-card-protocol.md](../guides/theme-card-protocol.md))
   - Tier A/B/C definitions
   - `nearestCousin` assignment rules
5. **Write `docs/wiki/INSTALL.md`** — F5 dev host, VSIX from `releases/`, Color Theme picker steps.
6. **Write `docs/wiki/ARCHITECTURE.md`** — `library/src/variations/` → generator → `extensions/lyrikai-themes/themes/*.json`.
7. **Write `docs/wiki/CHANGELOG.md`** — entries for 0.1.0, 0.3.0, 0.3.1 (4 skins); placeholder sections for 0.4.0–1.0.0 waves.
8. **Amend `agents/.gears/RULEBOOK.md` rule 4** — replace “except thin END-GOAL under `.admin/...`” with explicit allowlist: `.admin/docs/plan-suites/lyrikai-themes/` **and** `docs/wiki/**`.
9. **Update BPS pointer** — add SoR note at top of [specs/theme-catalog.md](../specs/theme-catalog.md) confirming `docs/wiki/CATALOG.md` is primary after this unit.

## Verification

1. All seven wiki files exist and cross-link correctly.
2. CATALOG table has 20 rows; slugs match [theme-catalog.md](../specs/theme-catalog.md).
3. THEME-CARD-PROTOCOL documents cousin-diff thresholds and `nearestCousin` field.
4. RULEBOOK rule 4 mentions `docs/wiki/`.
5. No changes under `library/` or `extensions/` except if README root links to wiki (optional one-line link only).

## Handoff

- **Deliverables:** `docs/wiki/*` (7 files), RULEBOOK amend, BPS catalog pointer update.
- **Consumers:** Unit 5 factory agent (references THEME-CARD-PROTOCOL); wave agents 04–07 (update CATALOG card status on ship).
- **Paper ≠ GO:** this plan does not run until user says GO.

## Next dependency

- **Unit 5** — [03-factory-scale.md](./03-factory-scale.md) implements `validate:themes` enforcing cousin-diff from THEME-CARD-PROTOCOL.
- **Plan 08** — wiki INSTALL should reference final `repository.url` when GitHub publish completes.
