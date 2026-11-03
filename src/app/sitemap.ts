import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";

export const dynamic = "force-static";

// Every page exists in each language at /{lang}{path}.
const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/logvia/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/logvia/docs/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/logvia/changelog/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/refund/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      changeFrequency,
      priority: lang === "en" ? priority : Math.round(priority * 90) / 100,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])) },
    })),
  );
}
