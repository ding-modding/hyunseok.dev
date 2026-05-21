"use client";

import { useLanguage } from "./LanguageProvider";
import { ContactEmail } from "./ContactEmail";

/** Site footer: contact line, social links, copyright. */
export function Footer() {
  const { t } = useLanguage();
  const { contact, footer, sectionLabels } = t;

  return (
    <footer className="site-footer">
      <div className="site-footer-line">
        {sectionLabels.contact} —{" "}
        <ContactEmail
          user="contact"
          domain="hyunseok.dev"
          className="site-footer-link"
        />
      </div>
      <div className="site-footer-line">
        <a
          className="site-footer-link"
          href={contact.github.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {contact.linkedin && (
          <>
            {" · "}
            <a
              className="site-footer-link"
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </>
        )}
        {" · "}
        <a className="site-footer-link" href={contact.resumeHref}>
          {t.hero.links.find((l) => l.glyph === "download")?.label ??
            "Résumé PDF"}
        </a>
      </div>
      <div className="site-footer-copy">{footer}</div>
    </footer>
  );
}
