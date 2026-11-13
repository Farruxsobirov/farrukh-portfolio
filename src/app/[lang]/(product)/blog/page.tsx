import type { Metadata } from "next";
import { blogCopy, posts } from "@/content/blog";
import { formatDate } from "@/content/logvia-copy";
import { site } from "@/content/site";
import { hasLocale, locales, type Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  const l: Locale = hasLocale(lang) ? lang : "en";
  const c = blogCopy[l];
  return {
    metadataBase: new URL(site.url),
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${l}/blog/`,
      languages: { ...Object.fromEntries(locales.map((x) => [x, `/${x}/blog/`])), "x-default": "/en/blog/" },
    },
    openGraph: { title: c.metaTitle, description: c.metaDescription, type: "website", url: `/${l}/blog/` },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  const l: Locale = hasLocale(lang) ? lang : "en";
  const c = blogCopy[l];
  return (
    <div className="gutter mx-auto max-w-[1440px] pb-20 md:pb-32">
      <header className="border-b border-p-rule pt-10 pb-10 md:pt-20 md:pb-16">
        <p className="mb-3 flex items-center gap-2 text-[13px] font-medium text-p-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {c.eyebrow}
        </p>
        <h1 className="tight max-w-[16ch] text-[clamp(44px,6vw,92px)] font-medium">{c.title}</h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-p-muted">{c.lead}</p>
      </header>
      <ul className="grid gap-x-6 gap-y-12 pt-12 md:grid-cols-2 md:pt-16">
        {posts.map((p) => {
          const t = p.text[l];
          return (
            <li key={p.slug}>
              <a href={`/${l}/blog/${p.slug}/`} className="group block">
                <div className="overflow-hidden rounded-[24px] bg-[#141414]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover.src} width={p.cover.w} height={p.cover.h} alt="" loading="lazy" className="w-full transition-transform duration-700 ease-[var(--ease-snap)] group-hover:scale-[1.03]" />
                </div>
                <p className="mt-5 flex items-center gap-3 text-[13px] text-p-muted">
                  <span className="rounded-full bg-accent/12 px-2.5 py-0.5 font-semibold text-accent">{p.tag}</span>
                  <time dateTime={p.iso}>{formatDate(p.iso, l)}</time>
                </p>
                <h2 className="mt-3 text-[clamp(24px,2.4vw,32px)] leading-[1.15] font-medium tracking-[-0.03em] group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">{t.title}</h2>
                <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.55] text-p-muted">{t.description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
