import { INK } from "@/lib/constants";

type Props = {
  dark?: boolean;
};

export function OHMark({ dark = false }: Props) {
  return (
    <span
      className="font-display select-none whitespace-nowrap"
      style={{
        fontWeight: 800,
        fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
        letterSpacing: "-0.03em",
        lineHeight: 1,
        color: dark ? "#faf9f7" : INK,
      }}
    >
      Oliver Hanert
    </span>
  );
}
