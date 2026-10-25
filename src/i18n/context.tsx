"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Dict } from "./dictionaries/en";

type I18n = { lang: Locale; t: Dict };

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ lang, dict, children }: { lang: Locale; dict: Dict; children: ReactNode }) {
  return <I18nContext.Provider value={{ lang, t: dict }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

/** Replace {name}-style placeholders. */
export function fmt(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

/** Pick the right plural form for a count, e.g. 1 проект / 2 проекта / 6 проектов. */
export function plural(lang: Locale, n: number, forms: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }) {
  const rule = new Intl.PluralRules(lang).select(n);
  return fmt(forms[rule] ?? forms.other, { n });
}
