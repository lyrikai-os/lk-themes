# Install — Lyrikai Themes

Install **Lyrikai Themes** in VS Code or Cursor via Extension Development Host (F5) or VSIX from `releases/`.

## Prerequisites

- VS Code **1.80+** or Cursor (VS Code–compatible)
- Node.js and npm (for build-from-source)

## Option A — F5 (development)

Best for contributors and theme QA.

1. Clone the repo (or open the workspace).
2. From repo root: `npm install && npm run build`
3. Open **`extensions/lyrikai-themes`** as the workspace folder (or open the monorepo and set launch config to that extension).
4. Run **Run Extension** from Run and Debug (or press **F5**).
5. In the **Extension Development Host** window:
   - **Cmd+Shift+P** (macOS) / **Ctrl+Shift+P** (Windows/Linux)
   - **Preferences: Color Theme**
   - Select a Lyrikai theme (e.g. **Lyrikai Themes Cream Bright**)

All contributed themes appear in the picker when the extension loads.

## Option B — VSIX from releases/

For local install without F5.

1. Build and package (from repo root):

```bash
npm install
npm run build
cd extensions/lyrikai-themes
npx @vscode/vsce package --out ./releases/lyrikai-themes-0.3.1.vsix
```

2. Install the VSIX:
   - **Cmd+Shift+P** → **Extensions: Install from VSIX…**
   - Choose `extensions/lyrikai-themes/releases/lyrikai-themes-0.3.1.vsix` (or latest in `releases/`)

3. Activate a theme:
   - **Cmd+Shift+P** → **Preferences: Color Theme**
   - Pick any **Lyrikai Themes** entry

## Color Theme picker

| Label | Slug | Mode |
|-------|------|------|
| Lyrikai Themes Cream Bright | `cream-bright` | light |
| Lyrikai Themes Black Prism | `black-prism` | dark |
| Lyrikai Themes Role Spectrum Bright | `role-spectrum-bright` | light |
| Lyrikai Themes Role Spectrum Dark | `role-spectrum-dark` | dark |

Full roster (including planned): [CATALOG.md](./CATALOG.md).

## Marketplace / GitHub releases

When [Plan 08](https://github.com/lyrikai-os/lk-themes) publish completes, VSIX artifacts will ship from GitHub Releases on `lyrikai-os/lk-themes`. Until then, build locally or use committed VSIX under `extensions/lyrikai-themes/releases/`.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Theme not in picker after F5 | Confirm `npm run build` ran; check `extensions/lyrikai-themes/package.json` `contributes.themes` |
| Stale colors | Rebuild JSON: `npm run build` from repo root |
| VSIX install blocked | Use `--no-dependencies` packaging in workspace; see root `README.md` |

## Related

- Pipeline overview: [ARCHITECTURE.md](./ARCHITECTURE.md)
- Version history: [CHANGELOG.md](./CHANGELOG.md)
