# Lyrikai Themes — Product Wiki

Product source of record for **Lyrikai Themes** (`lyrikai.lyrikai-themes`): catalog, install, architecture, and release history.

**Public repo (target):** [github.com/lyrikai-os/lk-themes](https://github.com/lyrikai-os/lk-themes)

## Pages

| Page | Purpose |
|------|---------|
| [CATALOG.md](./CATALOG.md) | **Primary SoR** — 20-theme roster, theme cards, wave assignments |
| [THEME-CARD-PROTOCOL.md](./THEME-CARD-PROTOCOL.md) | Brief → lock → mint; cousin-diff gates; tiers A/B/C |
| [INSTALL.md](./INSTALL.md) | F5 dev host, VSIX from `releases/`, Color Theme picker |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Variations → registry → generator → JSON → VSIX pipeline |
| [CHANGELOG.md](./CHANGELOG.md) | Extension semver history and wave placeholders |
| [SCHEMA.md](./SCHEMA.md) | `ThemePalette`, `TextRolePalette`, `ThemeVariation`, HSL roles |
| [PROGRESS.md](./PROGRESS.md) | Shipped count, commits, PRs, unit status |
| [RESEARCH.md](./RESEARCH.md) | Semantic highlighting, Cursor chrome limits, tier notes |

## Catalog authority

**`CATALOG.md` is the primary source of record** for theme slugs, status, tiers, `nearestCousin` anchors, and locked theme cards. The BPS roster at `.admin/docs/plan-suites/lyrikai-themes/specs/theme-catalog.md` is a planning mirror — sync from wiki after wave ships.

## Shipped today

Four themes at **v0.3.1**: `cream-bright`, `black-prism`, `role-spectrum-bright`, `role-spectrum-dark`. See [CATALOG.md](./CATALOG.md) for cards and [CHANGELOG.md](./CHANGELOG.md) for release notes.

## Planning vs product

| Location | Role |
|----------|------|
| `docs/wiki/` | Product SoR (this wiki) |
| `.admin/docs/plan-suites/lyrikai-themes/` | Build plans, wave execution — **paper until GO** |
