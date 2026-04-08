"use client";

import { useI18n } from "@/lib/i18n/provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 px-2 py-1">
      <button
        onClick={() => setLocale("mk")}
        className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
          locale === "mk"
            ? "bg-white/10 text-white"
            : "text-white/30 hover:text-white/50"
        }`}
      >
        🇲🇰 MK
      </button>
      <button
        onClick={() => setLocale("en")}
        disabled
        className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-white/20 cursor-not-allowed"
        title="Coming soon"
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
