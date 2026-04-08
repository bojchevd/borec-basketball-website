import mk from "./mk.json";
import en from "./en.json";

export type Locale = "mk" | "en";

const translations = { mk, en } as const;

export function getTranslations(locale: Locale = "mk") {
  return translations[locale];
}

// Helper to get a nested translation by dot-path
export function t(locale: Locale, path: string): string {
  const keys = path.split(".");
  let result: any = translations[locale];
  for (const key of keys) {
    result = result?.[key];
  }
  return typeof result === "string" ? result : path;
}

export type Translations = typeof mk;
