# Lyrikai Themes

Warm cream, pure-black, and Role Spectrum editor themes for **VS Code** and **Cursor**, built from an original MIT TypeScript palette pipeline.

- **Extension id:** `lyrikai.lyrikai-themes`
- **Skin 01:** Lyrikai Themes Cream Bright (light, classic)
- **Skin 02:** Lyrikai Themes Black Prism (dark, classic)
- **Skin 03:** Lyrikai Themes Role Spectrum Bright + Dark (HSL spectral roles, cool mist / indigo-black grounds)

## Architecture

```
library/                                    Source of truth (variations + generator)
  src/variations/cream-bright.ts            Skin 01 — warm cream palette
  src/variations/black-prism.ts             Skin 02 — pure black palette
  src/variations/role-spectrum-shared.ts    Skin 03 — HSL role table + spectral grounds
  src/variations/role-spectrum-bright.ts    Skin 03a — bright ground
  src/variations/role-spectrum-dark.ts      Skin 03b — dark ground
  src/generators/vscode/                    UI colors + tokenColors → JSON
extensions/lyrikai-themes/                  Installable VS Code extension
  themes/*.json                             Generated theme files (committed)
```

## Quick start — development (F5)

1. Open `extensions/lyrikai-themes` in VS Code / Cursor.
2. Run **Run Extension** from the Run and Debug panel (or press **F5**).
3. In the Extension Development Host window:
   - **Cmd+Shift+P** → **Preferences: Color Theme**
   - Select **Lyrikai Themes Cream Bright**

## Quick start — VSIX install

```bash
npm install
npm run build
cd extensions/lyrikai-themes
npx @vscode/vsce package --out ./releases/lyrikai-themes-0.3.0.vsix
```

Then in VS Code / Cursor:

1. **Cmd+Shift+P** → **Extensions: Install from VSIX…**
2. Choose `extensions/lyrikai-themes/releases/lyrikai-themes-0.3.0.vsix`
3. **Cmd+Shift+P** → **Preferences: Color Theme** → pick any Lyrikai theme (Cream Bright, Black Prism, Role Spectrum Bright, Role Spectrum Dark)

## Build

From repo root:

```bash
npm install
npm run build          # regenerate theme JSON from library/
npm run build:ext      # build + package VSIX
```

## Adding a skin

1. Add a variation in `library/src/variations/`.
2. Register it in `library/src/shared/theme-registry.ts`.
3. Add a `contributes.themes` entry in `extensions/lyrikai-themes/package.json`.
4. Run `npm run build`.

## License

MIT — see [LICENSE](./LICENSE). All palette hex values are original Lyrikai work. Inspired by warm light “coffee cream” themes in feeling only; no GPL source or color tables copied.

## Product wiki

- [docs/wiki/](docs/wiki/) — catalog, install, architecture, changelog (primary SoR)

## Planning docs

- [END-GOAL](.admin/docs/plan-suites/lyrikai-themes/END-GOAL.md)
- [Art direction — Skins 01–03](.admin/docs/plan-suites/lyrikai-themes/specs/art-direction.md)
