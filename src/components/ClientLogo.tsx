import { useState, type CSSProperties } from "react";
import type { Client } from "@/data/clients";

type Props = {
  client: Pick<Client, "name" | "logo">;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "dark" | "light";
  className?: string;
  style?: CSSProperties;
};

const heights = {
  sm: "h-5",
  md: "h-6",
  lg: "h-8",
  xl: "h-10",
} as const;

export function ClientLogo({
  client,
  size = "sm",
  tone = "dark",
  className = "",
  style,
}: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!client.logo || imgFailed) return null;

  return (
    <img
      src={client.logo}
      alt={client.name}
      className={`client-logo w-auto max-w-[140px] object-contain ${tone === "light" ? "client-logo--light" : ""} ${heights[size]} ${className}`}
      style={style}
      loading="lazy"
      onError={() => setImgFailed(true)}
    />
  );
}
