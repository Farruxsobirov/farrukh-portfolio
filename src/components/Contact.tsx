"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { fmt, useI18n } from "@/i18n/context";
import { sound } from "@/lib/sound";
import { Pill } from "./ui";

const ease = [0.32, 0.72, 0, 1] as const;

type Status = "idle" | "sending" | "sent" | "mailto" | "error" | "limited";

const statusTone: Record<Exclude<Status, "idle">, string> = {
  sending: "text-muted",
  sent: "text-[#1f9d55]",
  mailto: "text-muted",
  error: "text-accent-ink",
  limited: "text-accent-ink",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 rounded-[22px] bg-[#f1f1ef] px-5 py-4 transition-colors focus-within:bg-[#eaeae7]">
      <span className="text-[15px] font-medium tracking-[-0.01em]">{label} *</span>
      {children}
    </label>
  );
}

export default function Contact() {
  const { lang, t } = useI18n();
  const c = t.contact;
  const [open, setOpen] = useState<number | null>(0);
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && json.ok) {
        form.reset();
        sound.chime();
        setStatus("sent");
        return;
      }
      if (json.error === "not_configured") {
        // Bot not set up yet: fall back to the visitor's email app.
        const subject = encodeURIComponent(fmt(c.mailSubject, { name: data.name }));
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setStatus("mailto");
        return;
      }
      setStatus(json.error === "too_many" ? "limited" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" data-theme="light" className="gutter relative bg-bg pb-24">
      <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="rounded-card bg-white p-7 md:p-10">
            <p className="mb-3 text-[13px] font-medium text-muted">{c.faqEyebrow}</p>
            <h2 className="heading text-[clamp(30px,3.4vw,48px)]">
              {c.faqA} <span className="text-soft">{c.faqB}</span>
            </h2>
            <ul className="mt-8">
              {c.faqs.map((f, i) => (
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
              [c.basedIn, t.common.location],
              [c.hours, c.hoursValue],
              [c.languages, c.languagesValue],
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
            <div className="group/avatar mb-6 flex items-center gap-3">
              {/* Outer wrapper is not clipped, so the status dot can sit on the edge */}
              <span className="relative size-16 shrink-0">
                <span className="block size-full overflow-hidden rounded-full bg-[#e7e7e4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/farrukh-contact.webp"
                    alt={site.name}
                    className="size-full object-cover grayscale transition-[filter,scale] duration-500 group-hover/avatar:scale-110 group-hover/avatar:grayscale-0"
                  />
                </span>
                <span aria-label={t.common.online} className="pulse-dot absolute right-0 bottom-0.5 size-4 rounded-full border-[3px] border-white bg-[#3ddc84]" />
              </span>
              <span className="text-[14px] leading-tight">
                <span className="block font-medium">{site.name}</span>
                <span className="text-muted">{t.common.usuallyReplies}</span>
              </span>
            </div>
            <h2 className="heading text-[clamp(28px,2.6vw,38px)]">
              {c.haveProject}
              <br />
              <span className="text-soft">{c.letsTalk}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill label={c.emailMe} sub={site.email} href={`mailto:${site.email}`} />
            <Pill label="Telegram" sub={site.telegramHandle} tone="dark" href={site.telegram} external />
            <Pill label={c.hireFiverr} tone="ghost" href={site.fiverr} external />
          </div>

          <form onSubmit={submit} className="relative flex flex-col gap-2 border-t border-rule pt-6">
            <p className="mb-2 text-[18px] font-medium tracking-[-0.02em]">{c.orWrite}</p>
            <Field label={c.name}>
              <input name="name" required autoComplete="name" placeholder={c.namePh} className="bg-transparent text-[15px] outline-none placeholder:text-soft" />
            </Field>
            <Field label={c.email}>
              <input name="email" type="email" required autoComplete="email" placeholder="name@email.com" className="bg-transparent text-[15px] outline-none placeholder:text-soft" />
            </Field>
            <Field label={c.message}>
              <textarea name="message" required rows={4} placeholder={c.messagePh} className="resize-none bg-transparent text-[15px] outline-none placeholder:text-soft" />
            </Field>
            {/* Honeypot for bots: hidden from people and screen readers */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <Pill label={status === "sending" ? c.sending : c.send} tone="dark" type="submit" />
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.span
                    key={status}
                    role="status"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className={`max-w-[28ch] text-[13px] leading-snug ${statusTone[status]}`}
                  >
                    {c.status[status]}
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
