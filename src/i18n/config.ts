export const locales = ["en", "uz", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { short: string; full: string; og: string }> = {
  en: { short: "EN", full: "English", og: "en_US" },
  uz: { short: "UZ", full: "O‘zbekcha", og: "uz_UZ" },
  ru: { short: "RU", full: "Русский", og: "ru_RU" },
};

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const LOCALE_COOKIE = "lang";
