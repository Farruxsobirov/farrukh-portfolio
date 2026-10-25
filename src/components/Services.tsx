"use client";

import { motion } from "framer-motion";
import { services, stack } from "@/content/site";
import { scrollToId } from "@/lib/scroll";
import Halftone, { type Variant } from "./Halftone";
import { Pill } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" data-theme="light" className="relative overflow-clip bg-bg pt-12 pb-16 md:pt-16 md:pb-40">
      <div className="gutter">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[13px] font-medium text-muted">Services · 01/02</p>
            <h2 className="heading text-[clamp(36px,4.6vw,68px)]">
              Choose. <span className="text-soft">What you need.</span>
            </h2>
          </div>
          <Pill label="Ask for a quote" sub="Free, no commitment" onClick={() => scrollToId("contact")} />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease, delay: (i % 2) * 0.08 }}
              className="group flex flex-col gap-2 rounded-card bg-white p-2 shadow-[0_1px_0_rgba(0,0,0,.04)]"
            >
              <div className="relative h-[220px] overflow-hidden rounded-[28px] bg-[#1b1b1b] md:h-[260px]">
                <div className="dot-grid-dark absolute inset-0" />
                <Halftone variant={s.pattern as Variant} color={i === 0 ? "#fe4701" : "rgba(255,255,255,.9)"} spacing={10} maxRadius={3.4} />
                <span className="absolute top-5 left-5 text-[13px] font-medium text-white/60">{String(i + 1).padStart(2, "0")}.</span>
                {i === 0 && (
                  <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-white">Most popular</span>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between gap-6 p-5 md:p-6">
                <div>
                  <h3 className="text-[24px] leading-tight font-medium tracking-[-0.03em]">{s.title}</h3>
                  <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.45] text-muted">{s.text}</p>
                </div>
                <p className="flex items-baseline gap-1.5">
                  <span className="text-[13px] text-muted">From</span>
                  <span className="text-[34px] leading-none font-medium tracking-[-0.04em]">{s.price}</span>
                  <span className="text-[15px] text-muted">/project</span>
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-32">
        <p className="gutter mb-6 text-[13px] font-medium text-muted">Stack · 02/02</p>
        <div className="flex overflow-hidden border-y border-rule py-6 md:py-8" aria-label={`Technologies: ${stack.join(", ")}`}>
          <div className="marquee flex w-max shrink-0" aria-hidden>
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 text-[clamp(36px,5vw,76px)] leading-none font-medium tracking-[-0.05em] whitespace-nowrap">
                {t}
                <span className="size-3 rounded-full bg-accent md:size-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
