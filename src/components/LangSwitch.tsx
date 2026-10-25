"use client";

import { locales, localeNames, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/context";
import { sound } from "@/lib/sound";

function rememberLocale(next: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  } catch {}
}

// Three pills: EN / UZ / RU. Remembers the choice in a cookie so the proxy
// sends returning visitors straight to their language.
export default function LangSwitch({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, t } = useI18n();

  const choose = (e: React.MouseEvent<HTMLAnchorElement>, next: Locale) => {
    rememberLocale(next);
    sound.tick(1700);
    if (next === lang) e.preventDefault();
  };

  const base = tone === "dark" ? "border-white/15 text-white/70 hover:text-white" : "border-ink/15 text-ink/60 hover:text-ink";
  const active = tone === "dark" ? "bg-white text-ink border-white" : "bg-ink text-white border-ink";

  return (
    <nav aria-label={t.common.language} className="flex items-center gap-1.5">
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "true" : undefined}
          title={localeNames[l].full}
          onClick={(e) => choose(e, l)}
          className={`press grid h-9 min-w-11 place-items-center rounded-full border px-3 text-[12px] font-semibold tracking-[0.02em] transition-colors duration-200 ${
            l === lang ? active : base
          }`}
        >
          {localeNames[l].short}
        </a>
      ))}
    </nav>
  );
}
