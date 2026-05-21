import type { ReactNode } from "react";

interface SectionProps {
  /** Mono uppercase label shown above the section content. */
  label: string;
  /** Stable id for anchor links. */
  id?: string;
  children: ReactNode;
}

/**
 * Section wrapper shared by the main page and /projects.
 * Hairline top border + mono label, per DESIGN.md.
 */
export function Section({ label, id, children }: SectionProps) {
  return (
    <section id={id} className="sec">
      <h2 className="sec-label">{label}</h2>
      {children}
    </section>
  );
}
