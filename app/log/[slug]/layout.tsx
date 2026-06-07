import type { Metadata } from "next";
import type { ReactNode } from "react";
import { logPosts, getLogPost } from "@/content/log";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";

/** Pre-render a static page for every known post slug. */
export function generateStaticParams() {
  return logPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getLogPost(slug);

  if (!post) {
    return { title: "Log — Hyunseok Hong" };
  }

  // Metadata is rendered server-side without the client language; resolve to
  // the site default (DEFAULT_LANGUAGE = "ko").
  const title = `${post.title[DEFAULT_LANGUAGE]} — Hyunseok Hong`;
  const description = post.summary[DEFAULT_LANGUAGE];
  return {
    title,
    description,
    alternates: { canonical: `/log/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `https://hyunseok.dev/log/${post.slug}`,
    },
  };
}

export default function LogPostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
