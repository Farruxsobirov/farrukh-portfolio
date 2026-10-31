"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { compare, extras, facts, faq, features, logvia, plans } from "@/content/logvia";
import Halftone from "../Halftone";
import { Pill } from "../ui";
import { LogviaMark } from "./ProductHeader";

const ease = [0.22, 1, 0.36, 1] as const;

const extraIcons: Record<(typeof extras)[number]["icon"], React.ReactNode> = {
  window: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 10h8M8 14h5" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h10" />,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12h11l2-8H6.5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  pen: <><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13 7l4 4" /></>,
  palette: <><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" /></>,
};

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="mx-auto grid size-7 place-items-center rounded-full bg-accent text-white" aria-label="Included">
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m5 12 5 5 9-10" />
      </svg>
    </span>
  ) : (
    <span className="mx-auto block h-0.5 w-3 rounded bg-p-muted/50" aria-label="Not included" />
  );
}

function Shot({ src, w, h, alt, className = "" }: { src: string; w: number; h: number; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} width={w} height={h} alt={alt} loading="lazy" className={`rounded-[18px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.85)] ${className}`} />
  );
}

export default function LogviaPage() {
  const { lang } = useI18n();
  const letters = "LOGVIA".split("");
  return (
    <>
      {/* Hero */}
      <section className="gutter mx-auto max-w-[1440px] pt-2">
        <div className="relative isolate flex min-h-[min(860px,calc(100svh-90px))] flex-col overflow-hidden rounded-card bg-[#161616] text-white">
          <div className="dot-grid-dark absolute inset-0 -z-10" />
          <div className="absolute inset-0 -z-10 opacity-35 lg:opacity-80">
            <Halftone variant="blob" color="#fe4701" spacing={10} maxRadius={3.6} speed={0.7} />
          </div>

          <div className="grid flex-1 gap-10 p-6 md:p-10 lg:grid-cols-[1.05fr_1fr] lg:p-14">
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] text-white/80 backdrop-blur"
              >
                <span className="pulse-dot size-2 rounded-full bg-accent" />v{logvia.version}
                {logvia.inReview ? " · In review on WordPress.org" : " · Free on WordPress.org"}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.18 }}
                className="tight mt-6 max-w-[14ch] text-[clamp(44px,6.2vw,96px)] font-medium"
              >
                The login your WooCommerce <span className="text-white/45">store deserves.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.3 }}
                className="mt-6 max-w-[44ch] text-[18px] leading-[1.5] text-white/65"
              >
                Customers sign up with a verified email or one click with Google, in a popup that never takes them away from what they were buying.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.4 }}
                className="mt-9 flex flex-wrap gap-2"
              >
                <Pill label="Download free" sub="WordPress.org" href={logvia.wporg} external />
                <Pill label="See Pro plans" tone="ghostLight" href="#pricing" />
              </motion.div>
            </div>

            <div className="relative hidden min-h-[460px] lg:block">
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ duration: 1.3, ease, delay: 0.35 }}
                className="absolute top-[2%] right-[4%] w-[62%]"
              >
                <Shot src="/logvia/popup.webp" w={988} h={1251} alt="Logvia popup with Log in and Sign up tabs" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 1.3, ease, delay: 0.5 }}
                className="absolute bottom-[4%] left-[2%] w-[52%]"
              >
                <Shot src="/logvia/verify.webp" w={1240} h={910} alt="Verify your email screen with six code boxes" />
              </motion.div>
            </div>
          </div>

          <div aria-hidden className="flex justify-between overflow-hidden px-4 pb-2 md:px-8">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease, delay: 0.5 + i * 0.06 }}
                className="block text-[clamp(84px,19vw,300px)] leading-[0.78] font-medium tracking-[-0.06em] text-white"
              >
                {l}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="gutter mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-p-rule py-10 md:grid-cols-4 md:py-14">
          {facts.map((f) => (
            <div key={f.title}>
              <p className="flex items-center gap-2 text-[19px] font-medium tracking-[-0.02em]">
                <span className="size-1.5 rounded-full bg-accent" />
                {f.title}
              </p>
              <p className="mt-1.5 pl-3.5 text-[14px] leading-snug text-p-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="gutter mx-auto flex max-w-[1440px] flex-col gap-3 py-16 md:py-28">
        <div className="mb-8 md:mb-14">
          <p className="mb-3 text-[13px] font-medium text-p-muted">What it does</p>
          <h2 className="heading max-w-[18ch] text-[clamp(36px,4.6vw,68px)]">
            Three things your store <span className="text-p-muted">gets right away.</span>
          </h2>
        </div>
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease }}
            className={`grid gap-2 rounded-card bg-p-card p-2 ${f.wide ? "lg:grid-cols-[1fr_1.5fr]" : "lg:grid-cols-[1fr_1.1fr]"}`}
          >
            <div className={`flex flex-col justify-between gap-8 p-5 md:p-10 ${i % 2 ? "lg:order-2" : ""}`}>
              <div>
                <p className="flex items-center gap-2 text-[13px] font-medium text-p-muted">
                  <span className="text-p-ink tabular-nums">0{i + 1}</span>
                  <span className="size-1 rounded-full bg-accent" />
                  {f.eyebrow}
                </p>
                <h3 className="heading mt-5 max-w-[14ch] text-[clamp(30px,3.2vw,48px)]">{f.title}</h3>
                <p className="mt-5 max-w-[44ch] text-[17px] leading-[1.55] text-p-muted">{f.text}</p>
              </div>
              <ul className="flex flex-col gap-2.5 border-t border-p-rule pt-6">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] font-medium tracking-[-0.01em]">
                    <span className="size-2 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[28px] bg-[#1b1b1b] p-6 md:min-h-[480px] md:p-12">
              <div className="dot-grid-dark absolute inset-0" />
              <div className="absolute inset-0 opacity-60">
                <Halftone variant={(["pulse", "grid", "rings"] as const)[i % 3]} color="rgba(255,255,255,.75)" spacing={11} maxRadius={2.6} speed={0.6} />
              </div>
              <Shot
                src={f.image.src}
                w={f.image.w}
                h={f.image.h}
                alt={f.image.alt}
                className={`relative ${f.wide ? "w-full max-w-[760px] rounded-[14px]" : "w-full max-w-[400px]"}`}
              />
            </div>
          </motion.article>
        ))}
      </section>

      {/* Everything else */}
      <section className="gutter mx-auto max-w-[1440px] pb-16 md:pb-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="heading max-w-[16ch] text-[clamp(32px,3.8vw,56px)]">
            And everything else <span className="text-p-muted">a store needs.</span>
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map((x, i) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.06 }}
              className="group rounded-tile bg-p-card p-7 transition-colors hover:bg-p-card-2"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-p-card-2 text-p-ink transition-colors group-hover:bg-accent group-hover:text-white">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {extraIcons[x.icon]}
                </svg>
              </span>
              <h3 className="mt-6 text-[21px] font-medium tracking-[-0.03em]">{x.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.5] text-p-muted">{x.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 border-t border-p-rule py-16 md:py-28">
        <div className="gutter mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[13px] font-medium text-p-muted">Pricing</p>
              <h2 className="heading max-w-[14ch] text-[clamp(36px,4.6vw,68px)]">
                Free forever. <span className="text-p-muted">Pro when you grow.</span>
              </h2>
            </div>
            <p className="max-w-[40ch] text-[16px] leading-[1.5] text-p-muted">
              The free plugin is complete on its own. Pro adds tools for wholesale, members-only and custom sign-up flows.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: i * 0.08 }}
                className={`relative flex flex-col overflow-hidden rounded-card p-8 ${p.featured ? "bg-[#161616] text-white" : "bg-p-card"}`}
              >
                {p.featured && (
                  <>
                    <div className="dot-grid-dark pointer-events-none absolute inset-0" />
                    <span className="absolute top-6 right-6 rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-white">Most stores pick this</span>
                  </>
                )}
                <h3 className="relative text-[24px] font-medium tracking-[-0.03em]">{p.name}</h3>
                <p className={`relative mt-1 text-[15px] ${p.featured ? "text-white/60" : "text-p-muted"}`}>{p.sites}</p>
                <p className="relative mt-10 flex items-baseline gap-1.5">
                  <span className="text-[64px] leading-none font-medium tracking-[-0.05em]">{p.price}</span>
                  <span className={`text-[15px] ${p.featured ? "text-white/60" : "text-p-muted"}`}>/ year</span>
                </p>
                <ul className={`relative mt-8 mb-10 flex flex-1 flex-col gap-3 border-t pt-6 ${p.featured ? "border-white/10" : "border-p-rule"}`}>
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-[15px] font-medium">
                      <span className="size-2 shrink-0 rounded-full bg-accent" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Pill
                  label="Join the waitlist"
                  sub="Pro launches soon"
                  tone={p.featured ? "accent" : "dark"}
                  href={logvia.waitlist(p.name)}
                  className={`relative ${p.featured ? "" : "!bg-p-ink !text-p-bg"}`}
                />
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-p-muted">Every plan includes a 14-day money-back guarantee. Prices in US dollars.</p>

          <div className="mt-14 overflow-x-auto rounded-card bg-p-card p-2">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <caption className="sr-only">Logvia Free and Pro compared</caption>
              <thead>
                <tr>
                  <th scope="col" className="p-5 text-[15px] font-medium text-p-muted">What you get</th>
                  <th scope="col" className="w-[120px] p-5 text-center text-[17px] font-medium">Free</th>
                  <th scope="col" className="w-[120px] p-5 text-center text-[17px] font-medium text-accent">Pro</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.label} className="border-t border-p-rule">
                    <td className="p-5 text-[15px]">{row.label}</td>
                    <td className="p-5"><Check on={row.free} /></td>
                    <td className="p-5"><Check on /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-p-rule py-16 md:py-28">
        <div className="gutter mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="mb-3 text-[13px] font-medium text-p-muted">FAQ</p>
            <h2 className="heading text-[clamp(36px,4.6vw,68px)]">
              Questions. <span className="text-p-muted">Answers.</span>
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-2xl bg-p-ink text-p-bg">
                <LogviaMark />
              </span>
              <p className="text-[15px] leading-snug text-p-muted">
                Something else?
                <br />
                <a href={`/${lang}/#contact`} className="font-medium text-p-ink underline decoration-accent underline-offset-4">Write to me</a>
              </p>
            </div>
          </div>
          <div className="border-t border-p-rule">
            {faq.map((item, i) => (
              <details key={item.q} className="group border-b border-p-rule" open={i === 0}>
                <summary className="flex items-center justify-between gap-6 py-6 text-[clamp(19px,1.6vw,23px)] font-medium tracking-[-0.025em]">
                  {item.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-p-card-2 transition-[rotate,background-color] duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-white">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-6 text-[16px] leading-[1.6] text-p-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
