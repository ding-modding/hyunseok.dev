"use client";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

/** Mono, minimal theme toggle for the top bar. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="toggle-btn"
      aria-label={t.ui.themeToggleLabel}
      aria-pressed={isDark}
    >
      <span aria-hidden="true">{isDark ? "◐" : "◑"}</span>{" "}
      {isDark ? "light" : "dark"}
    </button>
  );
}
