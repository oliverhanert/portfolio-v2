import { motion } from "motion/react";
import { Button } from "@/components/Button";
import { ClientLogo } from "@/components/ClientLogo";
import { ProjectLabels } from "@/components/ProjectLabels";
import type { Project } from "@/data/types";
import { useLanguage } from "@/i18n/context";
import { INK, MONO } from "@/lib/constants";
import { DevelopmentBadge } from "@/components/DevelopmentBadge";
import { ProjectGalleryLayout } from "@/components/ProjectGalleryLayout";
import { EXTERNAL_LINK_PROPS } from "@/lib/externalLink";

type Props = {
  project: Project;
  index: number;
  onOpen: () => void;
};

export function FeaturedCase({ project, index, onOpen }: Props) {
  const { t } = useLanguage();
  const reversed = index % 2 === 1;
  const gallery = project.gallery?.slice(0, 3) ?? [];
  const showGallery = project.showGalleryOnFeatured !== false && gallery.length > 1;

  return (
    <motion.article
      className="py-14 sm:py-20"
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="type-eyebrow" style={{ color: project.accent }}>
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-black/15" />
            <span className="type-eyebrow">{project.year}</span>
            {project.inDevelopment && <DevelopmentBadge accent={project.accent} />}
          </div>

          <h3
            className="font-display mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: INK,
              maxWidth: project.titleLines ? "12ch" : "14ch",
            }}
          >
            {project.titleLines ? (
              <>
                {project.titleLines[0]}
                <br />
                {project.titleLines[1]}
              </>
            ) : (
              project.title
            )}
          </h3>

          <p
            className="type-tagline mb-5"
            style={{ maxWidth: "34ch", fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
          >
            {project.tagline}
          </p>

          <ProjectLabels labels={project.labels} accent={project.accent} className="mb-6" />

          <p className="type-body mb-0" style={{ maxWidth: "46ch" }}>
            {project.story}
          </p>

          {project.highlight && (
            <p
              className="type-body type-body-muted mt-5"
              style={{
                maxWidth: "44ch",
                borderLeft: `2px solid ${project.accent}`,
                paddingLeft: "1rem",
              }}
            >
              {project.highlight}
            </p>
          )}

          <p
            className="mt-6 mb-8"
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(14,14,14,0.35)",
            }}
          >
            {t.home.myRole}: {project.role}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="fill" size="sm" accent={project.accent} onClick={onOpen}>
              {t.home.readCase}
            </Button>
            {project.url && (
              <Button
                href={project.url}
                variant="outline"
                size="sm"
                accent={project.accent}
                {...EXTERNAL_LINK_PROPS}
              >
                {project.inDevelopment ? t.project.visitStaging : t.project.visitSite}
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="relative overflow-hidden" style={{ background: "#111" }}>
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  loading="lazy"
                  className="w-full block"
                  style={{ aspectRatio: "16/10", objectFit: "cover", opacity: 0.92 }}
                />
                {project.client && (
                  <ClientLogo
                    client={project.client}
                    tone="light"
                    size="md"
                    className="absolute z-10 pointer-events-none"
                    style={{
                      top: "1rem",
                      right: "1rem",
                      maxWidth: "min(130px, 38%)",
                      opacity: 0.9,
                    }}
                  />
                )}
              </>
            ) : null}
            <div style={{ height: 2, background: project.accent }} />
          </div>

          {showGallery && (
            <ProjectGalleryLayout items={gallery.slice(1)} accent={project.accent} />
          )}
        </div>
      </div>
    </motion.article>
  );
}
