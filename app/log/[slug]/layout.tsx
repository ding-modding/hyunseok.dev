import type { Metadata } from "next";
import type { ReactNode } from "react";
import { logPosts, getLogPost } from "@/content/log";

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

  const title = `${post.title} — Hyunseok Hong`;
  return {
    title,
    description: post.summary,
    alternates: { canonical: `/log/${post.slug}` },
    openGraph: {
      title,
      description: post.summary,
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
