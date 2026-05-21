import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Log — Hyunseok Hong",
  description:
    "Dev log of Hyunseok Hong — dated notes from building products.",
  alternates: { canonical: "/log" },
  openGraph: {
    title: "Log — Hyunseok Hong",
    description:
      "Dev log of Hyunseok Hong — dated notes from building products.",
    url: "https://hyunseok.dev/log",
  },
};

export default function LogLayout({ children }: { children: ReactNode }) {
  return children;
}
