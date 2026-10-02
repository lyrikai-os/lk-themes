# Architecture — Theme Factory Pipeline

Lyrikai Themes are **generated**, not hand-edited JSON. The pipeline runs TypeScript variations through a VS Code theme generator and commits the output for the extension.

## Pipeline overview

```
library/src/variations/*.ts
        ↓
library/src/shared/theme-registry.ts   (manifest of variations)
        ↓
library/src/generators/vscode/         (ui-colors + token-colors)
        ↓
library/src/build.ts
        ↓
extensions/lyrikai-themes/themes/lyrikai-themes-{slug}.json
        ↓
extensions/lyrikai-themes/package.json (contributes.themes)
        ↓
VSIX (vsce package) → releases/
```

## Layers

### 1. Variations (`library/src/variations/`)

Each skin is a **`ThemeVariation`**: slug, label, `uiTheme`, and palette data. See [SCHEMA.md](./SCHEMA.md).

| File pattern | Example | Profile |
|--------------|---------|---------|
| Single file | `cream-bright.ts`, `black-prism.ts` | classic |
| Shared + pair | `role-spectrum-shared.ts` + `role-spectrum-bright.ts` / `role-spectrum-dark.ts` | semantic-rich |

Classic skins use flat **`ThemePalette`** hex. Semantic-rich skins add **`textProfile: "semantic-rich"`** and an HSL **`TextRoleDefinition`** table resolved per mode.

### 2. Registry (`library/src/shared/theme-registry.ts`)

Ordered list driven by **`factory/theme-cards.ts`** ThemeCard metadata. Unit 5 auto-syncs extension manifest on build.

### 2b. Factory (`library/src/factory/`)

| Module | Role |
|--------|------|
| `theme-cards.ts` | Locked ThemeCard metadata (slug, tier, nearestCousin) |
| `theme-factory.ts` | `createClassicTheme`, `createSemanticRichTheme`, `cardToVariation` |
| `shared/color-math.ts` | CIEDE2000 ΔE, hue distance, cousin-diff helpers |
| `validate-themes.ts` | Cousin-diff gate, manifest parity, `semanticHighlighting` check |

Run `npm run validate:themes` after every build or wave mint.

### 3. Generator (`library/src/generators/vscode/`)

| Module | Output |
|--------|--------|
| `ui-colors.ts` | Workbench `colors` map (editor, sidebar, tabs, borders, accent) |
| `token-colors.ts` | `tokenColors` TextMate scopes + optional `semanticTokenColors` |
| `index.ts` | Assembles `VscodeThemeJson` per variation |

Generator reads `ThemePalette` / `TextRolePalette` and maps Lyrikai tokens to VS Code theme keys. **v1 scope:** editor + workbench only — no chat or Cursor agent chrome.

### 4. Build (`npm run build`)

Root script compiles the library and writes one JSON file per registered variation under `extensions/lyrikai-themes/themes/`. **Committed JSON is the install artifact** — CI and F5 load these files directly.

### 5. Extension (`extensions/lyrikai-themes/`)

Standard VS Code theme extension:

- `package.json` → `contributes.themes[]` with `label`, `uiTheme`, `path`
- `themes/*.json` → generated theme documents
- `releases/*.vsix` → packaged builds for local install

## Adding a theme (summary)

1. Lock a [Theme Card](./THEME-CARD-PROTOCOL.md) in [CATALOG.md](./CATALOG.md).
2. Pass cousin-diff vs `nearestCousin` (Unit 5: `npm run validate:themes`).
3. Add variation TS + registry entry.
4. `npm run build` → commit JSON + manifest bump.
5. Update CATALOG status → `shipped`.

## Design walls

- All hex in variations is **original MIT** work — no GPL/Bearded verbatim tables.
- Chat / inline-AI / Cursor agent chrome **out of scope** for v1.
- Agents must not edit user `settings.json`.

## Related

- Types: [SCHEMA.md](./SCHEMA.md)
- Install: [INSTALL.md](./INSTALL.md)
- Catalog: [CATALOG.md](./CATALOG.md)
