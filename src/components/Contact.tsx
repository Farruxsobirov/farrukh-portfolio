"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { languages, site } from "@/content/site";
import { sound } from "@/lib/sound";
import { icons, Pill } from "./ui";

const ease = [0.32, 0.72, 0, 1] as const;

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most landing pages take 1–7 days. Full custom WordPress or headless Next.js sites usually take 1–3 weeks, depending on the number of pages and integrations.",
  },
  {
    q: "Can I edit the content myself?",
    a: "Yes. Every section is built with ACF or a clean CMS structure, so you can change text, images and pages without touching code.",
  },
  {
    q: "Do you work from a Figma design?",
    a: "Yes, I turn Figma designs into pixel-accurate, responsive pages. If you don't have a design yet, we can start from references you like.",
  },
  {
    q: "What happens after launch?",
    a: "I offer post-launch support: fixes, updates, speed optimisation and new sections whenever you need them.",
  },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 rounded-[22px] bg-[#f1f1ef] px-5 py-4 transition-colors focus-within:bg-[#eaeae7]">
      <span className="text-[15px] font-medium tracking-[-0.01em]">{label} *</span>
      {children}
    </label>
  );
}

export default function Contact() {
  const [open, setOpen] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New project from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    sound.chime();
    setSent(true);
  };

  return (
    <section id="contact" className="gutter relative bg-bg pb-24">
      <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="rounded-card bg-white p-7 md:p-10">
            <p className="mb-3 text-[13px] font-medium text-muted">FAQ</p>
            <h2 className="heading text-[clamp(30px,3.4vw,48px)]">
              Your questions. <span className="text-soft">My answers.</span>
            </h2>
            <ul className="mt-8">
              {faqs.map((f, i) => (
                <li key={f.q} className="border-t border-rule">
                  <button
                    type="button"
                    aria-expanded={open === i}
                    onClick={() => {
                      sound.tick(1500);
                      setOpen(open === i ? null : i);
                    }}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[18px] font-medium tracking-[-0.02em]"
                  >
                    {f.q}
                    <motion.svg viewBox="0 0 12 8" className="w-3 shrink-0" animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3, ease }}>
                      <path d="M0 0h12L6 8z" fill="currentColor" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[60ch] pb-6 text-[16px] leading-[1.5] text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Based in", site.location],
              ["Working hours", "8 AM – 10 PM (UTC+5)"],
              ["Languages", languages.join(", ")],
            ].map(([k, v]) => (
              <div key={k} className="rounded-tile bg-white p-5">
                <p className="text-[13px] text-muted">{k}</p>
                <p className="mt-1 text-[16px] font-medium tracking-[-0.02em]">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-card bg-white p-7 md:p-10 lg:sticky lg:top-24 lg:self-start">
          <div>
            <h2 className="heading text-[clamp(28px,2.6vw,38px)]">
              Have a project?
              <br />
              <span className="text-soft">Let&apos;s talk.</span>
            </h2>
            <p className="mt-3 flex items-center gap-2 text-[14px] text-muted">
              <span className="pulse-dot size-2 rounded-full bg-[#3ddc84]" /> Usually replies within 1 hour
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill label="Email me" sub={site.email} href={`mailto:${site.email}`} />
            <Pill label="Hire on Fiverr" tone="ghost" href={site.socials[0].href} external />
          </div>

          <form onSubmit={submit} className="flex flex-col gap-2 border-t border-rule pt-6">
            <p className="mb-2 text-[18px] font-medium tracking-[-0.02em]">Or write here</p>
            <Field label="Name">
              <input name="name" required autoComplete="name" placeholder="Your name" className="bg-transparent text-[15px] outline-none placeholder:text-soft" />
            </Field>
            <Field label="Email">
              <input name="email" type="email" required autoComplete="email" placeholder="name@email.com" className="bg-transparent text-[15px] outline-none placeholder:text-soft" />
            </Field>
            <Field label="Message">
              <textarea name="message" required rows={4} placeholder="Tell me about your project" className="resize-none bg-transparent text-[15px] outline-none placeholder:text-soft" />
            </Field>
            <div className="mt-3 flex items-center gap-4">
              <Pill label="Send" tone="dark" type="submit" />
              <AnimatePresence>
                {sent && (
                  <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1 text-[13px] text-muted">
                    {icons.mail} Opening your email app…
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
