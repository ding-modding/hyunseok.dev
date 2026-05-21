import type { ReactNode } from "react";

interface LogEntryProps {
  /** Mono timestamp shown in the left gutter. */
  time: string;
  /** Primary heading line (role or award title). */
  title: ReactNode;
  /** Optional secondary line (org). */
  org?: ReactNode;
  /** Optional body note. */
  note?: ReactNode;
  /** Optional smaller footnote. */
  footnote?: ReactNode;
}

/**
 * Deploy-log row: mono timestamp in a left gutter, content on the right,
 * hairline divider. Shared by Experience and Honors & Awards (DESIGN.md).
 */
export function LogEntry({ time, title, org, note, footnote }: LogEntryProps) {
  return (
    <div className="log-entry">
      <div className="log-time">{time}</div>
      <div className="log-body">
        <div className="log-title">{title}</div>
        {org && <div className="log-org">{org}</div>}
        {note && <div className="log-note">{note}</div>}
        {footnote && <div className="log-footnote">{footnote}</div>}
      </div>
    </div>
  );
}
