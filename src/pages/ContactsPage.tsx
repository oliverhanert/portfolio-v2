import { motion } from "motion/react";
import { TopBar } from "@/components/TopBar";
import { ContactIcon } from "@/components/ContactIcon";
import { CONTACT_ITEMS, ICON_SLOT_SIZE } from "@/data/contactLinks";
import { useLanguage } from "@/i18n/context";
import { emitCursor } from "@/lib/cursor";
import { BODY, CREAM, DISPLAY, MONO, SITE } from "@/lib/constants";

function ContactRow({
  iconSrc,
  iconSize,
  value,
  subtitle,
  onClick,
  href,
  external,
  download,
  delay,
}: {
  iconSrc?: string;
  iconSize: number;
  value: string;
  subtitle?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  download?: string;
  delay: number;
}) {
  const className = "group flex items-center gap-5 sm:gap-6 md:cursor-none";
  const style = { cursor: "none" as const, textDecoration: "none" };
  const handlers = {
    onMouseEnter: () => emitCursor("↗"),
    onMouseLeave: () => emitCursor(""),
  };

  const content = (
    <>
      <span
        className="flex shrink-0 items-center justify-center"
        style={{ width: ICON_SLOT_SIZE, height: ICON_SLOT_SIZE }}
      >
        {iconSrc ? <ContactIcon src={iconSrc} size={iconSize} /> : null}
      </span>
      <span className="min-w-0">
        <span
          className="font-display block transition-colors duration-300 group-hover:text-white"
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "rgba(250,249,247,0.88)",
          }}
        >
          {value}
        </span>
        {subtitle && (
          <span
            className="type-eyebrow block mt-1"
            style={{ color: "rgba(250,249,247,0.28)" }}
          >
            {subtitle}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
        style={style}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.55 }}
        {...handlers}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${className} text-left bg-transparent border-none p-0`}
      style={style}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.55 }}
      {...handlers}
    >
      {content}
    </motion.button>
  );
}

export function ContactsPage() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: "#282018", color: "#fff", fontFamily: BODY }}
      className="min-h-screen flex flex-col md:cursor-none"
    >
      <TopBar dark className="no-print" />

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-36 pb-16 sm:pb-20">
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="select-none mb-4"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              color: CREAM,
            }}
          >
            Oliver
            <br />
            Hanert
          </h1>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(250,249,247,0.38)",
            }}
          >
            {t.contacts.roleLine}
          </p>
          <p
            className="mt-8 type-body"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.75,
              maxWidth: "42ch",
              color: "rgba(250,249,247,0.55)",
            }}
          >
            {t.contacts.intro}
          </p>
        </motion.div>

        <motion.section
          className="no-print flex flex-col gap-8 sm:gap-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {CONTACT_ITEMS.map((item, i) => (
            <ContactRow
              key={item.id}
              iconSrc={item.iconSrc}
              iconSize={item.iconSize ?? 44}
              value={item.id === "cv" ? t.contacts.downloadCv : item.value}
              subtitle={item.subtitle}
              href={item.href}
              external={item.external}
              download={item.download}
              delay={0.22 + i * 0.08}
            />
          ))}
        </motion.section>
      </main>

      <footer
        className="flex items-center justify-between px-6 sm:px-10 py-5 no-print"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", opacity: 0.32 }}
      >
        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em" }}>
          {SITE.name} &copy; {SITE.year}
        </span>
        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em" }}>
          {SITE.location}
        </span>
      </footer>
    </motion.div>
  );
}
