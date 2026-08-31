import type { TextRolePalette, ThemePalette } from "../../shared/types.js";

/** Map palette tokens to VS Code workbench + editor UI color keys. */
export function buildUiColors(p: ThemePalette): Record<string, string> {
  return {
    "contrastActiveBorder": "#00000000",
    "contrastBorder": "#00000000",

    "foreground": p.inkPrimary,
    "descriptionForeground": `${p.inkSecondary}cc`,
    "disabledForeground": `${p.inkSecondary}4d`,
    "errorForeground": p.error,
    "focusBorder": p.creamBorderSoft,
    "icon.foreground": `${p.inkPrimary}ab`,
    "selection.background": p.accentMedium,

    // Activity bar
    "activityBar.background": p.creamSidebar,
    "activityBar.foreground": p.accent,
    "activityBar.inactiveForeground": p.inkMuted,
    "activityBar.border": p.creamBorder,
    "activityBar.activeBorder": p.accent,
    "activityBar.activeBackground": p.accentSoft,
    "activityBarBadge.background": p.accent,
    "activityBarBadge.foreground": p.creamPaper,

    // Badges
    "badge.background": p.accent,
    "badge.foreground": p.creamPaper,

    // Breadcrumb
    "breadcrumb.background": p.creamPaper,
    "breadcrumb.foreground": p.inkSecondary,
    "breadcrumbPicker.background": p.creamElevated,

    // Buttons
    "button.background": `${p.accent}80`,
    "button.foreground": p.inkPrimary,
    "button.hoverBackground": `${p.accent}99`,
    "button.secondaryBackground": p.creamTabInactive,
    "button.secondaryForeground": p.inkSecondary,
    "button.secondaryHoverBackground": p.creamBorder,

    // Editor
    "editor.background": p.creamPaper,
    "editor.foreground": p.inkPrimary,
    "editor.lineHighlightBackground": `${p.accent}0f`,
    "editor.lineHighlightBorder": p.accentSoft,
    "editor.selectionBackground": p.accentMedium,
    "editor.selectionForeground": p.inkPrimary,
    "editor.selectionHighlightBackground": `${p.accent}14`,
    "editor.selectionHighlightBorder": p.accentMedium,
    "editor.inactiveSelectionBackground": p.accentMedium,
    "editor.wordHighlightBackground": `${p.accent}1f`,
    "editor.wordHighlightBorder": `${p.accent}3d`,
    "editor.wordHighlightStrongBackground": `${p.accent}3d`,
    "editor.findMatchBackground": `${p.accent}30`,
    "editor.findMatchBorder": p.accentMedium,
    "editor.findMatchHighlightBackground": `${p.accent}3d`,
    "editor.findMatchHighlightBorder": `${p.accent}5c`,
    "editor.hoverHighlightBackground": p.accentMedium,
    "editor.rangeHighlightBackground": `${p.accent}3d`,
    "editorCursor.foreground": p.syntaxKeyword,
    "editorCursor.background": p.accent,
    "editorLineNumber.foreground": p.inkMuted,
    "editorLineNumber.activeForeground": p.inkSecondary,
    "editorIndentGuide.background1": `${p.inkMuted}33`,
    "editorIndentGuide.activeBackground1": `${p.inkMuted}cc`,
    "editorWhitespace.foreground": `${p.inkMuted}60`,
    "editorBracketMatch.background": p.accentMedium,
    "editorBracketMatch.border": `${p.accent}73`,
    "editorBracketHighlight.foreground1": p.syntaxKeyword,
    "editorBracketHighlight.foreground2": p.syntaxDecorator,
    "editorBracketHighlight.foreground3": p.syntaxFunction,
    "editorBracketHighlight.foreground4": p.syntaxType,
    "editorBracketHighlight.foreground5": p.syntaxString,
    "editorBracketHighlight.foreground6": p.syntaxProperty,
    "editorBracketHighlight.unexpectedBracket.foreground": p.error,
    "editorError.foreground": p.error,
    "editorWarning.foreground": p.warning,
    "editorGutter.background": p.creamPaper,
    "editorGutter.addedBackground": `${p.success}cc`,
    "editorGutter.modifiedBackground": `${p.info}cc`,
    "editorGutter.deletedBackground": `${p.error}cc`,
    "editorWidget.background": p.creamElevated,
    "editorWidget.border": p.creamBorder,
    "editorSuggestWidget.background": p.creamElevated,
    "editorSuggestWidget.border": p.creamBorder,
    "editorSuggestWidget.foreground": p.inkPrimary,
    "editorSuggestWidget.highlightForeground": p.syntaxKeyword,
    "editorSuggestWidget.selectedBackground": p.creamTabInactive,

    // Editor groups / tabs
    "editorGroup.border": p.creamBorder,
    "editorGroup.dropBackground": `${p.accent}14`,
    "editorGroupHeader.tabsBackground": p.creamSidebar,
    "editorGroupHeader.tabsBorder": p.creamBorder,
    "editorGroupHeader.noTabsBackground": p.creamPaper,
    "tab.activeBackground": p.creamPaper,
    "tab.activeForeground": p.inkPrimary,
    "tab.activeBorder": p.creamPaper,
    "tab.activeBorderTop": p.accent,
    "tab.inactiveBackground": p.creamTabInactive,
    "tab.inactiveForeground": p.inkMuted,
    "tab.border": p.creamBorder,
    "tab.hoverBackground": p.creamPaper,
    "tab.unfocusedActiveForeground": p.accent,
    "tab.unfocusedInactiveForeground": p.inkMuted,

    // Side bar
    "sideBar.background": p.creamSidebar,
    "sideBar.foreground": `${p.inkPrimary}cc`,
    "sideBar.border": p.creamBorder,
    "sideBarTitle.foreground": p.inkMuted,
    "sideBarSectionHeader.background": p.creamSidebar,
    "sideBarSectionHeader.foreground": p.inkSecondary,
    "sideBarSectionHeader.border": p.creamBorder,

    // Panel
    "panel.background": p.creamPanel,
    "panel.border": p.creamBorder,
    "panelTitle.activeBorder": p.accent,
    "panelTitle.activeForeground": p.accent,
    "panelTitle.inactiveForeground": p.inkMuted,
    "panelSectionHeader.background": p.creamTabInactive,
    "panelSectionHeader.foreground": p.inkSecondary,
    "panelSectionHeader.border": p.creamBorder,

    // Status bar
    "statusBar.background": p.creamPaper,
    "statusBar.foreground": `${p.inkPrimary}80`,
    "statusBar.border": p.creamBorder,
    "statusBar.noFolderBackground": p.creamSidebar,
    "statusBar.noFolderForeground": `${p.inkPrimary}cc`,
    "statusBarItem.hoverBackground": `${p.accent}33`,
    "statusBarItem.activeBackground": p.creamElevated,
    "statusBarItem.remoteBackground": p.syntaxString,
    "statusBarItem.remoteForeground": p.creamPaper,
    "statusBarItem.errorBackground": p.error,
    "statusBarItem.errorForeground": p.creamPaper,
    "statusBarItem.warningBackground": p.warning,
    "statusBarItem.warningForeground": p.creamPaper,

    // Title bar
    "titleBar.activeBackground": p.creamTitleBar,
    "titleBar.activeForeground": `${p.inkSecondary}99`,
    "titleBar.inactiveBackground": p.creamTitleBar,
    "titleBar.inactiveForeground": `${p.inkSecondary}99`,
    "titleBar.border": p.creamBorder,

    // Lists
    "list.activeSelectionBackground": `${p.inkMuted}33`,
    "list.activeSelectionForeground": p.inkPrimary,
    "list.inactiveSelectionBackground": `${p.inkMuted}1f`,
    "list.inactiveSelectionForeground": p.inkSecondary,
    "list.hoverBackground": `${p.inkMuted}1a`,
    "list.hoverForeground": p.inkPrimary,
    "list.focusBackground": `${p.accent}40`,
    "list.focusForeground": p.inkPrimary,
    "list.highlightForeground": p.syntaxKeyword,
    "list.errorForeground": p.error,
    "list.warningForeground": p.warning,
    "list.dropBackground": `${p.accent}15`,

    // Input / dropdown
    "input.background": p.creamElevated,
    "input.foreground": p.inkSecondary,
    "input.border": p.creamBorderSoft,
    "input.placeholderForeground": p.inkMuted,
    "dropdown.background": p.creamElevated,
    "dropdown.foreground": p.inkSecondary,
    "dropdown.border": p.creamBorderSoft,

    // Quick input
    "quickInput.background": p.creamElevated,
    "quickInput.foreground": p.inkPrimary,
    "quickInputList.focusBackground": `${p.inkMuted}33`,
    "quickInputList.focusForeground": p.inkPrimary,
    "quickInputTitle.background": p.creamSidebar,

    // Menu
    "menu.background": p.creamElevated,
    "menu.foreground": p.inkPrimary,
    "menu.border": p.creamBorder,
    "menu.selectionBackground": `${p.accent}33`,
    "menu.selectionForeground": p.inkPrimary,
    "menubar.selectionBackground": p.creamElevated,
    "menubar.selectionForeground": p.inkPrimary,

    // Scrollbar
    "scrollbar.shadow": "#00000033",
    "scrollbarSlider.background": `${p.inkPrimary}26`,
    "scrollbarSlider.hoverBackground": `${p.inkPrimary}33`,
    "scrollbarSlider.activeBackground": `${p.inkPrimary}4d`,

    // Terminal (basic — editor scope)
    "terminal.background": p.creamPanel,
    "terminal.foreground": p.inkSecondary,
    "terminal.ansiBlack": p.creamPaper,
    "terminal.ansiRed": p.error,
    "terminal.ansiGreen": p.success,
    "terminal.ansiYellow": p.syntaxKeyword,
    "terminal.ansiBlue": p.info,
    "terminal.ansiMagenta": p.syntaxDecorator,
    "terminal.ansiCyan": p.syntaxFunction,
    "terminal.ansiWhite": p.inkSecondary,
    "terminal.ansiBrightBlack": p.inkMuted,
    "terminal.ansiBrightRed": p.error,
    "terminal.ansiBrightGreen": p.success,
    "terminal.ansiBrightYellow": p.syntaxKeyword,
    "terminal.ansiBrightBlue": p.info,
    "terminal.ansiBrightMagenta": p.syntaxDecorator,
    "terminal.ansiBrightCyan": p.syntaxFunction,
    "terminal.ansiBrightWhite": p.inkPrimary,
    "terminalCursor.foreground": p.syntaxKeyword,
    "terminalCursor.background": p.creamPaper,

    // Diff editor
    "diffEditor.insertedLineBackground": `${p.success}1a`,
    "diffEditor.insertedTextBackground": `${p.success}1a`,
    "diffEditor.removedLineBackground": `${p.error}1a`,
    "diffEditor.removedTextBackground": `${p.error}1a`,
    "diffEditor.border": p.creamBorder,

    // Git decorations
    "gitDecoration.modifiedResourceForeground": p.info,
    "gitDecoration.deletedResourceForeground": p.error,
    "gitDecoration.untrackedResourceForeground": p.success,
    "gitDecoration.ignoredResourceForeground": p.inkMuted,
    "gitDecoration.conflictingResourceForeground": p.accent,

    // Links
    "textLink.foreground": p.accent,
    "textLink.activeForeground": p.accent,
    "textPreformat.background": `${p.syntaxKeyword}33`,
    "textPreformat.foreground": p.inkPrimary,

    // Minimap
    "minimap.background": p.creamPaper,
    "minimap.errorHighlight": p.error,
    "minimap.warningHighlight": p.warning,
    "minimap.findMatchHighlight": p.accent,
    "minimap.selectionHighlight": p.accent,

    // Peek view
    "peekView.border": p.creamBorder,
    "peekViewEditor.background": p.creamElevated,
    "peekViewResult.background": p.creamTabInactive,
    "peekViewTitle.background": p.creamElevated,
    "peekViewTitleLabel.foreground": p.inkSecondary,

    // Notifications
    "notifications.background": p.creamElevated,
    "notifications.foreground": p.inkPrimary,
    "notifications.border": p.creamBorder,
    "notificationLink.foreground": p.syntaxKeyword,
    "notificationsErrorIcon.foreground": p.error,
    "notificationsWarningIcon.foreground": p.warning,
    "notificationsInfoIcon.foreground": p.info,

    // Settings
    "settings.headerForeground": p.inkSecondary,
    "settings.modifiedItemIndicator": p.accent,

    // Charts
    "charts.foreground": p.inkSecondary,
    "charts.red": p.error,
    "charts.orange": p.syntaxProperty,
    "charts.yellow": p.syntaxKeyword,
    "charts.green": p.success,
    "charts.blue": p.syntaxFunction,
    "charts.purple": p.syntaxType,

    // Widget
    "widget.shadow": "#0000000d",
    "sash.hoverBorder": `${p.accent}50`,
    "progressBar.background": p.syntaxKeyword,
    "profileBadge.background": p.accent,
    "profileBadge.foreground": p.creamPaper,
  };
}

/** Bracket rainbow, diff, and line-highlight overrides for semantic-rich skins. */
export function buildHighlightColors(
  text: TextRolePalette,
  base: ThemePalette,
): Record<string, string> {
  return {
    "editor.lineHighlightBackground": `${base.accent}0f`,
    "editor.lineHighlightBorder": base.accentSoft,
    "editor.selectionHighlightBackground": `${base.accent}14`,
    "editor.wordHighlightBackground": `${base.accent}1f`,
    "editor.wordHighlightStrongBackground": `${base.accent}3d`,
    "editorBracketHighlight.foreground1": text.bracket1,
    "editorBracketHighlight.foreground2": text.bracket2,
    "editorBracketHighlight.foreground3": text.bracket3,
    "editorBracketHighlight.foreground4": text.bracket4,
    "editorBracketHighlight.foreground5": text.bracket5,
    "editorBracketHighlight.foreground6": text.bracket6,
    "editorBracketHighlight.unexpectedBracket.foreground": text.error,
    "diffEditor.insertedLineBackground": `${text.string}1a`,
    "diffEditor.insertedTextBackground": `${text.string}1a`,
    "diffEditor.removedLineBackground": `${text.error}1a`,
    "diffEditor.removedTextBackground": `${text.error}1a`,
  };
}
