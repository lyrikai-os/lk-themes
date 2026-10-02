import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";
import { PS } from "./production-studio-shared.js";

/** Production Studio gate receipt — cream paper, ink body, blue "signed" labels; spectrum deepened for paper. */
export const receiptPaperPalette = buildClassicPalette({
  ground: { paper: PS.cream, sidebar: PS.cream200, panel: PS.cream200, elevated: PS.cream50, tabInactive: PS.cream300, titleBar: PS.cream300, border: PS.cream300, borderSoft: PS.cream400 },
  ink: { primary: PS.ink, secondary: "#2A3440", muted: PS.inkMuted, faint: `${PS.ink}66` },
  accent: "#2563EB",
  syntax: { function: "#1D4ED8", keyword: "#BE185D", decorator: "#C2410C", property: "#0F766E", string: "#A16207", type: "#0D9488", variable: "#B91C1C", constant: "#EA580C", tag: "#0E7490", comment: `${PS.inkMuted}B3` },
  semantic: { error: "#DC2626", warning: "#CA8A04", info: "#2563EB", success: "#0F766E" },
});

export const receiptPaper: ThemeVariation = { slug: "receipt-paper", label: "Lyrikai Themes Receipt Paper", uiTheme: "vs", palette: receiptPaperPalette };
