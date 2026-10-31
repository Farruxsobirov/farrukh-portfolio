import { releases } from "@/content/logvia";
import { productMeta } from "../../meta";

export async function generateMetadata({ params }: PageProps<"/[lang]/logvia/changelog">) {
  return productMeta(params, "/logvia/changelog/", "Logvia changelog", "Every Logvia release and what changed in it.");
}

export default function Page() {
  return (
    <div className="gutter mx-auto max-w-[1440px] pb-20 md:pb-32">
      <header className="border-b border-p-rule pt-10 pb-10 md:pt-20 md:pb-16">
        <p className="mb-3 flex items-center gap-2 text-[13px] font-medium text-p-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          Logvia · Changelog
        </p>
        <h1 className="tight max-w-[16ch] text-[clamp(44px,6vw,92px)] font-medium">What&apos;s new.</h1>
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-p-muted">Every release and what changed in it. Update from Dashboard → Updates.</p>
      </header>
      {releases.map((r) => (
        <section key={r.version} className="grid gap-6 border-b border-p-rule py-12 md:grid-cols-[260px_minmax(0,1fr)] md:py-16">
          <div>
            <p className="text-[44px] leading-none font-medium tracking-[-0.05em]">{r.version}</p>
            <time dateTime={r.iso} className="mt-3 block text-[14px] text-p-muted">{r.date}</time>
          </div>
          <div className="pp-prose">
            <h2>{r.title}</h2>
            <ul>
              {r.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
