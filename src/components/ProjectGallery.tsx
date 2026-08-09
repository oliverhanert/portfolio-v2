import { motion } from "motion/react";
import { FadeUp } from "@/components/motion";
import { ProjectGalleryLayout } from "@/components/ProjectGalleryLayout";
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
    <FadeUp className="px-5 sm:px-10 pb-10 sm:pb-14">
      <div className="max-w-6xl mx-auto">
        <p
          className="mb-6 sm:mb-8"
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

        <ProjectGalleryLayout
          items={items}
          accent={accent}
          showAccent
          renderFigure={(content, item, index) => (
            <motion.figure
              key={`${item.src}-${index}`}
              className="min-w-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              {content}
            </motion.figure>
          )}
        />
      </div>
    </FadeUp>
  );
}
