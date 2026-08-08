import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, type Locale } from "./types";
import { ui, type UiStrings } from "./ui";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: UiStrings;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: ui[locale],
    }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = ui[locale].meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", ui[locale].meta.description);
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
