import { MONO } from "@/lib/constants";

type Props = {
  labels: string[];
  accent?: string;
  className?: string;
};

export function ProjectLabels({ labels, accent, className = "" }: Props) {
  if (!labels.length) return null;

  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {labels.map((label) => (
        <li
          key={label}
          style={{
            fontFamily: MONO,
            fontSize: 8,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "5px 10px",
            borderRadius: 999,
            border: `1px solid ${accent ? `${accent}33` : "rgba(14,14,14,0.1)"}`,
            color: accent ? accent : "rgba(14,14,14,0.45)",
            background: accent ? `${accent}08` : "transparent",
          }}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
