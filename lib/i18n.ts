// Lightweight i18n core. No library — per PLAN.md D2.
// The only real logic in the project: language resolution.

export type Language = "ko" | "en";

/** Supported languages. */
export const LANGUAGES: readonly Language[] = ["ko", "en"] as const;

/** Fallback when nothing else resolves. */
export const DEFAULT_LANGUAGE: Language = "ko";

/** localStorage key for the persisted language preference. */
export const LANG_STORAGE_KEY = "hyunseok-dev-lang";

/** Narrow an arbitrary value to a supported Language, or null if invalid. */
export function normalizeLanguage(value: unknown): Language | null {
  if (typeof value !== "string") return null;
  const v = value.trim().toLowerCase();
  return (LANGUAGES as readonly string[]).includes(v) ? (v as Language) : null;
}

/** Map a navigator.language string (e.g. "en-US", "ko-KR") to a Language. */
function fromNavigator(value: unknown): Language | null {
  if (typeof value !== "string") return null;
  // Take the primary subtag: "en-US" -> "en".
  const primary = value.trim().toLowerCase().split("-")[0];
  return normalizeLanguage(primary);
}

/**
 * Inputs to language resolution. Each is optional so the function is pure and
 * unit-testable without touching real browser globals.
 */
export interface ResolveLanguageInput {
  /** Value of the `?lang=` query parameter, if present. */
  query?: string | null;
  /** Value read from localStorage, if present. */
  stored?: string | null;
  /** navigator.language (or navigator.languages[0]), if present. */
  navigator?: string | null;
}

/**
 * Resolve the active language.
 *
 * Precedence (PLAN.md): `?lang=` query (en/ko) > localStorage >
 * navigator.language > default `ko`. Invalid values at any tier are ignored
 * and resolution falls through to the next tier.
 */
export function resolveLanguage(input: ResolveLanguageInput = {}): Language {
  const fromQuery = normalizeLanguage(input.query);
  if (fromQuery) return fromQuery;

  const fromStored = normalizeLanguage(input.stored);
  if (fromStored) return fromStored;

  const fromNav = fromNavigator(input.navigator);
  if (fromNav) return fromNav;

  return DEFAULT_LANGUAGE;
}
