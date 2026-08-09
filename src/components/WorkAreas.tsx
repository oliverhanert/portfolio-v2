import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";
import { BODY, MONO } from "@/lib/constants";

export function WorkAreas() {
  const { t } = useLanguage();

  return (
    <section className="px-5 sm:px-10 py-14 sm:py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="type-eyebrow mb-8"
          style={{ color: "rgba(0,0,0,0.28)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.home.workTitle}
        </motion.p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {t.home.workAreas.map((area, i) => (
            <motion.li
              key={area}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              style={{
                fontFamily: BODY,
                fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
                lineHeight: 1.45,
                color: "rgba(14,14,14,0.62)",
                padding: "1rem 1.15rem",
                border: "1px solid rgba(0,0,0,0.08)",
                background: "rgba(255,255,255,0.35)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: MONO,
                  fontSize: 8,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.22)",
                  marginBottom: 6,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {area}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
