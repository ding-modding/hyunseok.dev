"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { formatLogDate } from "@/lib/logDate";

/**
 * Dev-log list page: posts newest first, each as a hairline-divided log row
 * (mono date · title · one-line summary), in the deploy-log style of the CV.
 * Title and summary resolve to the active language.
 */
export default function LogListPage() {
  const { t, lang } = useLanguage();

  const posts = [...t.log].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="wrap fade-in">
      <section className="page-intro">
        <h1>{t.ui.logTitle}</h1>
        <p>{t.ui.logIntro}</p>
      </section>

      <div className="log-list">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/log/${post.slug}`}
            className="log-list-row"
          >
            <time className="log-list-date" dateTime={post.date}>
              {formatLogDate(post.date, lang)}
            </time>
            <span className="log-list-main">
              <span className="log-list-title">{post.title[lang]}</span>
              <span className="log-list-summary">{post.summary[lang]}</span>
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
