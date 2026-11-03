"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useI18n } from "@/i18n/context";
import { sound } from "@/lib/sound";
import { icons } from "../ui";

// Same switch as on the portfolio: off by default, remembered per browser.
export default function SoundToggle({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const on = useSyncExternalStore(sound.subscribe, () => sound.enabled, () => false);

  useEffect(() => {
    sound.restore();
    // Soft ticks on links and buttons across the product pages.
    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !sound.enabled) return;
      const el = (e.target as HTMLElement | null)?.closest("a, button, summary");
      const from = (e.relatedTarget as HTMLElement | null)?.closest("a, button, summary");
      if (el && el !== from && el.closest(".pp")) sound.tick(2400);
    };
    const onClick = (e: MouseEvent) => {
      if (!sound.enabled) return;
      const el = (e.target as HTMLElement | null)?.closest("a, button, summary");
      if (el && el.closest(".pp") && !el.hasAttribute("data-sound-self")) sound.tick(1400);
    };
    document.addEventListener("pointerover", onOver);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <button
      type="button"
      data-sound-self
      onClick={() => sound.toggle()}
      aria-label={on ? t.header.soundOff : t.header.soundOn}
      aria-pressed={on}
      title={on ? t.header.soundOff : t.header.soundOn}
      className={`press grid size-11 place-items-center rounded-full border transition-colors ${
        on ? "border-accent bg-accent text-white" : "border-p-rule bg-p-card text-p-ink hover:border-p-ink/40"
      } ${className}`}
    >
      {on ? icons.soundOn : icons.soundOff}
    </button>
  );
}
