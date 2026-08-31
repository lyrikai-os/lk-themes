import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllVariations } from "./shared/theme-registry.js";
import { generateVscodeTheme, themeOutputFilename } from "./generators/vscode/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../..");
const themesOutDir = join(repoRoot, "extensions/lyrikai-themes/themes");

function main(): void {
  mkdirSync(themesOutDir, { recursive: true });

  const variations = getAllVariations();
  if (variations.length === 0) {
    console.error("No theme variations registered.");
    process.exit(1);
  }

  for (const variation of variations) {
    const theme = generateVscodeTheme(variation);
    const filename = themeOutputFilename(variation.slug);
    const outPath = join(themesOutDir, filename);
    writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n", "utf8");
    console.log(`Generated ${outPath}`);
  }

  console.log(`Done — ${variations.length} theme(s) written.`);
}

main();
