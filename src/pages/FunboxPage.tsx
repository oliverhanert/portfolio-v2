import { useState } from "react";
import { motion } from "motion/react";
import { TopBar } from "@/components/TopBar";
import { FunboxAudioToggle } from "@/components/FunboxAudioToggle";
import { GALLERY_ITEMS } from "@/data/gallery";
import { useLanguage } from "@/i18n/context";
import { DARK, MONO, SITE } from "@/lib/constants";

export function FunboxPage() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      style={{ background: DARK, minHeight: "100vh" }}
      className="md:cursor-none"
    >
      <TopBar dark />
      <FunboxAudioToggle setMoodLabel={t.funbox.audioSetMood} pauseLabel={t.funbox.audioPause} />

      <div
        className="px-5 sm:px-10 pt-28 sm:pt-36 pb-10 sm:pb-14"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <motion.h1
          className="text-white select-none font-display"
          style={{
            fontSize: "clamp(3.5rem,10vw,11rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.funbox.title[0]}
          <br />
          {t.funbox.title[1]}
        </motion.h1>
        <motion.p
          className="mt-6 uppercase"
          style={{
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.1em",
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.28)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t.funbox.intro}
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: 2, marginTop: 2 }}>
        {GALLERY_ITEMS.map((item, i) => {
          const isContain = item.fit === "contain";
          const inner = (
            <>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: item.bg ?? "#111" }}
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={isContain ? "max-w-[72%] max-h-[72%] w-auto h-auto object-contain" : "w-full h-full object-cover"}
                    style={{
                      transform: hovered === item.id && !isContain ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                  />
                ) : (
                  <span
                    className="font-display text-center px-6 select-none"
                    style={{
                      fontSize: "clamp(1rem,3vw,1.5rem)",
                      letterSpacing: "-0.02em",
                      color: "rgba(255,255,255,0.2)",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </span>
                )}
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 pointer-events-none"
                style={{
                  background:
                    hovered === item.id
                      ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 40%)",
                  transition: "background 0.4s ease",
                }}
              >
                {item.title && (
                  <span
                    className="text-white font-display"
                    style={{ fontSize: "clamp(0.9rem,2vw,1.2rem)", letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </span>
                )}
                {item.subtitle && (
                  <span
                    className="mt-1 uppercase"
                    style={{
                      fontFamily: MONO,
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.55)",
                      opacity: hovered === item.id ? 1 : 0.7,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {item.subtitle}
                  </span>
                )}
              </div>
            </>
          );

          return (
            <motion.div
              key={item.id}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "1 / 1", cursor: item.href ? "none" : "default" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                  style={{ cursor: "none" }}
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </motion.div>
          );
        })}
      </div>

      <footer
        className="flex items-center justify-between px-5 sm:px-10 py-6 mt-2"
        style={{ opacity: 0.18 }}
      >
        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em", color: "#fff" }}>
          {SITE.name}
        </span>
        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em", color: "#fff" }}>
          Funbox
        </span>
      </footer>
    </motion.div>
  );
}
