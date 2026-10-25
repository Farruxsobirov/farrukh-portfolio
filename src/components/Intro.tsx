"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLenis, prefersReducedMotion } from "@/lib/scroll";
import { site } from "@/content/site";
import Logo from "./Logo";
import { useI18n } from "@/i18n/context";

const ease = [0.76, 0, 0.24, 1] as const;

// Four dark shutters that lift away once the page is ready.
export default function Intro() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const id = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(id);
    }
    window.scrollTo(0, 0);
    const lenisWait = setTimeout(() => getLenis()?.stop(), 0);
    const t0 = performance.now();
    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (performance.now() - t0) / 1100);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 160);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      clearTimeout(lenisWait);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (done) {
      getLenis()?.start();
      document.documentElement.dataset.ready = "1";
      window.dispatchEvent(new Event("intro:done"));
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div key="intro" className="fixed inset-0 z-[100] flex" exit={{ pointerEvents: "none" }} transition={{ duration: 1.1 }} aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-full flex-1 bg-dark"
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease, delay: i * 0.07 }}
            />
          ))}
          <motion.div
            className="absolute inset-0 flex items-end justify-between p-[var(--gutter)] text-white"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease }}
          >
            <span className="flex items-center gap-3 text-[15px] font-medium tracking-[-0.02em] text-white/70">
              <motion.span
                className="block text-white"
                animate={{ rotate: 180 }}
                transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
              >
                <Logo className="size-10" />
              </motion.span>
              {site.name} — {t.common.role}
            </span>
            <span className="text-[clamp(64px,12vw,180px)] leading-[0.8] font-medium tracking-[-0.06em] tabular-nums">
              {count}
              <span className="text-accent">%</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
