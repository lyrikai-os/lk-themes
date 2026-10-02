# Theme Card Protocol

How Lyrikai Themes go from concept → locked card → minted variation. Required for all waves (A–D) and factory validation (Unit 5).

Canonical public copy of the BPS guide at `.admin/docs/plan-suites/lyrikai-themes/guides/theme-card-protocol.md`.

## Flow

```
Brief → Theme Card (lock) → Cousin-diff gate → Mint variation → Build → Verify
```

### 1. Brief

- One paragraph mood + ground/ink/accent intent.
- Research concept tag from [CATALOG.md](./CATALOG.md) (e.g. `vaporwave`, `tron`).
- Assign `nearestCousin` from the catalog table **before** palette work.

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

Store locked cards in [CATALOG.md](./CATALOG.md) (primary SoR).

### 3. Cousin-diff gate

Before minting, the candidate palette must pass **cousin-diff** vs `nearestCousin`:

- Compare ground, accent, and syntax anchor hues (not every token).
- Minimum thresholds enforced by `npm run validate:themes` (Unit 5):
  - **ΔE (CIEDE2000)** ≥ **8** on editor ground and primary accent vs cousin.
  - **Hue separation** ≥ **15°** on accent vs cousin accent (when both chromatic).
  - **No verbatim hex copy** from cousin or known GPL sources.
- Fail → revise card; do not register variation.

**Anchors:** `cream-bright`, `black-prism`, `role-spectrum-bright`, `role-spectrum-dark` (see [CATALOG.md](./CATALOG.md)).

### 4. Mint

- Add `library/src/variations/{slug}.ts` (or shared + pair files for dual-mode skins).
- Register in `theme-registry.ts`.
- `npm run build` → `extensions/lyrikai-themes/themes/lyrikai-themes-{slug}.json`.
- Update extension `package.json` contributes (auto after Unit 5).

### 5. Verify

- F5 → Color Theme picker shows new label.
- `validate:themes` passes cousin-diff + manifest parity.
- Card entry in [CATALOG.md](./CATALOG.md) status → `shipped`.

## Readability tiers

| Tier | Profile typical | Reader expectation |
|------|-----------------|-------------------|
| **A** | classic | Daily driver; calm chrome; high legibility |
| **B** | semantic-rich | Role-distinct syntax; moderate chrome personality |
| **C** | genre | Bold mood; acceptable tradeoffs for atmosphere; still WCAG-aware body/comment contrast |

Tier C skins must still meet minimum contrast for `inkPrimary` on editor ground and comments subdued vs syntax.

## `nearestCousin` assignment rules

1. Pick the **mode-matched anchor** when possible: light skins → `cream-bright` or `role-spectrum-bright`; dark → `black-prism` or `role-spectrum-dark`.
2. Genre skins in the same wave chain compare to the **previous wave cousin** (e.g. `vegas-neon` → `circus-night`), not always to anchors.
3. Semantic-rich candidates compare to the mode-matched Role Spectrum anchor, not to classic anchors, unless the card is classic profile.
4. Document the chosen cousin in the catalog table before locking ground/accent hex.

## Anti-patterns (all tiers)

- Copying Bearded GPL JSON/hex verbatim
- Purple-indigo glow as default chrome (unless card explicitly calls for genre exception with diff pass)
- Duplicate mode-specific hue tables (use HSL `lLight`/`lDark` pattern from Role Spectrum — see [SCHEMA.md](./SCHEMA.md))
- Chat / Cursor agent chrome tokens

## Related

- Roster & cards: [CATALOG.md](./CATALOG.md)
- Type schema: [SCHEMA.md](./SCHEMA.md)
- Research constraints: [RESEARCH.md](./RESEARCH.md)
