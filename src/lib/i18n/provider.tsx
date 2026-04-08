"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Locale, Translations } from "./index";
import mk from "./mk.json";
import en from "./en.json";

const translations = { mk, en } as const;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "mk",
  setLocale: () => {},
  t: mk,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("mk");

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
