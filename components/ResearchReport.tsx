"use client";

import ReactMarkdown, { type ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import type { ComponentPropsWithoutRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Renders a markdown research report in the site design system.
 *
 * Figures are authored with the dark-variant path (`fig_x.png`); in light
 * theme they swap to the `.light` variant, mirroring the standalone deck. A
 * paragraph that contains only an image is promoted to a captioned <figure>
 * (the alt text becomes the caption) — rendering the figure from the `img`
 * component instead would nest <figure> inside react-markdown's wrapping <p>,
 * which is invalid HTML and a hydration error.
 */
export function ResearchReport({ markdown }: { markdown: string }) {
  const { theme } = useTheme();
  const light = theme === "light";

  return (
    <div className="report">
      <ReactMarkdown
        // singleTilde:false — the report uses single `~` for numeric ranges
        // ("2026-01-27~31", "0.05~0.15"); without this GFM reads them as
        // strikethrough delimiters and strikes through whole spans.
        // remarkBreaks — render single newlines as hard <br> so authored line
        // breaks (e.g. the multi-line data-note blockquote) are preserved
        // instead of collapsing to spaces (CommonMark soft-break behavior).
        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkBreaks]}
        components={{
          img: ({ src, alt }) => {
            const base = typeof src === "string" ? src : "";
            const resolved = light ? base.replace(/\.png$/, ".light.png") : base;
            return (
              // Static, theme-paired research figures — next/image adds no
              // value here and would fight the variant swap.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={resolved} alt={alt ?? ""} loading="lazy" />
            );
          },
          p: ({
            node,
            children,
            ...props
          }: ComponentPropsWithoutRef<"p"> & ExtraProps) => {
            const kids = node?.children ?? [];
            const onlyChild = kids.length === 1 ? kids[0] : undefined;
            if (onlyChild?.type === "element" && onlyChild.tagName === "img") {
              const alt = String(onlyChild.properties?.alt ?? "");
              return (
                <figure className="report-figure">
                  {children}
                  {alt && <figcaption>{alt}</figcaption>}
                </figure>
              );
            }
            return <p {...props}>{children}</p>;
          },
          table: ({
            node: _node,
            ...props
          }: ComponentPropsWithoutRef<"table"> & ExtraProps) => (
            <div className="report-table-wrap">
              <table {...props} />
            </div>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
