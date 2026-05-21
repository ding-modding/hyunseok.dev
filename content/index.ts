import type { CVContent } from "./types";
import { ko } from "./ko";
import { en } from "./en";
import type { Language } from "@/lib/i18n";

/** All site content keyed by language. */
export const content: Record<Language, CVContent> = { ko, en };

export type { CVContent };
