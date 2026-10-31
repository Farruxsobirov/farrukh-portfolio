"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { scrollToId } from "@/lib/scroll";
import Halftone from "./Halftone";
import { Pill } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Products() {
  const { lang, t } = useI18n();
  const p = t.products;
  return (
    <section id="products" data-theme="light" className="relative overflow-clip bg-bg pt-8 pb-16 md:pt-12 md:pb-32">
      <div className="gutter">
        <div className="mb-10">
          <p className="mb-3 text-[13px] font-medium text-muted">{p.eyebrow}</p>
          <h2 className="heading text-[clamp(36px,4.6vw,68px)]">
            {p.titleA} <span className="text-soft">{p.titleB}</span>
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease }}
          className="grid gap-2 rounded-card bg-white p-2 shadow-[0_1px_0_rgba(0,0,0,.04)] lg:grid-cols-[1.15fr_1fr]"
        >
          <a
            href={`/${lang}/logvia/`}
            aria-label="Logvia"
            className="group relative block min-h-[360px] overflow-hidden rounded-[28px] bg-[#1b1b1b] md:min-h-[520px]"
          >
            <div className="dot-grid-dark absolute inset-0" />
            <div className="absolute inset-0 opacity-70">
              <Halftone variant="rings" color="#fe4701" spacing={11} maxRadius={3.2} speed={0.6} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logvia/popup.webp"
              alt="Logvia popup with Log in and Sign up tabs"
              width={988}
              height={1251}
              loading="lazy"
              className="absolute top-[9%] right-[8%] w-[46%] rounded-[18px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)] transition-transform duration-700 ease-[var(--ease-snap)] group-hover:-translate-y-2"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logvia/verify.webp"
              alt="Verify your email screen with a six-digit code"
              width={1240}
              height={910}
              loading="lazy"
              className="absolute bottom-[9%] left-[7%] w-[44%] rounded-[16px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)] transition-transform duration-700 ease-[var(--ease-snap)] group-hover:translate-y-2"
            />
            <span className="absolute top-5 left-5 rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-white">WooCommerce</span>
          </a>

          <div className="flex flex-col justify-between gap-10 p-5 md:p-10">
            <div>
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-ink text-white">
                  <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <path d="M10 17l5-5-5-5" />
                    <path d="M15 12H3" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[34px] leading-none font-medium tracking-[-0.04em]">Logvia</h3>
                  <p className="mt-1.5 text-[14px] text-muted">{p.tagline}</p>
                </div>
              </div>
              <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.5] text-muted">{p.text}</p>
              <ul className="mt-8 flex flex-col gap-3">
                {p.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[16px] font-medium tracking-[-0.01em]">
                    <span className="size-2 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill label={p.explore} sub={p.exploreSub} href={`/${lang}/logvia/`} />
            </div>
          </div>
        </motion.article>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-5 rounded-card border border-dashed border-ink/20 px-6 py-6 md:px-10">
          <div>
            <h3 className="text-[24px] leading-tight font-medium tracking-[-0.03em] text-muted">{p.nextTitle}</h3>
            <p className="mt-1 text-[15px] text-muted">{p.nextText}</p>
          </div>
          <Pill label={p.suggest} tone="ghost" onClick={() => scrollToId("contact")} />
        </div>
      </div>
    </section>
  );
}
