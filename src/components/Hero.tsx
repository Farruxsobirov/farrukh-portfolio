"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { scrollToId, prefersReducedMotion } from "@/lib/scroll";
import Halftone from "./Halftone";
import { Pill } from "./ui";

gsap.registerPlugin(ScrollTrigger);

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const word = useRef<HTMLDivElement>(null);
  const wordWrap = useRef<HTMLDivElement>(null);

  // Fit the wordmark to the full container width.
  useIso(() => {
    const wrap = wordWrap.current;
    const el = word.current;
    if (!wrap || !el) return;
    const fit = () => {
      el.style.fontSize = "100px";
      const ratio = wrap.clientWidth / el.scrollWidth;
      el.style.fontSize = `${100 * ratio}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>("[data-letter]");
      const letterIn = gsap.utils.toArray<HTMLElement>("[data-letter-in]");
      const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      // Entrance once the intro shutters lift: each letter slides up into its slot
      gsap.set(letterIn, { yPercent: reduced ? 0 : 50 });
      gsap.set(reveal, { y: reduced ? 0 : 30, opacity: reduced ? 1 : 0 });
      const enter = () => {
        gsap.to(letterIn, { yPercent: 0, duration: 1.4, ease: "expo.out", stagger: 0.06 });
        gsap.to(reveal, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.08, delay: 0.25 });
      };
      if (document.documentElement.dataset.ready) enter();
      else window.addEventListener("intro:done", enter, { once: true });

      if (reduced) return;
      // Scrolling rolls every letter up to its twin below, one after another.
      // Scrolling back rolls them down again.
      gsap.to(letters, {
        yPercent: -50,
        ease: "power1.inOut",
        stagger: { each: 0.1, from: "start" },
        scrollTrigger: { trigger: el, start: "top top", end: "bottom 35%", scrub: 0.8 },
      });
      gsap.to("[data-hero-parallax]", {
        yPercent: -25,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-bg]", {
        scale: 1.15,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] flex-col overflow-clip bg-[linear-gradient(180deg,#8f8f8d_0%,#7a7a78_55%,#4a4a49_100%)] text-white"
    >
      <div data-hero-bg className="absolute inset-0 origin-[50%_35%]">
        <div className="dot-grid-dark absolute inset-0 opacity-60" />
        <div className="absolute inset-x-[-10%] top-[-12%] bottom-[8%]">
          <Halftone variant="blob" color="rgba(255,255,255,0.92)" spacing={9} speed={0.9} />
        </div>
      </div>

      <div data-hero-parallax className="gutter relative z-10 flex flex-1 flex-col justify-between gap-10 pt-28 md:pt-36">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="flex flex-col gap-4">
            <p data-reveal className="flex items-center gap-2 text-[14px] font-medium text-white/85">
              <span className="pulse-dot size-2 rounded-full bg-[#3ddc84]" /> {site.availability}
            </p>
            <p data-reveal className="flex items-baseline gap-2">
              <span className="text-[clamp(52px,6vw,84px)] leading-[0.9] font-medium tracking-[-0.055em]">50+</span>
              <span className="text-[clamp(20px,2vw,28px)] tracking-[-0.03em] text-white/80">/projects shipped</span>
            </p>
            <div data-reveal className="mt-2 flex flex-wrap gap-2">
              <Pill label="Let's talk" sub="Reply within 1 hour" onClick={() => scrollToId("contact")} />
              <Pill label="See my work" tone="ghostLight" onClick={() => scrollToId("work")} />
            </div>
          </div>
          <h1 data-reveal className="heading max-w-[17ch] text-[clamp(30px,3.6vw,52px)] md:justify-self-end">
            {site.headline.strong} <span className="text-white/55">{site.headline.soft}</span>
          </h1>
        </div>

        <div ref={wordWrap} className="relative pb-[2vw]" aria-label={site.name}>
          <div
            ref={word}
            aria-hidden
            className="flex w-max leading-[0.78] font-normal tracking-[-0.06em] whitespace-nowrap"
            style={{ fontSize: "16vw" }}
          >
            {site.wordmark.split("").map((l, i) => (
              <span key={i} className="block h-[0.8em] overflow-hidden">
                <span data-letter-in className="block">
                  <span data-letter className="flex flex-col will-change-transform">
                    <span className="block h-[0.8em] leading-[0.94]">{l}</span>
                    <span className="block h-[0.8em] leading-[0.94]">{l}</span>
                  </span>
                </span>
              </span>
            ))}
          </div>
          <div className="mt-[1.4vw] h-px bg-white/25" />
        </div>
      </div>
    </section>
  );
}
