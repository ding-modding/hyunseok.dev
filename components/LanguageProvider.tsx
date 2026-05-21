"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANGUAGE,
  LANG_STORAGE_KEY,
  normalizeLanguage,
  resolveLanguage,
  type Language,
} from "@/lib/i18n";
import { content, type CVContent } from "@/content";

interface LanguageContextValue {
  /** Active language. */
  lang: Language;
  /** Content set for the active language. */
  t: CVContent;
  /** Set the language explicitly and persist it. */
  setLang: (lang: Language) => void;
  /** Toggle between ko and en. */
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Provides the active language and its content to the tree.
 *
 * The pre-paint inline script in the root layout has already set
 * document.documentElement.lang. This provider re-resolves on mount (to read
 * localStorage / navigator on the client) so server and client agree, then
 * keeps state in React from there.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server render and first client render must match: start from the default,
  // then re-resolve in an effect to avoid hydration mismatch.
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resolved = resolveLanguage({
      query: params.get("lang"),
      stored: safeRead(LANG_STORAGE_KEY),
      navigator:
        typeof navigator !== "undefined"
          ? navigator.languages?.[0] ?? navigator.language
          : null,
    });
    // Intentional: re-resolve from client-only sources (URL, localStorage,
    // navigator) after the server render used the default. This synchronizes
    // React with the pre-paint InitScript — not a cascading-render bug.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(resolved);
    document.documentElement.lang = resolved;
  }, []);

  const setLang = useCallback((next: Language) => {
    const normalized = normalizeLanguage(next) ?? DEFAULT_LANGUAGE;
    setLangState(normalized);
    document.documentElement.lang = normalized;
    safeWrite(LANG_STORAGE_KEY, normalized);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Language = prev === "ko" ? "en" : "ko";
      document.documentElement.lang = next;
      safeWrite(LANG_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: content[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Access the active language and content. Must be used within LanguageProvider. */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

function safeRead(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* localStorage unavailable (private mode, etc.) — ignore. */
  }
}
