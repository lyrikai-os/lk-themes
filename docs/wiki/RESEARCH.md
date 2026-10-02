# Research — Lyrikai Themes

Constraints and research notes that inform v1 scope, tier design, and factory gates. Summary for Trinity / build agents — not a tip wiki.

## VS Code semantic highlighting

Lyrikai Themes v1 targets **both** TextMate `tokenColors` and **semantic tokens** where the profile supports it.

| Mechanism | Role |
|-----------|------|
| `tokenColors` | Scope-based rules (`.tsx`, legacy grammars) — always emitted |
| `semanticHighlighting: true` | Enables language server semantic overlays |
| `semanticTokenColors` | Maps semantic kinds (`function`, `type`, `parameter`, …) to palette roles |

**Role Spectrum (Skin 03)** is the reference **semantic-rich** implementation: one HSL role table, mode-specific lightness, `semanticTokenColors` aligned with `TextRolePalette`. Classic skins (Cream Bright, Black Prism) rely primarily on `ThemePalette` syntax hex mapped to scopes.

Implications for waves:

- Tier **A/B** skins should keep semantic maps maintainable (shared generator paths).
- Tier **C** genre skins may emphasize TextMate mood but should still set body/comment contrast safely.

See [SCHEMA.md](./SCHEMA.md) and [ARCHITECTURE.md](./ARCHITECTURE.md).

## Cursor agent chrome limits

**Out of scope for v1** — enforced in RULEBOOK and END-GOAL.

| Area | v1 stance |
|------|-----------|
| Chat panel / inline AI UI | Do not theme; tokens undocumented/unstable across Cursor versions |
| Agent sidebar chrome | Same — editor + standard workbench only |
| Composer-specific surfaces | Excluded |

Rationale (Trinity research summary):

1. **Stability** — Cursor-specific color keys change between releases; shipping them creates breakage and support debt.
2. **Scope** — Product promise is **editor readability** and workbench coherence, not full IDE chrome parity.
3. **Maintenance** — 20-theme program targets VS Code theme schema + portable workbench tokens.
4. **RULEBOOK wall #2** — “editor + workbench tokens only; chat chrome out of scope.”

If Cursor exposes stable, documented theme keys in future, revisit in a **post–1.0.0** scope — not Wave A–D.

## Readability tiers (experimental notes)

| Tier | Profile | Research intent |
|------|---------|-----------------|
| **A** | classic | Daily driver; minimal chrome personality; WCAG-friendly body/comment |
| **B** | semantic-rich | Distinct hue per semantic role; moderate chrome (Role Spectrum model) |
| **C** | genre | Mood-forward (cosmic, vaporwave, phosphor, etc.); cousin-diff still required |

Tier C is **experimental atmosphere**, not permission to clone GPL palettes or skip contrast on `inkPrimary` vs editor ground. Comments stay subdued vs syntax on all tiers.

Genre research concepts live in [CATALOG.md](./CATALOG.md) “Research concept” column — **feeling only**, never verbatim hex from reference themes.

## Cousin-diff research

Perceptual distance gates (Unit 5 implementation):

- **ΔE (CIEDE2000)** ≥ 8 — editor ground + primary accent vs `nearestCousin`
- **Hue separation** ≥ 15° — accent vs cousin accent (when chromatic)
- **No verbatim hex** from cousins or known GPL sources

Anchors: four shipped skins. See [THEME-CARD-PROTOCOL.md](./THEME-CARD-PROTOCOL.md).

## Inspired-by vs copy

- **Allowed:** mood tags (coffee cream, tron grid, sakura night), structure of a theme factory pipeline
- **Forbidden:** Bearded GPL JSON/hex verbatim; purple-indigo glow as lazy default chrome

## Trinity program alignment

Super Build Trinity units map to:

| Trinity unit | Deliverable |
|--------------|-------------|
| Unit 1 (complete) | Factory + 4 shipped skins @ 0.3.1 |
| Unit 4 (complete) | This wiki — product SoR |
| Unit 5 (next) | Factory validation + ThemeCard |
| Waves + Plan 08 | Remaining 16 themes + public publish |

## Related

- Protocol: [THEME-CARD-PROTOCOL.md](./THEME-CARD-PROTOCOL.md)
- Progress: [PROGRESS.md](./PROGRESS.md)
- BPS END-GOAL: [.admin END-GOAL.md](../../.admin/docs/plan-suites/lyrikai-themes/END-GOAL.md)
