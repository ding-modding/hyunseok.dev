// Theme helpers. Light is the default (DESIGN.md); dark via toggle.

export type Theme = "light" | "dark";

export const THEMES: readonly Theme[] = ["light", "dark"] as const;

/** Default theme — light, per DESIGN.md. */
export const DEFAULT_THEME: Theme = "light";

/** localStorage key for the persisted theme preference. */
export const THEME_STORAGE_KEY = "hyunseok-dev-theme";

/** Narrow an arbitrary value to a Theme, or null if invalid. */
export function normalizeTheme(value: unknown): Theme | null {
  if (typeof value !== "string") return null;
  const v = value.trim().toLowerCase();
  return (THEMES as readonly string[]).includes(v) ? (v as Theme) : null;
}
