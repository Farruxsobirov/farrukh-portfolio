"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/content/site";
import { scrollToId, getLenis } from "@/lib/scroll";
import { sound } from "@/lib/sound";
import { icons, Roll } from "./ui";
import { Petals, Centre } from "./Logo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.32, 0.72, 0, 1] as const;

function RoundButton({
  label,
  onClick,
  children,
  accent,
  active,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  accent?: boolean;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`press grid size-12 place-items-center rounded-full border transition-colors duration-200 ${
        accent
          ? "border-accent bg-accent text-white hover:bg-accent-ink"
          : "border-white/10 bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]"
      }`}
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const soundOn = useSyncExternalStore(sound.subscribe, () => sound.enabled, () => false);

  useEffect(() => {
    sound.restore();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The mark turns slowly as the page scrolls.
    const tween = gsap.to("[data-logo-spin]", {
      rotate: 540,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 1.2 },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // Switch the logo between white and black depending on the section behind it.
  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]")).map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 48px",
        end: "bottom 48px",
        onToggle: (self) => {
          if (self.isActive) setTheme(el.dataset.theme === "light" ? "light" : "dark");
        },
      }),
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    sound.tick(1400);
    setOpen(false);
    setTimeout(() => scrollToId(id), 180);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => go("top")}
        aria-label={`${site.name}, back to top`}
        className={`group press fixed top-4 left-[var(--gutter)] z-50 size-12 transition-colors duration-500 md:top-6 ${
          theme === "dark" ? "text-white" : "text-ink"
        }`}
      >
        <span data-logo-spin className="relative block size-full">
          <span className="block size-full transition-transform duration-700 ease-[var(--ease-snap)] group-hover:rotate-90">
            <Petals className="size-full" />
          </span>
          <Centre className="absolute inset-0 size-full" />
        </span>
      </button>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between p-[var(--gutter)] pt-5 md:pt-7">
        <span />
        <nav className="pointer-events-auto relative flex items-center gap-2" aria-label="Quick actions">
          <RoundButton label="Contact" accent onClick={() => go("contact")}>
            {icons.mail}
          </RoundButton>
          <RoundButton label={soundOn ? "Turn sound off" : "Turn sound on"} active={soundOn} onClick={() => sound.toggle()}>
            {soundOn ? icons.soundOn : icons.soundOff}
          </RoundButton>
          <RoundButton
            label="Menu"
            active={open}
            onClick={() => {
              sound.tick(1200);
              setOpen((o) => !o);
            }}
          >
            {icons.menu}
          </RoundButton>

          <AnimatePresence>
            {open && (
              <motion.div
                key="menu"
                role="dialog"
                aria-label="Menu"
                initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.7, filter: "blur(6px)" }}
                transition={{ duration: 0.38, ease }}
                style={{ transformOrigin: "calc(100% - 24px) 24px" }}
                className="absolute top-0 right-0 w-[min(340px,calc(100vw-32px))] rounded-[28px] border border-white/10 bg-[#202020] p-5 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[13px] text-white/60">Menu</span>
                  <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="press grid size-8 place-items-center rounded-full text-white/70 hover:text-white">
                    {icons.close}
                  </button>
                </div>
                <ul className="flex flex-col">
                  {nav.map((n, i) => (
                    <motion.li
                      key={n.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 + i * 0.035, duration: 0.4, ease }}
                    >
                      <button
                        type="button"
                        onClick={() => go(n.id)}
                        onMouseEnter={() => sound.tick(2200 + i * 120)}
                        className="group flex w-full items-baseline gap-5 rounded-xl px-1 py-2.5 text-left"
                      >
                        <span className="w-5 text-[12px] text-white/45 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[19px] font-medium tracking-[-0.02em]">
                          <Roll>{n.label}</Roll>
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-[12px] text-white/60">
                  <span className="pulse-dot size-2 rounded-full bg-[#3ddc84]" />
                  {site.availability}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[3px]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
