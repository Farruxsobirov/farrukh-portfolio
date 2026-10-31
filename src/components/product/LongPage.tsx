// A long-form page (docs, legal) with an optional table of contents.
export default function LongPage({
  eyebrow,
  title,
  lead,
  html,
  toc,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  html: string;
  toc?: { id: string; label: string }[];
}) {
  return (
    <div className="gutter mx-auto max-w-[1440px] pb-20 md:pb-32">
      <header className="border-b border-p-rule pt-10 pb-10 md:pt-20 md:pb-16">
        <p className="mb-3 flex items-center gap-2 text-[13px] font-medium text-p-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
        <h1 className="tight max-w-[16ch] text-[clamp(44px,6vw,92px)] font-medium">{title}</h1>
        {lead && <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.5] text-p-muted">{lead}</p>}
      </header>
      <div className={`pt-12 md:pt-16 ${toc ? "grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]" : ""}`}>
        {toc && (
          <nav aria-label="On this page" className="hidden self-start lg:sticky lg:top-24 lg:block">
            <p className="mb-3 text-[13px] font-medium text-p-muted">On this page</p>
            <ul className="flex flex-col border-l border-p-rule">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] text-p-muted transition-colors hover:border-accent hover:text-p-ink">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <article className="pp-prose min-w-0" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
