import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pill } from "@/components/ui";
import { blogCopy, getPost, posts } from "@/content/blog";
import { logvia } from "@/content/logvia";
import { formatDate } from "@/content/logvia-copy";
import { site } from "@/content/site";
import { hasLocale, locales, type Locale } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const l: Locale = hasLocale(lang) ? lang : "en";
  const post = getPost(slug);
  if (!post) return {};
  const t = post.text[l];
  const path = `/blog/${post.slug}/`;
  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { ...Object.fromEntries(locales.map((x) => [x, `/${x}${path}`])), "x-default": `/en${path}` },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      type: "article",
      url: `/${l}${path}`,
      publishedTime: post.iso,
      images: [{ url: post.cover.src, width: post.cover.w, height: post.cover.h }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [post.cover.src] },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  const l: Locale = hasLocale(lang) ? lang : "en";
  const post = getPost(slug);
  if (!post) notFound();
  const t = post.text[l];
  const c = blogCopy[l];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    description: t.description,
    datePublished: post.iso,
    inLanguage: l,
    image: `${site.url}${post.cover.src}`,
    url: `${site.url}/${l}/blog/${post.slug}/`,
    author: { "@type": "Person", name: "Farrukh Sobirov", url: site.url },
  };
  return (
    <div className="gutter mx-auto max-w-[1440px] pb-20 md:pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="mx-auto max-w-[860px] pt-10 pb-10 md:pt-20 md:pb-12">
        <a href={`/${l}/blog/`} className="mb-6 inline-flex items-center gap-2 text-[14px] font-medium text-p-muted hover:text-p-ink">
          <span aria-hidden>←</span> {c.back}
        </a>
        <p className="mb-4 flex items-center gap-3 text-[13px] text-p-muted">
          <span className="rounded-full bg-accent/12 px-2.5 py-0.5 font-semibold text-accent">{post.tag}</span>
          <time dateTime={post.iso}>{formatDate(post.iso, l)}</time>
        </p>
        <h1 className="tight text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-medium">{t.title}</h1>
        <p className="mt-6 text-[19px] leading-[1.5] text-p-muted">{t.description}</p>
      </header>
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-[#141414]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.cover.src} width={post.cover.w} height={post.cover.h} alt="" className="w-full" />
      </div>
      <article className="pp-prose mx-auto mt-12 max-w-[760px] md:mt-16" dangerouslySetInnerHTML={{ __html: t.html }} />
      <aside className="mx-auto mt-16 max-w-[760px] rounded-[28px] bg-[#141414] p-8 text-white md:p-10">
        <p className="text-[28px] leading-[1.1] font-medium tracking-[-0.03em]">{c.ctaTitle}</p>
        <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.55] text-white/65">{c.ctaText}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Pill label={c.ctaFree} sub="WordPress.org" href={logvia.wporg} external />
          <Pill label={c.ctaPro} tone="ghostLight" href={`/${l}/logvia/#pricing`} />
          <Pill label={c.ctaPreview} tone="ghostLight" href={`${logvia.wporg}?preview=1`} external />
        </div>
      </aside>
    </div>
  );
}
