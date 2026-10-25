"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { projects, projectYears } from "@/content/site";
import { fmt, plural, useI18n } from "@/i18n/context";
import { scrollToId, prefersReducedMotion } from "@/lib/scroll";
import { icons } from "./ui";

gsap.registerPlugin(ScrollTrigger);

const loadCarousel = () => import("./Carousel3D");
const Carousel3D = dynamic(loadCarousel, { ssr: false });

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const ease = [0.22, 1, 0.36, 1] as const;

export default function Work() {
  const { lang, t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const dots = useRef<HTMLCanvasElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLParagraphElement>(null);
  const shadow = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [mounted, setMounted] = useState(false); // created early, kept alive
  const [active, setActive] = useState(false); // animating only while on screen

  useEffect(() => {
    const section = root.current;
    const cv = dots.current;
    if (!section || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduced = prefersReducedMotion();
    let w = 0;
    let h = 0;
    let lastD = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastD = -1;
      paint(progress.current);
    };

    // Light dots grow from the centre until they swallow the dark screen.
    const paint = (p: number) => {
      const d = reduced ? 1 : clamp01(p / 0.17);
      if (Math.abs(d - lastD) < 0.001) return;
      lastD = d;
      cv.style.opacity = d >= 1 ? "0" : "1";
      if (d >= 1) return;
      ctx.fillStyle = "#141414";
      ctx.fillRect(0, 0, w, h);
      const sp = 16;
      const maxR = sp * 0.74;
      const cx = w / 2;
      const cy = h / 2;
      const far = Math.hypot(cx, cy);
      ctx.fillStyle = "#f3f3f2";
      ctx.beginPath();
      for (let y = sp / 2; y < h + sp; y += sp) {
        for (let x = sp / 2; x < w + sp; x += sp) {
          const delay = (Math.hypot(x - cx, y - cy) / far) * 0.55;
          const t = clamp01((d - delay) / 0.45);
          const r = t * t * maxR;
          if (r < 0.3) continue;
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();
    };

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        progress.current = self.progress;
        paint(self.progress);
        const tIn = clamp01((self.progress - 0.14) / 0.08);
        if (title.current) {
          title.current.style.opacity = String(tIn);
          title.current.style.transform = `scale(${0.92 + tIn * 0.08})`;
        }
        if (shadow.current) shadow.current.style.opacity = String(clamp01((self.progress - 0.24) / 0.15));
        if (hint.current) hint.current.style.opacity = String(clamp01((self.progress - 0.4) / 0.1) * (1 - clamp01((self.progress - 0.92) / 0.06)));
      },
    });

    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: "20% 0px" });
    io.observe(section);
    // Mount the 3D scene well before the visitor reaches it…
    const near = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setMounted(true);
          near.disconnect();
        }
      },
      { rootMargin: "250% 0px" },
    );
    near.observe(section);
    // …and fetch three.js + screenshots in the background once the page is idle.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = (cb: () => void) => (hasIdle ? window.requestIdleCallback(cb, { timeout: 3000 }) : setTimeout(cb, 1500));
    const idleId = idle(() => {
      loadCarousel();
      setMounted(true);
    });
    window.addEventListener("resize", resize);
    resize();
    return () => {
      st.kill();
      io.disconnect();
      near.disconnect();
      if (hasIdle) window.cancelIdleCallback(idleId as number);
      else clearTimeout(idleId as ReturnType<typeof setTimeout>);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <section id="work" data-theme="light" ref={root} className="relative h-[460vh] bg-bg">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -top-1/3 left-1/2 size-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.9),transparent_60%)]" />

          <div ref={title} className="absolute inset-0 grid place-items-center opacity-0" style={{ transformOrigin: "50% 50%" }}>
            <h2 className="heading text-center text-[clamp(40px,6vw,92px)]">
              {t.work.titleA}
              <br />
              <span className="sweep">{t.work.titleB}</span>
            </h2>
          </div>

          <div
            ref={shadow}
            aria-hidden
            className="pointer-events-none absolute bottom-[12%] left-1/2 h-[22vh] w-[70vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,0,0,.16),transparent)] opacity-0 blur-2xl"
          />
          {mounted && (
            <Carousel3D projects={projects} progress={progress} active={active} nextText={t.work.nextCard} onNext={() => scrollToId("contact")} />
          )}

          <p ref={hint} className="pointer-events-none absolute inset-x-0 bottom-8 text-center text-[13px] font-medium text-muted opacity-0">
            {t.work.hint}
          </p>

          <canvas ref={dots} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />
        </div>
      </section>

      <section data-theme="light" aria-labelledby="work-list" className="gutter relative bg-bg pt-12 pb-16 md:pt-10 md:pb-40">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
          <h2 id="work-list" className="heading text-[clamp(30px,3.4vw,48px)]">
            {t.work.listTitle} <span className="text-soft">{projectYears}</span>
          </h2>
          <p className="text-[14px] text-muted">{plural(lang, projects.length, t.work.count)}</p>
        </div>
        <ul className="grid gap-x-4 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease, delay: (i % 2) * 0.1 }}
            >
              <a href={p.url} target="_blank" rel="noreferrer" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-card bg-[#e6e6e4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={fmt(t.work.siteAlt, { name: p.name })}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover object-left-top transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 rotate-[-45deg]">
                    {icons.external}
                  </span>
                </div>
                <div className="mt-5 grid gap-3 px-1 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-[24px] leading-tight font-medium tracking-[-0.03em]">
                      {p.name} <span className="text-soft">— {t.work.projects[p.slug]?.kind}</span>
                    </h3>
                    <p className="mt-2 max-w-[56ch] text-[15px] leading-[1.45] text-muted">{t.work.projects[p.slug]?.summary}</p>
                  </div>
                  <p className="text-[14px] text-soft tabular-nums">{p.year}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5 px-1">
                  {p.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-rule px-3 py-1 text-[12px] font-medium text-ink/80">
                      {t.work.tags[tag] ?? tag}
                    </li>
                  ))}
                </ul>
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}
