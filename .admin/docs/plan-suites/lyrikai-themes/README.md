# Lyrikai Themes — Plan Suite

BPS planning docs for the **Lyrikai Themes** product leaf (`lyrikai.lyrikai-themes`).  
**Paper ≠ GO** — these files do not authorize implementation. Build agents require explicit user permission per unit.

## Entrypoint (build agents)

1. Read [END-GOAL.md](./END-GOAL.md) for north star and v1.0.0 gate.
2. **Next executable units** (after Plan 01 complete):
   - [plans/02-product-wiki.md](./plans/02-product-wiki.md) — Unit 4: `docs/wiki/` SoR
   - [plans/03-factory-scale.md](./plans/03-factory-scale.md) — Unit 5: factory scale (can parallel wiki after card protocol exists)
3. Wave plans 04–07 require Unit 5 factory gates unless noted in prerequisites.
4. [plans/08-github-publish.md](./plans/08-github-publish.md) — remote + release milestones (coordinate with wave versions).

## Plan index

| # | Plan | Unit | Status | Version gate |
|---|------|------|--------|--------------|
| 01 | [extension-scaffold](./plans/01-extension-scaffold.md) | 1 | **complete** | 0.1.0 → 0.3.1 |
| 02 | [product-wiki](./plans/02-product-wiki.md) | 4 | **complete** | — |
| 03 | [factory-scale](./plans/03-factory-scale.md) | 5 | **complete** | — |
| 04 | [wave-a](./plans/04-wave-a.md) | — | **complete** | 0.4.0 |
| 05 | [wave-b](./plans/05-wave-b.md) | — | **complete** | 0.5.0 |
| 06 | [wave-c](./plans/06-wave-c.md) | — | **complete** | 0.6.0 |
| 07 | [wave-d](./plans/07-wave-d.md) | — | **complete** | 1.0.0 |
| 08 | [github-publish](./plans/08-github-publish.md) | — | planned | per wave |

## Specs & guides

| Doc | Purpose |
|-----|---------|
| [END-GOAL.md](./END-GOAL.md) | North star, 20-theme roadmap, verification |
| [specs/theme-catalog.md](./specs/theme-catalog.md) | Full 20-theme roster (slug, tier, cousin, status) |
| [specs/art-direction.md](./specs/art-direction.md) | Deep cards for shipped skins 01–03 |
| [guides/theme-card-protocol.md](./guides/theme-card-protocol.md) | Brief → lock → mint; cousin-diff; tiers |

## Hard walls

| Wall | Detail |
|------|--------|
| **Scope** | Write only under `.admin/docs/plan-suites/lyrikai-themes/` during BPS; product code in later GO units |
| **MIT hex** | All palette values original; no GPL/Bearded verbatim |
| **Cousin-diff** | New themes must pass gate vs `nearestCousin` ([theme-card-protocol](./guides/theme-card-protocol.md)) |
| **SoR** | `docs/wiki/CATALOG.md` becomes primary catalog (Unit 4); BPS uses [theme-catalog.md](./specs/theme-catalog.md) as roster/pointer until wiki exists |
| **RULEBOOK** | `agents/.gears/RULEBOOK.md` rule 4 amended in Unit 4 to allow `docs/wiki/` |
| **Chrome** | Cursor agent / chat chrome **out of scope** |
| **No meta wiki** | No tip / lyrikai-meta writes |
| **No Hive** | No `.hive/` Paper row for this suite |
| **Paper ≠ GO** | Suite planning until user says GO on a specific plan |

## Success definition

Matches [END-GOAL.md](./END-GOAL.md):

- **20 themes** in one extension, v1.0.0 catalog closeout (Wave D).
- **Factory** (`library/`) with ThemeCard, validation, auto-manifest (Unit 5).
- **Product wiki** (`docs/wiki/`) as public-facing SoR (Unit 4).
- **Public GitHub** `lyrikai-os/lk-themes` with correct `repository` URL, release tags, VSIX policy (Plan 08).

## Repo layout

```
library/                          Source of truth (variations + generator)
extensions/lyrikai-themes/        Installable VS Code extension
docs/wiki/                        Product SoR (Unit 4 — live)
.admin/docs/plan-suites/lyrikai-themes/   This plan suite
```

**Public repo target:** https://github.com/lyrikai-os/lk-themes
