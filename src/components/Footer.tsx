"use client";

import { motion } from "framer-motion";
import { nav, site } from "@/content/site";
import { scrollToId } from "@/lib/scroll";
import Halftone from "./Halftone";
import Logo from "./Logo";
import { Pill, Roll } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer data-theme="light" className="relative overflow-clip bg-bg pt-16 md:pt-36">
      <div className="pointer-events-none absolute right-[-10%] bottom-0 h-[70%] w-[70%] opacity-[0.07]">
        <Halftone variant="orb" color="#111" spacing={12} maxRadius={5} speed={0.5} />
      </div>
      <div className="gutter relative">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
          className="tight max-w-[14ch] text-[clamp(48px,8.2vw,140px)] font-medium"
        >
          This is the end of the page.
          <span className="text-soft"> Your project starts here.</span>
        </motion.h2>
        <div className="mt-10 flex flex-wrap gap-2">
          <Pill label="Start a project" sub="Free consultation" onClick={() => scrollToId("contact")} />
          <Pill label="Back to top" tone="ghost" onClick={() => scrollToId("top")} />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-rule py-10 sm:grid-cols-3 md:mt-24">
          <div>
            <p className="mb-4 text-[13px] text-muted">Explore</p>
            <ul className="flex flex-col gap-1.5">
              {nav.map((n) => (
                <li key={n.id}>
                  <button type="button" onClick={() => scrollToId(n.id)} className="group text-[17px] font-medium tracking-[-0.02em]">
                    <Roll>{n.label}</Roll>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[13px] text-muted">Elsewhere</p>
            <ul className="flex flex-col gap-1.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group text-[17px] font-medium tracking-[-0.02em]">
                    <Roll>{s.label}</Roll>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col justify-between gap-6 sm:col-span-1 sm:items-end sm:text-right">
            <p className="group flex items-center gap-3">
              <span className="text-[17px] font-medium tracking-[-0.03em]">{site.name}</span>
              <span className="block transition-transform duration-700 ease-[var(--ease-snap)] group-hover:rotate-90">
                <Logo className="size-11 text-ink" />
              </span>
            </p>
            <p className="text-[13px] text-muted">
              © 2026 {site.name}
              <br />
              {site.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
