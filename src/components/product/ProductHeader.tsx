"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { locales, localeNames, LOCALE_COOKIE } from "@/i18n/config";
import { site } from "@/content/site";
import { logvia } from "@/content/logvia";
import Logo from "../Logo";
import { Roll } from "../ui";
import ThemeToggle from "./ThemeToggle";

const ease = [0.22, 1, 0.36, 1] as const;
type MenuId = "products" | "resources" | null;

export function LogviaMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** Language pills that keep the visitor on the same page. */
function ProductLang({ compact }: { compact?: boolean }) {
  const { lang } = useI18n();
  const pathname = usePathname() || `/${lang}/`;
  const rest = pathname.replace(/^\/(en|uz|ru)(?=\/|$)/, "");
  return (
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}${rest || "/"}`}
          hrefLang={l}
          lang={l}
          title={localeNames[l].full}
          aria-current={l === lang ? "true" : undefined}
          onClick={() => {
            try {
              document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
            } catch {}
          }}
          className={`press grid h-9 place-items-center rounded-full px-2.5 text-[12px] font-semibold tracking-[0.02em] transition-colors ${
            l === lang ? "bg-p-ink text-p-bg" : "text-p-muted hover:text-p-ink"
          } ${compact ? "min-w-9" : "min-w-10"}`}
        >
          {localeNames[l].short}
        </a>
      ))}
    </nav>
  );
}

export default function ProductHeader() {
  const { lang } = useI18n();
  const base = `/${lang}`;
  const [menu, setMenu] = useState<MenuId>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverAt = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const openSoon = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu((m) => {
      if (m !== id) hoverAt.current = Date.now();
      return id;
    });
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 160);
  };

  const links = {
    overview: `${base}/logvia/`,
    pricing: `${base}/logvia/#pricing`,
    docs: `${base}/logvia/docs/`,
    changelog: `${base}/logvia/changelog/`,
    contact: `${base}/#contact`,
    portfolio: `${base}/`,
    work: `${base}/#work`,
    terms: `${base}/terms/`,
    privacy: `${base}/privacy/`,
    refund: `${base}/refund/`,
  };

  const trigger = (id: Exclude<MenuId, null>, label: string) => (
    <button
      type="button"
      aria-expanded={menu === id}
      aria-controls={`mega-${id}`}
      // A mouse click right after hovering open should not close the menu again.
      onClick={() => setMenu((m) => (m === id && Date.now() - hoverAt.current > 500 ? null : id))}
      onPointerEnter={(e) => e.pointerType === "mouse" && openSoon(id)}
      className={`flex h-10 items-center gap-1.5 rounded-full px-4 text-[15px] font-medium tracking-[-0.01em] transition-colors ${
        menu === id ? "bg-p-card-2 text-p-ink" : "text-p-ink/80 hover:text-p-ink"
      }`}
    >
      {label}
      <Chevron open={menu === id} />
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || menu ? "border-b border-p-rule bg-p-bg/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      onPointerLeave={(e) => e.pointerType === "mouse" && closeSoon()}
    >
      <div className="gutter mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4">
        <a href={links.portfolio} className="group flex items-center gap-3 text-p-ink" aria-label={`${site.name}, portfolio`}>
          <span className="block transition-transform duration-700 ease-[var(--ease-snap)] group-hover:rotate-90">
            <Logo className="size-9" />
          </span>
          <span className="hidden text-[16px] font-medium tracking-[-0.02em] sm:block">{site.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {trigger("products", "Products")}
          {trigger("resources", "Resources")}
          <a href={links.pricing} onPointerEnter={() => closeSoon()} className="group flex h-10 items-center rounded-full px-4 text-[15px] font-medium tracking-[-0.01em] text-p-ink/80 hover:text-p-ink">
            <Roll>Pricing</Roll>
          </a>
          <a href={links.work} onPointerEnter={() => closeSoon()} className="group flex h-10 items-center rounded-full px-4 text-[15px] font-medium tracking-[-0.01em] text-p-ink/80 hover:text-p-ink">
            <Roll>Portfolio</Roll>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ProductLang />
          </div>
          <ThemeToggle />
          <a
            href={links.pricing}
            className="group press hidden h-11 items-center gap-2 rounded-full bg-accent pr-5 pl-1.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-ink sm:inline-flex"
          >
            <span className="grid size-8 place-items-center rounded-full bg-white text-accent transition-transform duration-300 ease-[var(--ease-snap)] group-hover:rotate-[-45deg]">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <Roll>Get Logvia</Roll>
          </a>
          <button
            type="button"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => setMobile((m) => !m)}
            className="press grid size-11 place-items-center rounded-full bg-p-ink text-p-bg lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden>
              {mobile ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop mega menus */}
      <AnimatePresence>
        {menu && (
          <motion.div
            key={menu}
            id={`mega-${menu}`}
            initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.32, ease }}
            onPointerEnter={() => openSoon(menu)}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="gutter mx-auto max-w-[1440px] pt-2">
              <div className="rounded-[32px] border border-p-rule bg-p-card p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,.45)]">
                {menu === "products" ? (
                  <div className="grid grid-cols-[1.25fr_1fr_1.1fr] gap-3">
                    <div className="rounded-[24px] p-6">
                      <a href={links.overview} className="group flex items-start gap-4">
                        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-p-ink text-p-bg">
                          <LogviaMark />
                        </span>
                        <span>
                          <span className="flex items-center gap-2 text-[20px] font-medium tracking-[-0.03em]">
                            <Roll>Logvia</Roll>
                            <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[11px] font-semibold text-accent">v{logvia.version}</span>
                          </span>
                          <span className="mt-1 block text-[14px] leading-snug text-p-muted">Login, registration and Google sign-in for WooCommerce</span>
                        </span>
                      </a>
                      <div className="mt-6 grid grid-cols-2 gap-1 border-t border-p-rule pt-4">
                        {[
                          ["Overview", links.overview],
                          ["Pricing", links.pricing],
                          ["Documentation", links.docs],
                          ["Changelog", links.changelog],
                        ].map(([label, href]) => (
                          <a key={label} href={href} className="group flex items-center gap-2 rounded-xl px-2 py-2 text-[15px] font-medium text-p-ink/85 hover:bg-p-card-2 hover:text-p-ink">
                            <span className="size-1.5 rounded-full bg-accent" />
                            <Roll>{label}</Roll>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-[24px] border border-dashed border-p-rule p-6">
                      <div>
                        <span className="grid size-12 place-items-center rounded-2xl border border-dashed border-p-rule text-p-muted">
                          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                        <p className="mt-4 text-[18px] font-medium tracking-[-0.02em]">Plugin number two</p>
                        <p className="mt-1 text-[14px] leading-snug text-p-muted">In the works. Tell me what your store needs next.</p>
                      </div>
                      <a href={links.contact} className="group mt-6 inline-flex text-[14px] font-medium text-p-ink underline decoration-accent underline-offset-4">
                        <Roll>Suggest a plugin</Roll>
                      </a>
                    </div>
                    <a href={links.changelog} className="group relative min-h-[230px] overflow-hidden rounded-[24px] bg-[#1b1b1b] p-6 text-white">
                      <div className="dot-grid-dark absolute inset-0" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/logvia/popup.webp"
                        alt=""
                        width={988}
                        height={1251}
                        className="absolute -right-6 -bottom-24 w-[58%] rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,.9)] transition-transform duration-700 ease-[var(--ease-snap)] group-hover:-translate-y-3"
                      />
                      <span className="relative inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[12px] font-medium">New release</span>
                      <p className="relative mt-4 max-w-[13ch] text-[22px] leading-[1.1] font-medium tracking-[-0.03em]">Logvia {logvia.version} is here.</p>
                      <p className="relative mt-2 text-[14px] text-white/60">See what changed</p>
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { title: "Documentation", text: "Set up Logvia step by step.", href: links.docs },
                      { title: "Changelog", text: "Every release and what changed.", href: links.changelog },
                      { title: "Support forum", text: "Free help on WordPress.org.", href: logvia.support, external: true },
                      { title: "Contact", text: "Pro, licences and ideas.", href: links.contact },
                      { title: "Portfolio", text: "Websites I have built for clients.", href: links.work },
                      { title: "Legal", text: "Terms, privacy and refunds.", href: links.terms },
                    ].map((r) => (
                      <a
                        key={r.title}
                        href={r.href}
                        {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="group rounded-[24px] p-6 transition-colors hover:bg-p-card-2"
                      >
                        <span className="flex items-center gap-2 text-[18px] font-medium tracking-[-0.02em]">
                          <span className="size-1.5 rounded-full bg-accent" />
                          <Roll>{r.title}</Roll>
                        </span>
                        <span className="mt-1.5 block pl-3.5 text-[14px] text-p-muted">{r.text}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone and tablet menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto border-t border-p-rule bg-p-bg lg:hidden"
          >
            <div className="gutter flex flex-col gap-8 py-8">
              {[
                { title: "Logvia", items: [["Overview", links.overview], ["Pricing", links.pricing], ["Documentation", links.docs], ["Changelog", links.changelog]] },
                { title: "More", items: [["Support forum", logvia.support], ["Contact", links.contact], ["Portfolio", links.work]] },
              ].map((group, gi) => (
                <div key={group.title}>
                  <p className="mb-3 text-[13px] font-medium text-p-muted">{group.title}</p>
                  <ul className="flex flex-col">
                    {group.items.map(([label, href], i) => (
                      <motion.li
                        key={label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 + (gi * 4 + i) * 0.035, duration: 0.4, ease }}
                      >
                        <a href={href} onClick={() => setMobile(false)} className="block border-b border-p-rule py-3 text-[26px] font-medium tracking-[-0.03em]">
                          {label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4">
                <ProductLang compact />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
