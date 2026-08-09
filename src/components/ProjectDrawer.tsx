import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/Button";
import { DevelopmentBadge } from "@/components/DevelopmentBadge";
import { ProjectLabels } from "@/components/ProjectLabels";
import { ClientLogo } from "@/components/ClientLogo";
import { storyExcerpt } from "@/data/projects";
import type { Project } from "@/data/types";
import { useLanguage } from "@/i18n/context";
import { CREAM, INK, MONO } from "@/lib/constants";
import { EXTERNAL_LINK_PROPS } from "@/lib/externalLink";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDrawer({ project, onClose }: Props) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(14,14,14,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 bottom-0 z-[201] flex flex-col"
            style={{
              width: "min(520px, 96vw)",
              background: CREAM,
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 42, stiffness: 380 }}
          >
            <div style={{ height: 3, background: project.accent, flexShrink: 0 }} />

            <div className="relative flex-shrink-0" style={{ background: "#111" }}>
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    loading="lazy"
                    className="w-full block"
                    style={{ aspectRatio: "4/3", objectFit: "cover", opacity: 0.9 }}
                  />
                  {project.client && (
                    <ClientLogo
                      client={project.client}
                      tone="light"
                      size="md"
                      className="absolute z-10 pointer-events-none"
                      style={{
                        top: "1rem",
                        left: "1rem",
                        maxWidth: "min(130px, 42%)",
                        opacity: 0.9,
                      }}
                    />
                  )}
                </>
              ) : (
                <div
                  className="relative flex items-end justify-start overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    padding: "clamp(1.5rem,4vw,2.5rem)",
                    background: project.accent,
                  }}
                >
                  {project.client && (
                    <ClientLogo
                      client={project.client}
                      tone="light"
                      size="md"
                      className="absolute z-10 pointer-events-none"
                      style={{
                        top: "1rem",
                        left: "1rem",
                        maxWidth: "min(130px, 42%)",
                        opacity: 0.9,
                      }}
                    />
                  )}
                  <span
                    className="font-display select-none leading-none"
                    style={{
                      fontSize: "clamp(3rem,12vw,7rem)",
                      color: "rgba(255,255,255,0.12)",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.85,
                    }}
                  >
                    {project.title}
                  </span>
                </div>
              )}

              <button
                onClick={onClose}
                aria-label={t.project.close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-60 transition-opacity"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  color: "#fff",
                  fontSize: 11,
                  backdropFilter: "blur(4px)",
                  cursor: "none",
                }}
              >
                ✕
              </button>

              <div className="relative" style={{ marginTop: -1 }}>
                <div
                  style={{
                    background: CREAM,
                    paddingTop: "clamp(1.2rem,3vw,2rem)",
                    paddingBottom: "1rem",
                    paddingLeft: "clamp(1.5rem,4vw,2.5rem)",
                    paddingRight: "clamp(1.5rem,4vw,2.5rem)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 8,
                        letterSpacing: "0.14em",
                        color: project.accent,
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category}
                    </span>
                    <span style={{ color: "rgba(0,0,0,0.15)" }}>·</span>
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 8,
                        letterSpacing: "0.14em",
                        color: "rgba(0,0,0,0.3)",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.year}
                    </span>
                    {project.inDevelopment && <DevelopmentBadge accent={project.accent} />}
                  </div>
                  <h2
                    className="font-display break-words"
                    style={{
                      fontSize: "clamp(1.25rem, 3.5vw, 1.85rem)",
                      lineHeight: 1.08,
                      letterSpacing: "-0.02em",
                      color: INK,
                      marginBottom: 12,
                      textWrap: "balance",
                      hyphens: "manual",
                      maxWidth: "100%",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p className="type-tagline mb-4" style={{ fontSize: 14, maxWidth: "none", color: "rgba(14,14,14,0.55)" }}>
                    {project.tagline}
                  </p>
                  <ProjectLabels labels={project.labels} accent={project.accent} className="mb-4" />
                  <p className="type-body type-body-muted mb-4" style={{ maxWidth: "none" }}>
                    {storyExcerpt(project.story, 200)}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-auto flex-shrink-0 flex items-center justify-between"
              style={{
                padding: "clamp(1rem,2.5vw,1.5rem) clamp(1.5rem,4vw,2.5rem)",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {project.url ? (
                <Button
                  href={project.url}
                  variant="outline"
                  size="sm"
                  accent={project.accent}
                  {...EXTERNAL_LINK_PROPS}
                >
                  {project.inDevelopment ? t.project.visitStaging : t.project.visitSite}
                </Button>
              ) : (
                <span />
              )}
              <Button
                variant="fill"
                size="sm"
                accent={project.accent}
                onClick={() => {
                  onClose();
                  navigate(`/projects/${project.id}`);
                }}
              >
                {t.project.readCase}
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
