"use client";

import { useLanguage } from "./LanguageProvider";
import { ContactEmail } from "./ContactEmail";

/**
 * Poster-style first viewport: kicker, large name, one-line identity,
 * current-status line with the single live dot, and mono links.
 */
export function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section className="hero">
      <p className="kicker">{hero.kicker}</p>
      <h1 className="hero-name">{hero.name}</h1>
      <p className="hero-identity">{hero.identity}</p>

      <p className="hero-now">
        <span className="dot dot-live" aria-hidden="true" />
        <span>{hero.nowLine}</span>
      </p>

      <p className="hero-location">{hero.location}</p>

      <div className="hero-links">
        {hero.links.map((link) => {
          if (link.isEmail) {
            // contact@hyunseok.dev — assembled client-side.
            return (
              <ContactEmail
                key={link.label}
                user="contact"
                domain="hyunseok.dev"
                className="hero-link"
              />
            );
          }
          const external = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              className="hero-link"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
              {link.glyph === "external" && (
                <span className="link-glyph" aria-hidden="true">
                  {" ↗"}
                </span>
              )}
              {link.glyph === "download" && (
                <span className="link-glyph" aria-hidden="true">
                  {" ↓"}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
