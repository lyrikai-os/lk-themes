# Lyrikai Themes

Warm cream editor themes for **VS Code** and **Cursor**, built from an original MIT TypeScript palette pipeline.

- **Extension id:** `lyrikai.lyrikai-themes`
- **Skin 01:** Lyrikai Themes Cream Bright

## Architecture

```
library/                          Source of truth (variations + generator)
  src/variations/cream-bright.ts  Original MIT hex palette
  src/generators/vscode/          UI colors + tokenColors → JSON
extensions/lyrikai-themes/        Installable VS Code extension
  themes/*.json                   Generated theme files (committed)
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
npx @vscode/vsce package --out ./releases/lyrikai-themes-0.1.0.vsix
```

Then in VS Code / Cursor:

1. **Cmd+Shift+P** → **Extensions: Install from VSIX…**
2. Choose `extensions/lyrikai-themes/releases/lyrikai-themes-0.1.0.vsix`
3. **Cmd+Shift+P** → **Preferences: Color Theme** → **Lyrikai Themes Cream Bright**

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

## Planning docs

- [END-GOAL](.admin/docs/plan-suites/lyrikai-themes/END-GOAL.md)
- [Art direction — Skin 01](.admin/docs/plan-suites/lyrikai-themes/specs/art-direction.md)
