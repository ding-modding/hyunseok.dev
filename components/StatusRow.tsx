import Link from "next/link";
import type { ProjectStatus } from "@/content/types";

/** Maps the status taxonomy to a dot/label modifier class (DESIGN.md). */
function statusClass(status: ProjectStatus): string {
  switch (status) {
    case "LIVE":
      return "live"; // green, pulsing
    case "BETA":
      return "beta"; // amber
    case "IN DEV":
    default:
      return "dev"; // neutral faint
  }
}

interface StatusRowProps {
  name: string;
  status: ProjectStatus;
  /** Mono qualifier shown beside the status label. */
  statusNote: string;
  /** Short description. */
  summary: string;
  /** Internal anchor link to the project detail on /projects. */
  href: string;
}

/**
 * Project status row: dot · name · mono status label · description · arrow.
 * NOT a card — a hairline-divided log row, per DESIGN.md.
 */
export function StatusRow({
  name,
  status,
  statusNote,
  summary,
  href,
}: StatusRowProps) {
  const mod = statusClass(status);
  const label = statusNote ? `${status} · ${statusNote}` : status;

  return (
    <Link href={href} className="status-row">
      <span className={`dot dot-${mod}`} aria-hidden="true" />
      <span className="status-row-main">
        <span className="status-row-head">
          <span className="status-row-name">{name}</span>
          <span className={`status-row-label status-${mod}`}>{label}</span>
        </span>
        <span className="status-row-desc">{summary}</span>
      </span>
      <span className="status-row-arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
