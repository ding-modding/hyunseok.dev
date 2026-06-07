"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Quiet top bar: site name, route links, language + theme toggles.
 * Language persists across routes via localStorage (the provider re-resolves
 * on each mount), so plain links are enough — no query-string threading.
 */
export function Nav() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-brand">
          hyunseok.dev
        </Link>
        <nav className="site-nav-links" aria-label={t.nav.home}>
          <Link
            href="/"
            className="site-nav-link"
            aria-current={pathname === "/" ? "page" : undefined}
            data-active={pathname === "/"}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/projects"
            className="site-nav-link"
            aria-current={pathname === "/projects" ? "page" : undefined}
            data-active={pathname === "/projects"}
          >
            {t.nav.projects}
          </Link>
          <Link
            href="/research"
            className="site-nav-link"
            aria-current={pathname.startsWith("/research") ? "page" : undefined}
            data-active={pathname.startsWith("/research")}
          >
            {t.nav.research}
          </Link>
          <Link
            href="/log"
            className="site-nav-link"
            aria-current={pathname.startsWith("/log") ? "page" : undefined}
            data-active={pathname.startsWith("/log")}
          >
            {t.nav.log}
          </Link>
          <span className="site-nav-sep" aria-hidden="true" />
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
