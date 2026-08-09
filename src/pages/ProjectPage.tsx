import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { TopBar } from "@/components/TopBar";
import { ProjectMeta } from "@/components/ProjectMeta";
import { ClientLogo } from "@/components/ClientLogo";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectLabels } from "@/components/ProjectLabels";
import { DevelopmentBadge } from "@/components/DevelopmentBadge";
import { NextProjectSection } from "@/components/NextProjectSection";
import { StoryParagraphs, FadeUp } from "@/components/motion";
import { heroImageUrl, useProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/context";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { CREAM, INK } from "@/lib/constants";

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projects = useProjects();
  const project = projects.find((p) => p.id === id);
  const idx = projects.findIndex((p) => p.id === id);
  const next = idx >= 0 ? projects[(idx + 1) % projects.length] : undefined;
  const { t } = useLanguage();

  if (!project || !next) return <NotFoundPage />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: CREAM, minHeight: "100vh", color: INK }}
      className="font-body md:cursor-none"
    >
      <motion.div
        style={{ height: 2, background: project.accent, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <TopBar />

      <header className="px-5 sm:px-10 pt-28 sm:pt-36 pb-10 sm:pb-14 relative overflow-hidden">
        <motion.div
          className="absolute right-0 bottom-0 select-none pointer-events-none"
          style={{ lineHeight: 0.8 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-display"
            style={{
              fontSize: "clamp(8rem,24vw,28rem)",
              color: "transparent",
              letterSpacing: "-0.05em",
              WebkitTextStroke: `1px ${project.accent}15`,
            }}
          >
            {project.id}
          </span>
        </motion.div>

        <div className="relative z-10 max-w-5xl">
          <FadeUp>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="type-eyebrow">{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-black/15" />
              <span className="type-eyebrow">{project.year}</span>
              {project.inDevelopment && <DevelopmentBadge accent={project.accent} />}
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="type-title mb-5" style={{ maxWidth: project.titleLines ? "12ch" : undefined }}>
              {project.titleLines ? (
                <>
                  {project.titleLines[0]}
                  <br />
                  {project.titleLines[1]}
                </>
              ) : (
                project.title
              )}
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="type-tagline mb-6">{project.tagline}</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <ProjectLabels labels={project.labels} accent={project.accent} />
          </FadeUp>
        </div>
      </header>

      {project.image ? (
        <div className="relative overflow-hidden" style={{ background: "#111" }}>
          <motion.img
            src={heroImageUrl(project.image, "hero")}
            alt={project.imageAlt ?? project.title}
            loading="eager"
            className="w-full block"
            style={{ aspectRatio: "16/7", objectFit: "cover" }}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.92 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          {project.client && (
            <ClientLogo
              client={project.client}
              tone="light"
              size="xl"
              className="absolute z-10 pointer-events-none"
              style={{
                top: "clamp(1.25rem,3vw,2rem)",
                right: "clamp(1.25rem,3vw,2.5rem)",
                maxWidth: "min(200px, 28vw)",
                opacity: 0.92,
              }}
            />
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${CREAM} 0%, transparent 28%)` }}
          />
        </div>
      ) : (
        <motion.div
          className="px-5 sm:px-10 py-20 sm:py-28 relative overflow-hidden"
          style={{ background: project.accent }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {project.client && (
            <ClientLogo
              client={project.client}
              tone="light"
              size="xl"
              className="absolute z-10 pointer-events-none"
              style={{
                top: "clamp(1.25rem,3vw,2rem)",
                right: "clamp(1.25rem,3vw,2.5rem)",
                maxWidth: "min(200px, 28vw)",
                opacity: 0.92,
              }}
            />
          )}
          <span
            className="font-display select-none absolute inset-0 flex items-center justify-center"
            style={{
              fontWeight: 800,
              fontSize: "clamp(4rem,18vw,12rem)",
              color: "rgba(255,255,255,0.07)",
              letterSpacing: "-0.04em",
              lineHeight: 0.85,
            }}
          >
            {project.title}
          </span>
        </motion.div>
      )}

      <div className="px-5 sm:px-10 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)] gap-12 lg:gap-16 xl:gap-24">
          <FadeUp>
            <ProjectMeta project={project} className="lg:sticky lg:top-28 lg:self-start" />
          </FadeUp>

          <div className="min-w-0">
            <StoryParagraphs text={project.story} />
            {project.highlight && (
              <FadeUp className="mt-8 sm:mt-10">
                <p
                  className="type-body type-body-muted"
                  style={{
                    maxWidth: "52ch",
                    borderLeft: `2px solid ${project.accent}`,
                    paddingLeft: "1.1rem",
                  }}
                >
                  {project.highlight}
                </p>
              </FadeUp>
            )}
          </div>
        </div>
      </div>

      {project.gallery?.length ? (
        <ProjectGallery
          items={project.gallery}
          title={t.project.galleryTitle}
          accent={project.accent}
        />
      ) : (
        project.image && (
          <FadeUp className="px-5 sm:px-10 pb-14 sm:pb-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="sm:ml-[15%]"
                style={{ maxWidth: "85%" }}
                whileInView={{ y: [20, 0], opacity: [0.6, 1] }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="overflow-hidden" style={{ background: "#111" }}>
                  <img
                    src={heroImageUrl(project.image, "detail")}
                    alt={project.imageAlt ?? project.title}
                    loading="lazy"
                    className="w-full block"
                    style={{ aspectRatio: "4/3", objectFit: "cover", opacity: 0.9 }}
                  />
                </div>
              </motion.div>
            </div>
          </FadeUp>
        )
      )}

      <NextProjectSection
        next={next}
        eyebrow={t.project.nextEyebrow}
        cta={t.project.readCase}
        onNavigate={() => navigate(`/projects/${next.id}`)}
      />
    </motion.div>
  );
}
