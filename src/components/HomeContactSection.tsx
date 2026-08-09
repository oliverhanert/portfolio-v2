import { motion } from "motion/react";
import { Button } from "@/components/Button";
import { ContactIcon } from "@/components/ContactIcon";
import { CONTACT_ITEMS, ICON_SLOT_SIZE } from "@/data/contactLinks";
import { useLanguage } from "@/i18n/context";
import { SITE } from "@/lib/constants";

export function HomeContactSection() {
  const { t } = useLanguage();
  const cvItem = CONTACT_ITEMS.find((item) => item.id === "cv");

  return (
    <section
      id="contact"
      className="px-5 sm:px-10 py-16 sm:py-24"
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.22)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <motion.h2
            className="type-lead mb-5"
            style={{ maxWidth: "16ch" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {t.home.contactTitle}
          </motion.h2>
          <motion.p
            className="type-body"
            style={{ fontSize: "1rem", maxWidth: "42ch", color: "rgba(14,14,14,0.55)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {t.home.contactBody}
          </motion.p>
        </div>

        <motion.ul
          className="flex flex-col gap-6 sm:gap-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <li>
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-5 hover:opacity-70 transition-opacity"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span
                className="flex shrink-0 items-center justify-center"
                style={{ width: ICON_SLOT_SIZE, height: ICON_SLOT_SIZE }}
              >
                <ContactIcon src={CONTACT_ITEMS[0].iconSrc!} size={40} />
              </span>
              <span>
                <span className="type-eyebrow block mb-1">{t.home.contactEmail}</span>
                <span className="type-meta-value">{SITE.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-5 hover:opacity-70 transition-opacity"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span
                className="flex shrink-0 items-center justify-center"
                style={{ width: ICON_SLOT_SIZE, height: ICON_SLOT_SIZE }}
              >
                <ContactIcon src={CONTACT_ITEMS[1].iconSrc!} size={40} />
              </span>
              <span>
                <span className="type-eyebrow block mb-1">{t.home.contactPhone}</span>
                <span className="type-meta-value">{SITE.phone}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 hover:opacity-70 transition-opacity"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span
                className="flex shrink-0 items-center justify-center"
                style={{ width: ICON_SLOT_SIZE, height: ICON_SLOT_SIZE }}
              >
                <ContactIcon src={CONTACT_ITEMS[2].iconSrc!} size={34} />
              </span>
              <span>
                <span className="type-eyebrow block mb-1">{t.home.contactLinkedin}</span>
                <span className="type-meta-value">linkedin.com/in/oliverhanert</span>
              </span>
            </a>
          </li>
          {cvItem && (
            <li>
              <a
                href={cvItem.href}
                download={cvItem.download}
                className="group flex items-center gap-5 hover:opacity-70 transition-opacity"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span
                  className="flex shrink-0 items-center justify-center"
                  style={{ width: ICON_SLOT_SIZE, height: ICON_SLOT_SIZE }}
                >
                  <ContactIcon src={cvItem.iconSrc!} size={38} />
                </span>
                <span>
                  <span className="type-eyebrow block mb-1">CV</span>
                  <span className="type-meta-value">{t.contacts.downloadCv}</span>
                </span>
              </a>
            </li>
          )}
        </motion.ul>
      </div>

      <div className="max-w-6xl mx-auto mt-12 sm:mt-14">
        <Button href="/contacts" variant="outline">
          {t.nav.contact}
        </Button>
      </div>
    </section>
  );
}
