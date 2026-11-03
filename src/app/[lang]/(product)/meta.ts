import type { Metadata } from "next";
import { site } from "@/content/site";
import { hasLocale, locales } from "@/i18n/config";
import { logviaCopy } from "@/content/logvia-copy";

/** Title, description, canonical and hreflang for a product page at /{lang}{path}. */
export async function productMeta(
  params: Promise<{ lang: string }>,
  path: string,
  key: keyof ReturnType<typeof logviaCopy>["meta"],
): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLocale(lang) ? lang : "en";
  const { title, description } = logviaCopy(l).meta[key];
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { ...Object.fromEntries(locales.map((x) => [x, `/${x}${path}`])), "x-default": `/en${path}` },
    },
    openGraph: { title, description, type: "website", url: `/${l}${path}`, locale: { en: "en_US", uz: "uz_UZ", ru: "ru_RU" }[l] },
  };
}
