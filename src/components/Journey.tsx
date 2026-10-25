"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journeyYears } from "@/content/site";
import { fmt, useI18n } from "@/i18n/context";
import { prefersReducedMotion } from "@/lib/scroll";
import { sound } from "@/lib/sound";

gsap.registerPlugin(ScrollTrigger);

const START_YEAR = 2023;
const TOTAL_MONTHS = 46; // Jan 2023 -> Oct 2026
const TICKS = 4; // rows per month
const ROWS = TOTAL_MONTHS * TICKS;

// Scroll progress -> ruler row (piecewise so each chapter gets its share)
const KEY_P = [0, 0.24, 0.48, 0.72, 1];
const KEY_R = [0, 12 * TICKS, 24 * TICKS, ROWS - 1, ROWS - 1];
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

function rowAt(p: number) {
  for (let k = 0; k < KEY_P.length - 1; k++) {
    if (p <= KEY_P[k + 1]) {
      const t = (p - KEY_P[k]) / (KEY_P[k + 1] - KEY_P[k]);
      return lerp(KEY_R[k], KEY_R[k + 1], smooth(clamp01(t)));
    }
  }
  return ROWS - 1;
}

function stepAt(p: number) {
  if (p < 0.24) return 0;
  if (p < 0.48) return 1;
  if (p < 0.73) return 2;
  return 3;
}

const ease = [0.22, 1, 0.36, 1] as const;

function Mask({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        variants={{ in: { y: "0%", opacity: 1 }, past: { y: "-105%", opacity: 0 }, future: { y: "105%", opacity: 0 } }}
        transition={{ duration: 0.8, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Journey() {
  const { t } = useI18n();
  const MONTHS = t.journey.months;
  const monthLabel = t.journey.monthLabel;
  const statement = t.journey.statement.split(" ");
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const words = useRef<HTMLSpanElement[]>([]);
  const target = useRef(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const section = root.current;
    const cv = canvas.current;
    if (!section || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduced = prefersReducedMotion();
    const family = getComputedStyle(document.body).fontFamily;

    let current = 0;
    let w = 0;
    let h = 0;
    let raf = 0;
    let lastStep = 0;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      w = r.width;
      h = r.height;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(current);
    };

    const dotsRow = (xs: number, y: number, len: number, sp: number, thick: number, rad: number) => {
      for (let k = 0; k < thick; k++) {
        const yy = y + (k - (thick - 1) / 2) * 3.4;
        for (let d = 0; d < len; d++) {
          const x = xs + d * sp;
          ctx.moveTo(x + rad, yy);
          ctx.arc(x, yy, rad, 0, Math.PI * 2);
        }
      }
    };

    const draw = (p: number) => {
      if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const idx = rowAt(p);
      const morph = smooth(clamp01((p - 0.72) / 0.14));
      const gap = Math.max(14, Math.min(20, h / 42));
      const cy = h * 0.5;
      const narrow = w < 520;
      const x0 = narrow ? w * 0.3 : w * 0.42;
      const dotGap = 6;
      const fade = 1 - morph;
      ctx.font = `500 11px ${family}`;
      ctx.textBaseline = "middle";

      // 1. The calendar ruler
      if (fade > 0.01) {
        const first = Math.max(0, Math.floor(idx - cy / gap) - 2);
        const last = Math.min(ROWS - 1, Math.ceil(idx + (h - cy) / gap) + 2);
        for (let i = first; i <= last; i++) {
          // rows slide upward and squeeze together as the ruler fades out
          const y = cy + (i - idx) * gap * (1 - morph * 0.6) - morph * h * 0.18;
          if (y < -10 || y > h + 10) continue;
          const dn = Math.abs(y - cy) / (h * 0.5);
          const inten = Math.max(0, 1 - dn);
          const month = Math.floor(i / TICKS);
          const isMonth = i % TICKS === 0;
          const isYear = isMonth && month % 12 === 0;
          const active = Math.abs(i - idx) < 0.5;
          let len = 9;
          if (isMonth) len = 15;
          if (isYear) len = 24;
          if (active) len = 32;
          const thick = 1 + Math.floor(Math.pow(inten, 1.6) * 3);
          const rad = 0.75 + inten * 1.25;
          const alpha = (0.18 + inten * 0.82) * fade;
          ctx.fillStyle = active ? `rgba(254,71,1,${alpha})` : `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          dotsRow(x0, y, len, dotGap, thick, rad);
          ctx.fill();
          if (isMonth && inten > 0.08) {
            const yr = START_YEAR + Math.floor(month / 12);
            ctx.fillStyle = `rgba(255,255,255,${(isYear ? 0.95 : 0.55) * inten * fade})`;
            ctx.textAlign = "right";
            ctx.fillText(`${MONTHS[month % 12]} ${yr}`, x0 - (narrow ? 18 : 40), y);
          }
        }
        const monthsIn = Math.floor(idx / TICKS) + 1;
        ctx.fillStyle = `rgba(255,255,255,${0.6 * fade})`;
        ctx.textAlign = "left";
        ctx.fillText(fmt(monthLabel, { n: monthsIn }), x0 + 32 * dotGap + 18, cy);
      }

      // 2. The road: rows fan out in perspective and keep travelling toward you
      if (morph > 0.01) {
        const N = 22;
        const phase = (p * 26) % 1;
        const cx = w * 0.5;
        for (let k = 0; k < N; k++) {
          const t = (k + phase) / N;
          const reveal = clamp01(morph * 1.6 - (1 - t) * 0.6);
          if (reveal <= 0) continue;
          const y = h * 0.1 + t * t * h * 0.98;
          const sp = 2.4 + t * 7.5;
          const len = Math.round(6 + t * (narrow ? 34 : 46));
          const thick = 1 + Math.floor(t * 3.2);
          const rad = 0.55 + t * 1.9;
          ctx.fillStyle = `rgba(255,255,255,${(0.15 + 0.85 * Math.sqrt(t)) * reveal})`;
          ctx.beginPath();
          dotsRow(cx - ((len - 1) * sp) / 2, y, len, sp, thick, rad);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      current += (target.current - current) * 0.12;
      if (Math.abs(target.current - current) < 0.0002) current = target.current;
      draw(current);

      const s = stepAt(current);
      if (s !== lastStep) {
        lastStep = s;
        setStep(s);
        sound.tick(1600 + s * 200);
      }
      const k = clamp01((current - 0.75) / 0.18) * words.current.length;
      words.current.forEach((el, i) => {
        if (!el) return;
        const on = i < k;
        const isAccent = el.dataset.accent === "1";
        el.style.color = on ? (isAccent ? "var(--accent)" : "#fff") : "rgba(255,255,255,0.22)";
      });
      raf = requestAnimationFrame(loop);
    };

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        target.current = self.progress;
        if (reduced) {
          current = self.progress;
        }
      },
      onToggle: (self) => {
        running = self.isActive;
        cancelAnimationFrame(raf);
        if (running) raf = requestAnimationFrame(loop);
        else draw(current);
      },
    });

    const ro = new ResizeObserver(resize);
    ro.observe(cv);
    resize();

    return () => {
      st.kill();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [MONTHS, monthLabel]);

  return (
    <section id="journey" data-theme="dark" ref={root} className="relative h-[520vh] bg-dark text-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="dot-grid-dark absolute inset-0" />
        <div className="pointer-events-none absolute top-[-20%] left-[30%] size-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,.75),transparent_60%)]" />
        <div className="pointer-events-none absolute right-[-20%] bottom-[-30%] size-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.06),transparent_60%)]" />

        <canvas ref={canvas} aria-hidden className="absolute inset-y-0 left-0 h-full w-full opacity-[0.18] md:w-1/2 md:opacity-100" />

        <div className="gutter relative z-10 grid h-full md:grid-cols-2">
          <div className="hidden md:block" />
          <div className="flex flex-col justify-center pt-16">
            <div className="relative min-h-[300px] md:min-h-[340px]">
              {t.journey.steps.map((st, i) => (
                <motion.div
                  key={journeyYears[i]}
                  className="absolute inset-x-0 top-0 max-w-[30rem]"
                  initial={false}
                  animate={step === i ? "in" : step > i ? "past" : "future"}
                  aria-hidden={step !== i}
                >
                  <motion.p
                    variants={{ in: { opacity: 1 }, past: { opacity: 0 }, future: { opacity: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="mb-4 flex items-center gap-2 text-[14px] font-medium text-white/80"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                    {t.journey.step} {String(i + 1).padStart(2, "0")} · {journeyYears[i]}
                  </motion.p>
                  <h3 className="heading text-[clamp(34px,4vw,58px)]">
                    <Mask>{st.title}</Mask>
                  </h3>
                  <p className="mt-5 text-[clamp(16px,1.35vw,20px)] leading-[1.4] text-white/60">
                    <Mask delay={0.06}>{st.text}</Mask>
                  </p>
                </motion.div>
              ))}
              <motion.p
                className="heading absolute inset-x-0 top-0 max-w-[16ch] text-[clamp(34px,3.8vw,56px)]"
                initial={false}
                animate={step === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease }}
                aria-hidden={step !== 3}
              >
                {statement.map((wd, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      if (el) words.current[i] = el;
                    }}
                    data-accent={wd === t.journey.accent ? "1" : undefined}
                    className="transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    {wd}{" "}
                  </span>
                ))}
              </motion.p>
            </div>

            <div className="mt-12 flex gap-1.5" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === step ? "w-10 bg-accent" : "w-4 bg-white/20"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
