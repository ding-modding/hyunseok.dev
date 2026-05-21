"use client";

import { useLanguage } from "./LanguageProvider";

/** Mono, minimal language toggle for the top bar. Shows the active language. */
export function LanguageToggle() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="toggle-btn"
      aria-label={t.ui.langToggleLabel}
    >
      {lang.toUpperCase()}
    </button>
  );
}
