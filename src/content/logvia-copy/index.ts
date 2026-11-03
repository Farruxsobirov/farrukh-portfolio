import type { Locale } from "@/i18n/config";
import { en, type LogviaCopy } from "./en";
import { ru } from "./ru";
import { uz } from "./uz";

const copies: Record<Locale, LogviaCopy> = { en, uz, ru };

export function logviaCopy(lang: string): LogviaCopy {
  return copies[lang as Locale] ?? en;
}

const months: Record<Locale, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  uz: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"],
  ru: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
};

/** "2026-11-03" → "3 November 2026" / "3-noyabr, 2026" / "3 ноября 2026". */
export function formatDate(iso: string, lang: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const l = (lang in months ? lang : "en") as Locale;
  const month = months[l][m - 1];
  return l === "uz" ? `${d}-${month}, ${y}` : `${d} ${month} ${y}`;
}

export type { LogviaCopy };
