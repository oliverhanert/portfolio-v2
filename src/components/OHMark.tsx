import { INK } from "@/lib/constants";

type Props = {
  dark?: boolean;
};

export function OHMark({ dark = false }: Props) {
  return (
    <span
      className="font-display select-none whitespace-nowrap"
      style={{
        fontSize: "clamp(1.1rem, 2.8vw, 1.35rem)",
        letterSpacing: "-0.03em",
        lineHeight: 1,
        color: dark ? "#faf9f7" : INK,
      }}
    >
      Oliver Hanert
    </span>
  );
}
