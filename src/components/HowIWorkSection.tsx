import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";

export function HowIWorkSection() {
  const { t } = useLanguage();

  return (
    <section className="px-5 sm:px-10 py-16 sm:py-24" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.35fr)_1fr] gap-8 lg:gap-16 items-start">
        <motion.p
          className="type-eyebrow"
          style={{ color: "rgba(0,0,0,0.28)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.home.howIWorkTitle}
        </motion.p>

        <motion.p
          className="type-lead"
          style={{ maxWidth: "42ch", color: "rgba(14,14,14,0.68)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {t.home.howIWorkBody}
        </motion.p>
      </div>
    </section>
  );
}
