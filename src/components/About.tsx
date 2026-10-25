"use client";

import { motion } from "framer-motion";
import { about, site } from "@/content/site";
import { scrollToId } from "@/lib/scroll";
import Halftone, { type Variant } from "./Halftone";
import { Pill } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = (i: number) => ({
  initial: { opacity: 0, y: 60, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 1, ease, delay: i * 0.08 },
});

export default function About() {
  return (
    <section id="about" className="relative bg-[linear-gradient(180deg,#4a4a49_0%,#262626_45%,#141414_100%)] pt-6 pb-24 md:pb-36">
      <div className="dot-grid-dark pointer-events-none absolute inset-0" />
      <div className="gutter relative grid gap-3 lg:grid-cols-[1fr_2fr]">
        <motion.article
          {...rise(0)}
          className="flex flex-col justify-between gap-12 rounded-card border border-white/10 bg-[#262626] p-7 text-white md:p-10 lg:row-span-2"
        >
          <div className="flex flex-col gap-6">
            <div className="flex -space-x-2">
              <span className="grid size-14 place-items-center rounded-full border-2 border-[#262626] bg-accent text-[18px] font-semibold tracking-[-0.04em]">
                {site.initials}
              </span>
              <span className="grid size-14 place-items-center rounded-full border-2 border-[#262626] bg-[#3a3a3a] text-[22px]">
                ✦
              </span>
            </div>
            <h2 className="heading text-[clamp(26px,2.4vw,34px)]">
              {about.title}
              <br />
              <span className="text-white/50">{about.soft}</span>
            </h2>
            <p className="max-w-[46ch] text-[16px] leading-[1.45] text-white/65">{about.text}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[13px] text-white/50">
              {site.location} · {site.timezone}
            </p>
            <Pill label="Start a project" tone="light" onClick={() => scrollToId("contact")} />
          </div>
        </motion.article>

        <div className="grid gap-3 sm:grid-cols-2">
          {about.stats.map((s, i) => (
            <motion.article
              key={s.label}
              {...rise(i + 1)}
              className="group grid min-h-[230px] grid-cols-[1fr_1.05fr] gap-4 rounded-card border border-white/10 bg-[#262626] p-5 text-white transition-colors duration-300 hover:bg-[#2c2c2c] md:p-6"
            >
              <div className="flex flex-col justify-between py-2 pl-2">
                <div>
                  <p className="text-[17px] leading-tight font-medium tracking-[-0.02em]">{s.label}</p>
                  <p className="mt-1 text-[15px] leading-tight text-white/55">{s.note}</p>
                </div>
                <p className="text-[clamp(40px,4vw,56px)] leading-none font-medium tracking-[-0.05em]">
                  {s.value}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-tile border border-white/10 bg-[#1f1f1f]">
                <div className="dot-grid-dark absolute inset-0" />
                <Halftone variant={s.chart as Variant} color="rgba(255,255,255,0.9)" spacing={8} maxRadius={2.6} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
