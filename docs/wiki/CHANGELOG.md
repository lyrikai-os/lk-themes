# Changelog — Lyrikai Themes

Semver follows `extensions/lyrikai-themes/package.json`. All palette hex is original MIT work.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

- (none — catalog at 1.0.0)

---

## [1.0.0] — 2026-08-30

### Added

- **Catalog closeout** — 16 genre/experimental themes across Waves A–D:
  - Wave A: Cosmic Void, Comic Ink, Glitch Matrix
  - Wave B: Circus Night, Vegas Neon, Rainbow Code, Vapor Dream
  - Wave C: Tron Grid, Arcade Cabinet, Phosphor Green, Sakura Night
  - Wave D: Deep Ocean, Desert Sunset, Newspaper Ink, Gothic Crimson, Honeycomb Amber

### Changed

- **Unit 5 factory** — ThemeCard metadata, CIEDE2000 cousin-diff (`npm run validate:themes`), auto-manifest for `contributes.themes`
- Role Spectrum Dark editor ground tuned for cousin-diff vs Black Prism (`#080818`)
- Extension ships 20 themes; auto-manifest from ThemeCard registry

---

## [0.3.1] — 2026-08-30

### Added

- **Lyrikai Themes Role Spectrum Bright** and **Role Spectrum Dark** — semantic-rich HSL role table, cool mist / indigo-black grounds
- BPS 20-theme program docs (plan suite)

### Changed

- Generator: extended token-colors and semantic token support for Role Spectrum profile
- Extension keywords and description updated for spectral themes

---

## [0.3.0] — 2026-08-30

### Added

- Role Spectrum pair (bright + dark) — initial ship of Skin 03 semantic-rich profile
- Shared `ROLE_SPECTRUM_TEXT_ROLES` HSL table with mode-specific lightness

---

## [0.2.0] — 2026-08-29

### Added

- **Lyrikai Themes Black Prism** — pure black editor, electric cyan accent, high-chroma dark syntax

---

## [0.1.0] — 2026-08-29

### Added

- **Lyrikai Themes Cream Bright** — warm coffee-cream paper, terracotta accent, high-chroma light syntax
- Theme factory scaffold: `library/` variations + generator → `extensions/lyrikai-themes/`
- Initial VSIX under `releases/`

---

## Planned releases (placeholders)

Wave versions align with [CATALOG.md](./CATALOG.md) wave summary. Do not tag until wave plan GO + verification.

### [0.4.0] — Wave A (planned)

- `cosmic-void`, `comic-ink`, `glitch-matrix`

### [0.5.0] — Wave B (planned)

- `circus-night`, `vegas-neon`, `rainbow-code`, `vapor-dream`

### [0.6.0] — Wave C (planned)

- `tron-grid`, `arcade-cabinet`, `phosphor-green`, `sakura-night`

### [1.0.0] — Wave D + catalog closeout (planned)

- `deep-ocean`, `desert-sunset`, `newspaper-ink`, `gothic-crimson`, `honeycomb-amber`
- 20/20 themes shipped; public repo publish; release tag + VSIX policy

---

[Unreleased]: https://github.com/lyrikai-os/lk-themes/compare/v0.3.1...HEAD
[0.3.1]: https://github.com/lyrikai-os/lk-themes/releases/tag/v0.3.1
[0.3.0]: https://github.com/lyrikai-os/lk-themes/releases/tag/v0.3.0
[0.2.0]: https://github.com/lyrikai-os/lk-themes/releases/tag/v0.2.0
[0.1.0]: https://github.com/lyrikai-os/lk-themes/releases/tag/v0.1.0
