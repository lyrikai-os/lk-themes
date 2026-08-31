# Theme Card Protocol

How Lyrikai Themes go from concept → locked card → minted variation. Required for all waves (A–D) and factory validation (Unit 5).

## Flow

```
Brief → Theme Card (lock) → Cousin-diff gate → Mint variation → Build → Verify
```

### 1. Brief

- One paragraph mood + ground/ink/accent intent.
- Research concept tag from [theme-catalog.md](../specs/theme-catalog.md) (e.g. `vaporwave`, `tron`).
- Assign `nearestCousin` from catalog table before palette work.

### 2. Lock card

A locked **Theme Card** includes:

| Field | Required | Notes |
|-------|----------|-------|
| `slug` | yes | kebab-case; matches filename stem |
| `label` | yes | `Lyrikai Themes {Name}` |
| `uiTheme` | yes | `vs` or `vs-dark` |
| `profile` | yes | `classic` · `semantic-rich` · `genre` |
| `tier` | yes | A · B · C |
| `nearestCousin` | yes | slug for diff gate |
| Ground | yes | editor + chrome hex (MIT original) |
| Ink | yes | body + comment treatment |
| Accent | yes | primary UI accent |
| Syntax | yes | role → hex table or HSL role ref |
| Avoid list | yes | skin-specific anti-patterns |

Store locked cards:

- **BPS / pre-wiki:** section in wave plan or `specs/art-direction.md` appendix.
- **Post Unit 4:** one card per theme in `docs/wiki/CATALOG.md` (primary SoR).

### 3. Cousin-diff gate

Before minting, the candidate palette must pass **cousin-diff** vs `nearestCousin`:

- Compare ground, accent, and syntax anchor hues (not every token).
- Minimum thresholds enforced by `npm run validate:themes` (Unit 5):
  - **ΔE (CIEDE2000)** ≥ 8 on editor ground and primary accent vs cousin.
  - **Hue separation** ≥ 15° on accent vs cousin accent (when both chromatic).
  - **No verbatim hex copy** from cousin or known GPL sources.
- Fail → revise card; do not register variation.

Anchors: `cream-bright`, `black-prism`, `role-spectrum-bright`, `role-spectrum-dark` (see catalog).

### 4. Mint

- Add `library/src/variations/{slug}.ts` (or shared + pair files for dual-mode skins).
- Register in `theme-registry.ts` (manual until Unit 5 auto-manifest).
- `npm run build` → `extensions/lyrikai-themes/themes/lyrikai-themes-{slug}.json`.
- Update extension `package.json` contributes (auto after Unit 5).

### 5. Verify

- F5 → Color Theme picker shows new label.
- `validate:themes` passes cousin-diff + manifest parity.
- Card entry in wiki CATALOG status → `shipped`.

## Readability tiers

| Tier | Profile typical | Reader expectation |
|------|-----------------|-------------------|
| **A** | classic | Daily driver; calm chrome; high legibility |
| **B** | semantic-rich | Role-distinct syntax; moderate chrome personality |
| **C** | genre | Bold mood; acceptable tradeoffs for atmosphere; still WCAG-aware body/comment contrast |

Tier C skins must still meet minimum contrast for `inkPrimary` on editor ground and comments subdued vs syntax.

## Anti-patterns (all tiers)

- Copying Bearded GPL JSON/hex verbatim
- Purple-indigo glow as default chrome (unless card explicitly calls for genre exception with diff pass)
- Duplicate mode-specific hue tables (use HSL `lLight`/`lDark` pattern from Role Spectrum)
- Chat / Cursor agent chrome tokens

## Related

- Roster: [specs/theme-catalog.md](../specs/theme-catalog.md)
- Factory gates: [plans/03-factory-scale.md](../plans/03-factory-scale.md)
- Wiki SoR: [plans/02-product-wiki.md](../plans/02-product-wiki.md)
