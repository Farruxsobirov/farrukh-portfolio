import { releases } from "@/content/logvia";
import { formatDate, logviaCopy } from "@/content/logvia-copy";
import { productMeta } from "../../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/logvia/changelog">) {
  return productMeta(params, "/logvia/changelog/", "changelog");
}

export default async function Page({ params }: PageProps<"/[lang]/logvia/changelog">) {
  const { lang } = await params;
  const c = logviaCopy(lang).changelog;
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
      {releases.map((r) => {
        const rc = c.releases[r.version];
        return (
          <section key={r.version} className="grid gap-6 border-b border-p-rule py-12 md:grid-cols-[260px_minmax(0,1fr)] md:py-16">
            <div>
              <p className="text-[44px] leading-none font-medium tracking-[-0.05em]">{r.version}</p>
              <time dateTime={r.iso} className="mt-3 block text-[14px] text-p-muted">{formatDate(r.iso, lang)}</time>
            </div>
            <div className="pp-prose">
              <h2>{rc.title}</h2>
              <ul>
                {rc.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
