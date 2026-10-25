import type { Locale } from "../config";
import { en, type Dict } from "./en";
import { uz } from "./uz";
import { ru } from "./ru";

const dictionaries: Record<Locale, Dict> = { en, uz, ru };

export const getDictionary = (lang: Locale): Dict => dictionaries[lang];
export type { Dict };
