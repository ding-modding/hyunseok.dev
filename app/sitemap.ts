import type { MetadataRoute } from "next";
import { logPosts } from "@/content/log";
import { researchProjects } from "@/content/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hyunseok.dev";
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/log`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/research`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...researchProjects.map((p) => ({
      url: `${base}/research/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...logPosts.map((post) => ({
      url: `${base}/log/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
