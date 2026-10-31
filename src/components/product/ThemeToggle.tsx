"use client";

import { useSyncExternalStore } from "react";

type Mode = "light" | "dark";

function current(): Mode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.mode === "dark" ? "dark" : "light";
}

// Every toggle on the page follows the <html data-mode> attribute.
function subscribe(onChange: () => void) {
  const watch = new MutationObserver(onChange);
  watch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode"] });
  return () => watch.disconnect();
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const mode = useSyncExternalStore(subscribe, current, () => "light" as Mode);

  const toggle = () => {
    const next: Mode = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem("mode", next);
    } catch {}
  };

  const dark = mode === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className={`press relative grid size-11 place-items-center overflow-hidden rounded-full border border-p-rule bg-p-card text-p-ink transition-colors hover:border-p-ink/40 ${className}`}
    >
      <span
        className="absolute inset-0 grid place-items-center transition-[translate,rotate,opacity] duration-500 ease-[var(--ease-snap)]"
        style={{ translate: dark ? "0 -120%" : "0 0", rotate: dark ? "-90deg" : "0deg", opacity: dark ? 0 : 1 }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
        </svg>
      </span>
      <span
        className="absolute inset-0 grid place-items-center transition-[translate,rotate,opacity] duration-500 ease-[var(--ease-snap)]"
        style={{ translate: dark ? "0 0" : "0 120%", rotate: dark ? "0deg" : "90deg", opacity: dark ? 1 : 0 }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor">
          <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" />
        </svg>
      </span>
    </button>
  );
}
