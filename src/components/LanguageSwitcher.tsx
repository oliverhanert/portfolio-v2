import { LOCALES } from "@/i18n/types";
import { useLanguage } from "@/i18n/context";
import { MONO } from "@/lib/constants";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 rounded-full p-0.5"
      style={{
        background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
      }}
      role="group"
      aria-label="Sprog"
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className="px-2.5 py-1 rounded-full transition-all duration-200"
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: active
                ? dark
                  ? "#0e0e0e"
                  : "#faf9f7"
                : dark
                  ? "rgba(255,255,255,0.45)"
                  : "rgba(0,0,0,0.4)",
              background: active ? (dark ? "#faf9f7" : "#0e0e0e") : "transparent",
              cursor: "none",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
