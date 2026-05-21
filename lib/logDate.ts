import type { Language } from "./i18n";

/**
 * Format an ISO date (YYYY-MM-DD) for display in the bilingual /log chrome.
 *
 * KO: "2026.05.19" — mono dotted form used elsewhere on the site.
 * EN: "May 19, 2026" — month name, matching English reading order.
 *
 * Returns the raw input unchanged if it is not a valid YYYY-MM-DD string,
 * so a malformed date degrades gracefully rather than throwing.
 */
const EN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export function formatLogDate(iso: string, lang: Language): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;

  const [, year, month, day] = match;

  if (lang === "en") {
    const monthName = EN_MONTHS[Number(month) - 1] ?? month;
    return `${monthName} ${Number(day)}, ${year}`;
  }

  // Korean: dotted numeric, consistent with the CV's mono timestamps.
  return `${year}.${month}.${day}`;
}
