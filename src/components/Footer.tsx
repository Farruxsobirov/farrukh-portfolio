"use client";

import { motion } from "framer-motion";
import { navIds, site } from "@/content/site";
import { useI18n } from "@/i18n/context";
import LangSwitch from "./LangSwitch";
import { scrollToId } from "@/lib/scroll";
import Halftone from "./Halftone";
import Logo from "./Logo";
import { Pill, Roll } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const { t } = useI18n();
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
          {t.footer.titleA}
          <span className="text-soft"> {t.footer.titleB}</span>
        </motion.h2>
        <div className="mt-10 flex flex-wrap gap-2">
          <Pill label={t.common.startProject} sub={t.common.freeConsultation} onClick={() => scrollToId("contact")} />
          <Pill label={t.footer.backToTop} tone="ghost" onClick={() => scrollToId("top")} />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-rule py-10 sm:grid-cols-3 md:mt-24">
          <div>
            <p className="mb-4 text-[13px] text-muted">{t.footer.explore}</p>
            <ul className="flex flex-col gap-1.5">
              {navIds.map((id) => (
                <li key={id}>
                  <button type="button" onClick={() => scrollToId(id)} className="group text-[17px] font-medium tracking-[-0.02em]">
                    <Roll>{t.nav[id]}</Roll>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[13px] text-muted">{t.footer.elsewhere}</p>
            <ul className="flex flex-col gap-1.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group text-[17px] font-medium tracking-[-0.02em]">
                    <Roll>{s.label === "email" ? t.common.emailLabel : s.label}</Roll>
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
            <LangSwitch tone="light" />
            <p className="text-[13px] text-muted">
              © 2026 {site.name}
              <br />
              {t.common.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
