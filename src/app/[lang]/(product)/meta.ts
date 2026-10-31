import type { Metadata } from "next";
import { site } from "@/content/site";
import { hasLocale, locales } from "@/i18n/config";

/** Title, description, canonical and hreflang for a product page at /{lang}{path}. */
export async function productMeta(params: Promise<{ lang: string }>, path: string, title: string, description: string): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLocale(lang) ? lang : "en";
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { ...Object.fromEntries(locales.map((x) => [x, `/${x}${path}`])), "x-default": `/en${path}` },
    },
    openGraph: { title, description, type: "website", url: `/${l}${path}` },
  };
}
