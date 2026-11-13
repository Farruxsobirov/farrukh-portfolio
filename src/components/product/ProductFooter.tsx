"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { site } from "@/content/site";
import { logvia } from "@/content/logvia";
import { logviaCopy } from "@/content/logvia-copy";
import Halftone from "../Halftone";
import Logo from "../Logo";
import { Pill, Roll } from "../ui";
import ThemeToggle from "./ThemeToggle";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProductFooter() {
  const { lang } = useI18n();
  const base = `/${lang}`;
  const { header: h, footer: f } = logviaCopy(lang);
  const cols = [
    { title: "Logvia", links: [[h.overview, `${base}/logvia/`], [h.pricing, `${base}/logvia/#pricing`], [h.documentation, `${base}/logvia/docs/`], [h.changelog, `${base}/logvia/changelog/`], [h.blog, `${base}/blog/`]] },
    { title: f.help, links: [["WordPress.org", logvia.wporg], [h.supportForum, logvia.support], [h.contact, `${base}/#contact`]] },
    { title: f.legal, links: [[f.terms, `${base}/terms/`], [f.privacy, `${base}/privacy/`], [f.refunds, `${base}/refund/`]] },
    { title: f.elsewhere, links: [[h.portfolio, `${base}/`], ...site.socials.filter((s) => s.label !== "email").map((s) => [s.label, s.href])] },
  ];

  return (
    <footer className="relative overflow-clip border-t border-p-rule pt-16 md:pt-28">
      <div className="pointer-events-none absolute right-[-12%] bottom-0 h-[70%] w-[70%] opacity-[0.08]">
        <Halftone variant="orb" color="#fe4701" spacing={12} maxRadius={5} speed={0.5} />
      </div>
      <div className="gutter relative mx-auto max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease }}
          className="tight max-w-[15ch] text-[clamp(44px,7vw,112px)] font-medium"
        >
          {f.titleA}
          <span className="text-p-muted">{f.titleB}</span>
        </motion.h2>
        <div className="mt-10 flex flex-wrap gap-2">
          <Pill label={f.download} sub="WordPress.org" href={logvia.wporg} external />
          <Pill label={f.readDocs} tone="ghost" href={`${base}/logvia/docs/`} className="!border-p-rule !text-p-ink" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-p-rule py-10 md:mt-24 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <a href={`${base}/`} className="group inline-flex items-center gap-3">
              <span className="block transition-transform duration-700 ease-[var(--ease-snap)] group-hover:rotate-90">
                <Logo className="size-10 text-p-ink" />
              </span>
              <span className="text-[17px] font-medium tracking-[-0.03em]">{site.name}</span>
            </a>
            <p className="mt-4 max-w-[26ch] text-[14px] leading-relaxed text-p-muted">{f.about}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-4 text-[13px] text-p-muted">{c.title}</p>
              <ul className="flex flex-col gap-1.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group text-[16px] font-medium tracking-[-0.02em]"
                    >
                      <Roll>{label}</Roll>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-p-rule py-6 text-[13px] text-p-muted">
          <p>
            © 2026 {site.name}. {f.rights}
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
