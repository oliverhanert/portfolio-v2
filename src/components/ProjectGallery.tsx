import { motion } from "motion/react";
import { FadeUp } from "@/components/motion";
import type { ProjectGalleryItem } from "@/data/types";
import { MONO } from "@/lib/constants";

type Props = {
  items: ProjectGalleryItem[];
  title: string;
  accent: string;
};

export function ProjectGallery({ items, title, accent }: Props) {
  if (!items.length) return null;

  return (
    <FadeUp className="px-5 sm:px-10 pb-14 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <p
          className="mb-8"
          style={{
            fontFamily: MONO,
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(14,14,14,0.28)",
          }}
        >
          {title}
        </p>

        <div className="flex flex-col gap-6 sm:gap-8">
          {items.map((item, i) => {
            const wide = item.wide ?? i % 3 === 0;
            const offset = item.offset ?? (i % 2 === 1 ? "right" : "none");

            return (
              <motion.figure
                key={`${item.src}-${i}`}
                className={wide ? "w-full" : offset === "right" ? "sm:ml-[12%] w-full sm:w-[88%]" : "sm:mr-[12%] w-full sm:w-[88%]"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="overflow-hidden relative"
                  style={{
                    background: item.bg ?? "#111",
                    borderTop: `2px solid ${accent}`,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full block"
                    style={{
                      aspectRatio: item.aspect ?? (wide ? "16/9" : "4/3"),
                      objectFit: item.fit ?? "cover",
                      opacity: 0.92,
                    }}
                  />
                </div>
                {item.caption && (
                  <figcaption
                    className="mt-3 type-body"
                    style={{ fontSize: 13, color: "rgba(14,14,14,0.45)", maxWidth: "48ch" }}
                  >
                    {item.caption}
                  </figcaption>
                )}
              </motion.figure>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
}
