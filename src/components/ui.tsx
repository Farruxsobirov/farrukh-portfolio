"use client";

import type { ReactNode } from "react";
import { sound } from "@/lib/sound";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Roll({ children }: { children: ReactNode }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}

type Tone = "accent" | "ghost" | "ghostLight" | "light" | "dark";

const tones: Record<Tone, { wrap: string; dot: string }> = {
  accent: { wrap: "bg-accent text-white", dot: "bg-white text-accent" },
  ghost: { wrap: "border border-ink/20 text-ink", dot: "bg-ink text-white" },
  ghostLight: { wrap: "border border-white/30 text-white", dot: "bg-white text-ink" },
  light: { wrap: "bg-white text-ink", dot: "bg-ink text-white" },
  dark: { wrap: "bg-ink text-white", dot: "bg-white text-ink" },
};

type PillProps = {
  label: string;
  sub?: string;
  tone?: Tone;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit";
  className?: string;
};

export function Pill({ label, sub, tone = "accent", href, onClick, external, type = "button", className = "" }: PillProps) {
  const t = tones[tone];
  const inner = (
    <>
      <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-[var(--ease-snap)] group-hover:rotate-[-45deg] ${t.dot}`}>
        <Arrow className="size-4" />
      </span>
      <span className="flex flex-col items-start pr-3 text-left">
        <span className="text-[17px] leading-[1.1] font-medium tracking-[-0.02em]">
          <Roll>{label}</Roll>
        </span>
        {sub && <span className="text-[11px] leading-tight font-medium opacity-80">{sub}</span>}
      </span>
    </>
  );
  const cls = `group press inline-flex h-[52px] items-center gap-3 rounded-full p-[6px] ${t.wrap} ${className}`;
  const handle = () => {
    sound.tick();
    onClick?.();
  };
  if (href) {
    return (
      <a href={href} onClick={handle} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={handle} className={cls}>
      {inner}
    </button>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-[13px] font-medium tracking-[-0.01em] ${dark ? "text-white/70" : "text-muted"}`}>
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export const icons = {
  mail: (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M4 5h16a2 2 0 0 1 2 2v.4l-10 6.1L2 7.4V7a2 2 0 0 1 2-2Zm-2 4.7 10 6.1 10-6.1V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.7Z" />
    </svg>
  ),
  soundOn: (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M3 9.5h3.6L11 5.6a.7.7 0 0 1 1.1.5v11.8a.7.7 0 0 1-1.1.5l-4.4-3.9H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
      <path d="M15.3 8.6a4.6 4.6 0 0 1 0 6.8M18 6a8.3 8.3 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  ),
  soundOff: (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M3 9.5h3.6L11 5.6a.7.7 0 0 1 1.1.5v11.8a.7.7 0 0 1-1.1.5l-4.4-3.9H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
      <path d="m16 9.5 5 5m0-5-5 5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <circle cx="7.5" cy="7.5" r="2.4" />
      <circle cx="16.5" cy="7.5" r="2.4" />
      <circle cx="7.5" cy="16.5" r="2.4" />
      <circle cx="16.5" cy="16.5" r="2.4" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" className="size-[16px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" className="size-[14px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
};
