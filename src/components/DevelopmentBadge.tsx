import { useLanguage } from "@/i18n/context";
import { MONO } from "@/lib/constants";

type Props = {
  accent: string;
};

export function DevelopmentBadge({ accent }: Props) {
  const { t } = useLanguage();

  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 8,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: accent,
        border: `1px solid color-mix(in srgb, ${accent} 35%, transparent)`,
        borderRadius: 999,
        padding: "5px 10px",
        lineHeight: 1,
      }}
    >
      {t.project.inDevelopment}
    </span>
  );
}
