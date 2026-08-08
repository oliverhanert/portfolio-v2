import { useState } from "react";
import { CLIENTS, type Client } from "@/data/clients";
import { DISPLAY } from "@/lib/constants";

function MarqueeLogo({ client }: { client: Client }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={client.url ?? `https://${client.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="client-marquee-logo flex shrink-0 items-center justify-center px-5 sm:px-8"
      title={client.name}
      aria-label={client.name}
    >
      {client.logo && !imgFailed ? (
        <img
          src={client.logo}
          alt=""
          className="h-6 sm:h-7 w-auto max-w-[110px] object-contain"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          className="text-center uppercase"
          style={{
            fontFamily: DISPLAY,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#0e0e0e",
          }}
        >
          {client.name}
        </span>
      )}
    </a>
  );
}

type Props = {
  title?: string;
};

export function ClientLogoMarquee({ title }: Props) {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section
      className="client-marquee overflow-hidden py-10 sm:py-12"
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      aria-label={title}
    >
      {title && (
        <p
          className="type-label mb-8 text-center sm:mb-10"
          style={{ color: "rgba(0,0,0,0.28)" }}
        >
          {title}
        </p>
      )}

      <div className="client-marquee-viewport relative">
        <div className="client-marquee-track flex w-max items-center">
          {items.map((client, i) => (
            <MarqueeLogo key={`${client.domain}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
