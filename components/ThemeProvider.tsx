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
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  normalizeTheme,
  type Theme,
} from "@/lib/theme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Provides the active theme. The pre-paint inline script in the root layout
 * has already set data-theme on <html>; this provider re-reads it on mount and
 * keeps the value in React state from there.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const fromDom = normalizeTheme(
      document.documentElement.getAttribute("data-theme"),
    );
    const fromStorage = normalizeTheme(safeRead(THEME_STORAGE_KEY));
    // Intentional: read the theme the pre-paint InitScript already applied to
    // <html>, synchronizing React with that external DOM state after the
    // server render used the default — not a cascading-render bug.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(fromDom ?? fromStorage ?? DEFAULT_THEME);
  }, []);

  const apply = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    safeWrite(THEME_STORAGE_KEY, next);
  }, []);

  const setTheme = useCallback(
    (next: Theme) => {
      const normalized = normalizeTheme(next) ?? DEFAULT_THEME;
      setThemeState(normalized);
      apply(normalized);
    },
    [apply],
  );

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      apply(next);
      return next;
    });
  }, [apply]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/** Access the active theme. Must be used within ThemeProvider. */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
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
    /* ignore */
  }
}
