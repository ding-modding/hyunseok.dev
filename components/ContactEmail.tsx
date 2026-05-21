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
 * Renders the contact address. `contact@hyunseok.dev` is a dedicated mailbox
 * (Cloudflare Email Routing, with spam filtering), so the address is shown
 * plainly — no `[at]` obfuscation, no pre-hydration flash.
 */
export function ContactEmail({
  user,
  domain,
  className,
  asLink = true,
}: ContactEmailProps) {
  const address = `${user}@${domain}`;

  if (!asLink) {
    return <span className={className}>{address}</span>;
  }

  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
    </a>
  );
}
