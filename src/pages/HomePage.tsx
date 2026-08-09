import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { TopBar } from "@/components/TopBar";
import { ProjectDrawer } from "@/components/ProjectDrawer";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ClientLogo } from "@/components/ClientLogo";
import { FunboxSticker } from "@/components/FunboxSticker";
import { FeaturedCase } from "@/components/FeaturedCase";
import { WorkAreas } from "@/components/WorkAreas";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { HomeContactSection } from "@/components/HomeContactSection";
import portrait from "@/assets/oliver-portrait.jpg";
import { useFeaturedProjects, useSecondaryProjects } from "@/data/projects";
import type { Project } from "@/data/types";
import { useLanguage } from "@/i18n/context";
import { useProjectListKeyboard } from "@/hooks/useProjectListKeyboard";
import { emitCursor } from "@/lib/cursor";
import { BODY, CREAM, INK, MONO, SITE } from "@/lib/constants";

function ProjectRow({
  project,
  index,
  isHovered,
  isFaded,
  onHover,
  onLeave,
  onOpen,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  isFaded: boolean;
  onHover: () => void;
  onLeave: () => void;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
    >
      <button
        type="button"
        data-project-id={project.id}
        className="flex flex-col sm:flex-row w-full text-left outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
        style={{
          opacity: isFaded ? 0.4 : 1,
          transition: "opacity 0.4s ease",
          cursor: "none",
          background: "transparent",
          border: "none",
          padding: 0,
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onOpen}
        aria-label={`${project.title}, ${project.category}, ${project.year}`}
      >
        <div
          className="relative overflow-hidden"
          style={{
            background: "#111",
            height: "clamp(72px,18vw,220px)",
            flex: "0 0 68%",
          }}
        >
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.imageAlt ?? project.title}
                loading="lazy"
                className="w-full h-full object-cover will-change-transform"
                style={{
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                  opacity: isHovered ? 1 : 0.75,
                  transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease",
                }}
              />
              {project.client && (
                <ClientLogo
                  client={project.client}
                  tone="light"
                  size="md"
                  className="absolute z-10 pointer-events-none"
                  style={{
                    top: "clamp(0.75rem,2vw,1.25rem)",
                    right: "clamp(0.75rem,2vw,1.25rem)",
                    maxWidth: "min(120px, 34%)",
                    opacity: isHovered ? 1 : 0.82,
                    transition: "opacity 0.35s ease",
                  }}
                />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-end p-4 sm:p-6">
              <span
                className="font-display select-none"
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(1.5rem,4vw,4rem)",
                  color: "rgba(255,255,255,0.06)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.88,
                }}
              >
                {project.title}
              </span>
            </div>
          )}
        </div>

        <div
          className="relative flex flex-col justify-center"
          style={{
            flex: "0 0 32%",
            padding: "14px clamp(0.75rem,2vw,1.75rem)",
            minHeight: "clamp(72px,18vw,220px)",
          }}
        >
          <span className="type-eyebrow mb-2" style={{ color: "rgba(0,0,0,0.22)" }}>
            {project.category} · {project.year}
          </span>
          <span
            className="font-display block break-words"
            style={{
              fontWeight: 600,
              fontSize: "clamp(0.85rem,1.05vw,1.05rem)",
              lineHeight: 1.2,
              color: isHovered ? INK : "rgba(14,14,14,0.55)",
              transition: "color 0.35s ease",
              overflowWrap: "anywhere",
              hyphens: "auto",
            }}
          >
            {project.title}
          </span>
          <p
            className="type-body hidden sm:block mt-2"
            style={{
              fontSize: 12,
              lineHeight: 1.5,
              maxWidth: "28ch",
              color: "rgba(0,0,0,0.4)",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.35s ease",
            }}
          >
            {project.tagline}
          </p>
        </div>
      </button>
    </motion.div>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const featuredProjects = useFeaturedProjects();
  const secondaryProjects = useSecondaryProjects();
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  const openProject = useCallback(
    (id: string) => {
      const project = [...featuredProjects, ...secondaryProjects].find((p) => p.id === id);
      if (project) setActive(project);
    },
    [featuredProjects, secondaryProjects],
  );

  useProjectListKeyboard("project-list", !active, openProject);

  return (
    <div
      style={{ background: CREAM, minHeight: "100vh", fontFamily: BODY, color: INK }}
      className="md:cursor-none"
    >
      <TopBar />
      <ProjectDrawer project={active} onClose={() => setActive(null)} />

      <section
        className="relative min-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2"
        style={{ paddingTop: "clamp(4.5rem,10vh,7rem)" }}
      >
        <div className="relative z-10 flex flex-col h-full min-h-0 px-6 sm:px-10 pb-16 md:pb-0">
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="w-full max-w-[30rem] flex flex-col gap-6 sm:gap-7">
              <motion.p
                className="type-eyebrow"
                style={{ color: "rgba(0,0,0,0.32)" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                {t.home.heroEyebrow}
              </motion.p>

              <motion.h1
                className="font-display"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.85rem, 4.2vw, 3.4rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  maxWidth: "16ch",
                  textWrap: "balance",
                }}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.home.heroTitle}
              </motion.h1>

              <motion.p
                className="type-body"
                style={{
                  fontSize: "clamp(0.98rem, 1.5vw, 1.08rem)",
                  lineHeight: 1.75,
                  maxWidth: "42ch",
                  color: "rgba(14,14,14,0.58)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                {t.home.heroBody}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex items-end justify-end pe-8 pb-0 overflow-hidden">
          <motion.img
            src={portrait}
            alt={SITE.name}
            className="pointer-events-none select-none"
            style={{
              height: "min(78vh, 680px)",
              width: "auto",
              aspectRatio: "5 / 7",
              objectFit: "cover",
              objectPosition: "top center",
              opacity: 0.88,
              filter: "grayscale(100%)",
              borderRadius: 2,
            }}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 0.88, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <FunboxSticker
          onClick={() => navigate("/funbox")}
          eyebrow={t.funbox.stickerEyebrow}
          cta={t.funbox.stickerCta}
          ariaLabel={t.home.funboxSticker}
        />
      </section>

      <WorkAreas />

      <section>
        <div className="px-5 sm:px-10 pt-14 sm:pt-16 pb-4">
          <p className="type-eyebrow mb-4" style={{ color: "rgba(0,0,0,0.28)" }}>
            {t.home.featuredLabel}
          </p>
          <p className="type-body" style={{ fontSize: 15, maxWidth: "48ch", color: "rgba(0,0,0,0.45)" }}>
            {t.home.featuredIntro}
          </p>
        </div>

        {featuredProjects.map((project, index) => (
          <FeaturedCase
            key={project.id}
            project={project}
            index={index}
            onOpen={() => setActive(project)}
          />
        ))}
      </section>

      <section>
        <div className="px-5 sm:px-7 py-4" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <span className="type-eyebrow" style={{ color: "rgba(0,0,0,0.28)" }}>
            {t.home.moreProjectsLabel}
          </span>
          <p className="type-body mt-3" style={{ fontSize: 14, maxWidth: "48ch", color: "rgba(0,0,0,0.45)" }}>
            {t.home.moreProjectsIntro}
          </p>
          <p className="sr-only" aria-live="polite">
            {t.home.projectsKeyboardHint}
          </p>
        </div>

        <div id="project-list" className="flex flex-col" role="list">
          {secondaryProjects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              isFaded={hoveredId !== null && hoveredId !== project.id}
              onHover={() => {
                setHoveredId(project.id);
                emitCursor("VIEW");
              }}
              onLeave={() => {
                setHoveredId(null);
                emitCursor("");
              }}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </section>

      <HowIWorkSection />

      <ClientLogoMarquee title={t.home.clientsTitle} />

      <HomeContactSection />

      <footer
        className="flex items-center justify-between px-5 sm:px-7 py-5"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)", opacity: 0.28 }}
      >
        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em" }}>
          {SITE.name} &copy; {SITE.year}
        </span>
        <div className="flex gap-5" style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em" }}>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
            LinkedIn
          </a>
          <span>{SITE.phone}</span>
        </div>
      </footer>
    </div>
  );
}
