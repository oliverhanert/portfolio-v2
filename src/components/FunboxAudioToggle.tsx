import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import boombox from "@/assets/funbox/boombox.svg";
import { startFunboxAudio, stopFunboxAudio, type FunboxAudioHandle } from "@/lib/funboxAudio";
import { MONO } from "@/lib/constants";

type Props = {
  setMoodLabel: string;
  pauseLabel: string;
};

export function FunboxAudioToggle({ setMoodLabel, pauseLabel }: Props) {
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [docked, setDocked] = useState(false);
  const handleRef = useRef<FunboxAudioHandle | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      handleRef.current?.stop();
      stopFunboxAudio();
    };
  }, []);

  if (reducedMotion) return null;

  const isIntro = !docked;

  const toggle = async () => {
    if (!docked) setDocked(true);

    if (playing) {
      handleRef.current?.stop();
      handleRef.current = null;
      setPlaying(false);
      return;
    }

    try {
      handleRef.current = await startFunboxAudio();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isIntro && (
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(14,14,14,0.55)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="fixed z-50 flex flex-col items-center gap-2 border-none bg-transparent p-0"
        style={{ cursor: "none" }}
        initial={false}
        animate={
          docked
            ? {
                left: "1rem",
                bottom: "1rem",
                top: "auto",
                right: "auto",
                x: 0,
                y: 0,
                scale: 1,
              }
            : {
                left: "50%",
                top: "50%",
                bottom: "auto",
                right: "auto",
                x: "-50%",
                y: "-50%",
                scale: 1,
              }
        }
        transition={{ type: "spring", damping: 24, stiffness: 220 }}
        whileHover={{ scale: docked ? 1.05 : 1.03 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => void toggle()}
        aria-pressed={playing}
        aria-label={playing ? pauseLabel : setMoodLabel}
      >
        <motion.div
          className="relative"
          animate={
            playing
              ? { rotate: [-2, 2, -2], scale: [1, 1.03, 1] }
              : isIntro
                ? { y: [0, -6, 0] }
                : { rotate: 0, scale: 1 }
          }
          transition={
            playing
              ? { duration: 0.45, repeat: Infinity, ease: "easeInOut" }
              : isIntro
                ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.3 }
          }
        >
          <img
            src={boombox}
            alt=""
            draggable={false}
            className="block select-none pointer-events-none"
            style={{
              width: docked ? "clamp(5rem, 14vw, 6.5rem)" : "clamp(11rem, 42vw, 18rem)",
              height: "auto",
              filter: `drop-shadow(0 ${docked ? 8 : 20}px ${docked ? 20 : 40}px rgba(0,0,0,0.45))`,
              transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </motion.div>

        {!playing && (
          <span
            style={{
              fontFamily: MONO,
              fontSize: docked ? 7 : 9,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {setMoodLabel}
          </span>
        )}
      </motion.button>
    </>
  );
}
