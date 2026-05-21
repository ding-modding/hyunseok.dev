import { describe, it, expect } from "vitest";
import {
  resolveLanguage,
  normalizeLanguage,
  DEFAULT_LANGUAGE,
} from "./i18n";

// Per PLAN.md D4: the only real logic in the project is language resolution.
// Precedence: ?lang= query > localStorage > navigator.language > default 'ko'.
describe("resolveLanguage — precedence", () => {
  it("prefers the ?lang= query over everything else", () => {
    expect(
      resolveLanguage({ query: "en", stored: "ko", navigator: "ko-KR" }),
    ).toBe("en");
  });

  it("falls back to localStorage when no query is present", () => {
    expect(
      resolveLanguage({ query: null, stored: "en", navigator: "ko-KR" }),
    ).toBe("en");
  });

  it("falls back to navigator.language when query and storage are absent", () => {
    expect(
      resolveLanguage({ query: null, stored: null, navigator: "en-US" }),
    ).toBe("en");
  });

  it("falls back to the default 'ko' when nothing resolves", () => {
    expect(resolveLanguage({})).toBe("ko");
    expect(DEFAULT_LANGUAGE).toBe("ko");
  });

  it("ignores invalid values and falls through to the next tier", () => {
    // Invalid query -> falls to stored.
    expect(resolveLanguage({ query: "fr", stored: "en" })).toBe("en");
    // Invalid query + invalid stored -> falls to navigator.
    expect(
      resolveLanguage({ query: "xx", stored: "zz", navigator: "ko-KR" }),
    ).toBe("ko");
    // All invalid -> default.
    expect(
      resolveLanguage({ query: "123", stored: "", navigator: "de-DE" }),
    ).toBe("ko");
  });
});

describe("resolveLanguage — input robustness", () => {
  it("is case-insensitive and trims whitespace on the query", () => {
    expect(resolveLanguage({ query: "  EN  " })).toBe("en");
    expect(resolveLanguage({ query: "KO" })).toBe("ko");
  });

  it("matches the primary subtag of navigator.language", () => {
    expect(resolveLanguage({ navigator: "en-GB" })).toBe("en");
    expect(resolveLanguage({ navigator: "ko" })).toBe("ko");
    // An unsupported locale falls through to the default.
    expect(resolveLanguage({ navigator: "ja-JP" })).toBe("ko");
  });
});

describe("normalizeLanguage", () => {
  it("returns the language for valid values", () => {
    expect(normalizeLanguage("en")).toBe("en");
    expect(normalizeLanguage("ko")).toBe("ko");
  });

  it("returns null for invalid or non-string values", () => {
    expect(normalizeLanguage("fr")).toBeNull();
    expect(normalizeLanguage("")).toBeNull();
    expect(normalizeLanguage(null)).toBeNull();
    expect(normalizeLanguage(undefined)).toBeNull();
    expect(normalizeLanguage(42)).toBeNull();
  });
});
