import { FadeUp } from "@/components/motion";
import type { Project } from "@/data/types";
import { emitCursor } from "@/lib/cursor";
import { CREAM, DARK, DISPLAY, MONO } from "@/lib/constants";

type Props = {
  next: Project;
  eyebrow: string;
  cta: string;
  onNavigate: () => void;
};

export function NextProjectSection({ next, eyebrow, cta, onNavigate }: Props) {
  return (
    <button
      type="button"
      className="group relative block w-full overflow-hidden text-left border-none p-0 md:cursor-none"
      style={{ background: DARK, cursor: "none" }}
      onClick={onNavigate}
      onMouseEnter={() => emitCursor("NEXT")}
      onMouseLeave={() => emitCursor("")}
      aria-label={`${eyebrow}: ${next.title}`}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
        style={{ background: next.accent }}
        aria-hidden
      />

      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <FadeUp className="relative flex flex-col justify-center px-5 sm:px-10 py-16 sm:py-20 lg:py-24 lg:pr-14">
          <span
            className="absolute left-5 sm:left-10 top-8 sm:top-12 select-none pointer-events-none"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(4.5rem, 14vw, 9rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              color: "rgba(250,249,247,0.04)",
            }}
            aria-hidden
          >
            {next.id}
          </span>

          <p
            className="relative mb-5"
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(250,249,247,0.38)",
            }}
          >
            {eyebrow}
          </p>

          <h2
            className="relative font-display mb-4 transition-colors duration-300 group-hover:text-[#faf9f7]"
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.85rem, 4.8vw, 3.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "13ch",
              textWrap: "balance",
              color: CREAM,
            }}
          >
            {next.title}
          </h2>

          <p
            className="relative type-body mb-10"
            style={{ color: "rgba(250,249,247,0.42)", maxWidth: "34ch", fontSize: "0.95rem" }}
          >
            {next.tagline}
          </p>

          <span
            className="relative inline-flex items-center gap-2.5 transition-transform duration-300 group-hover:translate-x-1"
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(250,249,247,0.72)",
            }}
          >
            {cta}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </FadeUp>

        <FadeUp
          delay={0.06}
          className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[380px] overflow-hidden"
        >
          <div className="absolute inset-0 origin-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.035]">
            {next.image ? (
              <img
                src={next.image}
                alt=""
                className="w-full h-full object-cover"
                style={{ opacity: 0.9 }}
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-end p-6 sm:p-8"
                style={{ background: "rgba(250,249,247,0.06)" }}
              >
                <span
                  className="font-display select-none"
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 8vw, 4rem)",
                    color: "rgba(250,249,247,0.08)",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.9,
                  }}
                >
                  {next.title}
                </span>
              </div>
            )}
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #282018 0%, transparent 40%)",
            }}
            aria-hidden
          />
        </FadeUp>
      </div>
    </button>
  );
}
