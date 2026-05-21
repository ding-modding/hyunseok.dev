"use client";

import { useEffect, useState } from "react";

interface ContactEmailProps {
  /** Local part of the address, e.g. "contact". */
  user: string;
  /** Domain part, e.g. "hyunseok.dev". */
  domain: string;
  /** Optional class for the rendered link/text. */
  className?: string;
  /** Render as a mailto link (true) or plain text (false). */
  asLink?: boolean;
}

/**
 * Assembles an email address in JS so the raw `user@domain` string never
 * appears in the server-rendered HTML — defeats naive address scrapers.
 * Before hydration it shows an obfuscated placeholder.
 */
export function ContactEmail({
  user,
  domain,
  className,
  asLink = true,
}: ContactEmailProps) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // Intentional: assemble the address only on the client, after mount, so
    // the raw string is absent from server-rendered HTML. This bridges a
    // deliberate server/client difference — not a cascading-render bug.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAddress(`${user}@${domain}`);
  }, [user, domain]);

  if (!address) {
    // Pre-hydration placeholder — not a valid harvestable address.
    return (
      <span className={className}>
        {user}
        <span aria-hidden="true"> [at] </span>
        {domain}
      </span>
    );
  }

  if (!asLink) {
    return <span className={className}>{address}</span>;
  }

  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
    </a>
  );
}
