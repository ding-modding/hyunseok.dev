"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { formatLogDate } from "@/lib/logDate";

/**
 * Research list page: projects newest first, each a hairline-divided row
 * (mono date · title · one-line summary), in the same deploy-log style as /log.
 * Report bodies are Korean; only this list chrome is bilingual.
 */
export default function ResearchListPage() {
  const { t, lang } = useLanguage();

  const projects = [...t.research].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="wrap fade-in">
      <section className="page-intro">
        <h1>{t.ui.researchTitle}</h1>
        <p>{t.ui.researchIntro}</p>
      </section>

      <div className="log-list">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/research/${p.slug}`}
            className="log-list-row"
          >
            <time className="log-list-date" dateTime={p.date}>
              {formatLogDate(p.date, lang)}
            </time>
            <span className="log-list-main">
              <span className="log-list-title">{p.title[lang]}</span>
              <span className="log-list-summary">{p.summary[lang]}</span>
            </span>
            <span className="log-list-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>

      <Link href="/" className="back-link">
        ← {t.ui.backHome}
      </Link>
    </div>
  );
}
