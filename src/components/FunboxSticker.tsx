import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { emitCursor } from "@/lib/cursor";

type Props = {
  onClick: () => void;
  eyebrow: string;
  cta: string;
  ariaLabel: string;
};

export function FunboxSticker({ onClick, eyebrow, cta, ariaLabel }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const rotate = useMotionValue(-6);
  const springRotate = useSpring(rotate, { stiffness: 280, damping: 18 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.08);
      y.set((e.clientY - cy) * 0.08);
      rotate.set(-6 + (e.clientX - cx) * 0.02);
    };

    const onLeave = () => {
      x.set(0);
      y.set(0);
      rotate.set(-6);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      emitCursor("");
    };
  }, [rotate, x, y]);

  return (
    <motion.button
      ref={ref}
      type="button"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
      style={{
        cursor: "none",
        x: springX,
        y: springY,
        rotate: springRotate,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onMouseEnter={() => emitCursor("↗")}
      onMouseLeave={() => emitCursor("")}
      onClick={() => {
        emitCursor("");
        onClick();
      }}
      aria-label={ariaLabel}
    >
      <div className="funbox-sticker relative">
        <svg className="funbox-sticker__shape" viewBox="0 0 140 140" aria-hidden>
          <path
            d="M12 18 C12 8 20 4 32 6 L108 4 C122 3 130 12 128 26 L132 108 C133 122 124 130 110 128 L28 134 C14 136 6 126 8 112 Z"
            fill="#f4f0e6"
            stroke="#0e0e0e"
            strokeWidth="2.2"
          />
          <path
            d="M18 24 L122 20"
            stroke="#0e0e0e"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.25"
          />
        </svg>

        <div className="funbox-sticker__content">
          <span className="funbox-sticker__eyebrow">{eyebrow}</span>
          <span className="funbox-sticker__title">
            Fun
            <br />
            Box
          </span>
          <span className="funbox-sticker__cta">{cta}</span>
        </div>

        <motion.span
          className="funbox-sticker__star"
          animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          ✦
        </motion.span>
      </div>

      <style>{`
        .funbox-sticker {
          width: clamp(5.5rem, 14vw, 7.5rem);
          height: clamp(5.5rem, 14vw, 7.5rem);
          filter: drop-shadow(0 10px 24px rgba(14, 14, 14, 0.16));
        }
        .funbox-sticker__shape {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .funbox-sticker__content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          text-align: center;
          transform: rotate(-2deg);
        }
        .funbox-sticker__eyebrow {
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(14, 14, 14, 0.45);
          margin-bottom: 0.15rem;
        }
        .funbox-sticker__title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.1rem, 2.8vw, 1.35rem);
          line-height: 0.88;
          letter-spacing: -0.04em;
          color: #0e0e0e;
        }
        .funbox-sticker__cta {
          margin-top: 0.35rem;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0e0e0e;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
        }
        .funbox-sticker__star {
          position: absolute;
          top: 0.35rem;
          right: 0.5rem;
          font-size: 0.85rem;
          color: #be123c;
        }
        .funbox-sticker:hover .funbox-sticker__cta {
          letter-spacing: 0.22em;
        }
      `}</style>
    </motion.button>
  );
}
