import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeUp({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StoryParagraphs({ text, className = "" }: { text: string; className?: string }) {
  const paragraphs = text.split("\n\n").filter(Boolean);

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {paragraphs.map((para, i) => (
        <motion.p
          key={i}
          className="type-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {para}
        </motion.p>
      ))}
    </div>
  );
}
