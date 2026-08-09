import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/Button";
import { useLanguage } from "@/i18n/context";
import { BODY, CREAM, FUNBOX_PINK, INK, MONO } from "@/lib/constants";

export function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen overflow-hidden md:cursor-none"
      style={{ background: CREAM, color: INK, fontFamily: BODY }}
    >
      <TopBar />

      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden
      >
        <motion.span
          className="absolute left-1/2 top-1/2 font-display"
          style={{
            fontSize: "clamp(10rem, 42vw, 28rem)",
            lineHeight: 0.82,
            letterSpacing: "-0.06em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(14,14,14,0.06)",
            transform: "translate(-50%, -52%)",
          }}
          animate={{ rotate: [0, -1.5, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {t.notFound.code}
        </motion.span>
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:px-10">
        <motion.p
          className="type-eyebrow mb-5"
          style={{ color: "rgba(0,0,0,0.28)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {t.notFound.code}
        </motion.p>

        <motion.h1
          className="font-display mb-5 max-w-[12ch]"
          style={{
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
        >
          {t.notFound.title}
        </motion.h1>

        <motion.p
          className="type-body mb-10 max-w-[34ch] type-body-muted"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55 }}
        >
          {t.notFound.body}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
        >
          <Button onClick={() => navigate("/")}>{t.notFound.home}</Button>
          <Button variant="outline" accent={FUNBOX_PINK} onClick={() => navigate("/funbox")}>
            {t.notFound.funbox}
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-3"
          style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <motion.span
            style={{ color: FUNBOX_PINK }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ?
          </motion.span>
          <span style={{ color: "rgba(0,0,0,0.22)" }}>{t.home.funboxSticker}</span>
        </motion.div>
      </section>

      <motion.div
        className="pointer-events-none absolute bottom-8 right-8 hidden sm:block font-display"
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          color: `${FUNBOX_PINK}12`,
          letterSpacing: "-0.04em",
          transform: "rotate(12deg)",
        }}
        animate={{ rotate: [12, 16, 10, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        OH
      </motion.div>
    </motion.div>
  );
}
