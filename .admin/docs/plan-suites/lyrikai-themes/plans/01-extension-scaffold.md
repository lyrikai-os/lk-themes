# Plan 01 — Extension Scaffold

**Status:** complete  
**Skin:** Lyrikai Themes Cream Bright (`cream-bright`)

## Deliverables

| Item | Path |
|------|------|
| Palette variation | `library/src/variations/cream-bright.ts` |
| Generator | `library/src/generators/vscode/` |
| Build script | `library/src/build.ts` → `extensions/lyrikai-themes/themes/` |
| Extension manifest | `extensions/lyrikai-themes/package.json` |
| Icon | `extensions/lyrikai-themes/assets/icon.png` |
| VSIX | `extensions/lyrikai-themes/releases/lyrikai-themes-0.1.0.vsix` |

## Build commands

```bash
npm install
npm run build
npm run package -w lyrikai-themes   # uses --no-dependencies for workspace safety
```

## Activation

1. Open `extensions/lyrikai-themes` → **F5** (Run Extension)
2. Or install VSIX → **Preferences: Color Theme** → **Lyrikai Themes Cream Bright**
