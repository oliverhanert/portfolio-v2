import cvIcon from "@/assets/contact/cv.png";
import mailIcon from "@/assets/contact/mail.png";
import phoneIcon from "@/assets/contact/phone.png";
import linkedinIcon from "@/assets/contact/linkedin.png";
import { SITE } from "@/lib/constants";

export type ContactItemId = "email" | "phone" | "linkedin" | "cv";

export type ContactItem = {
  id: ContactItemId;
  value: string;
  iconSrc?: string;
  iconSize?: number;
  subtitle?: string;
  href?: string;
  external?: boolean;
  download?: string;
  action?: "print";
};

/** Fixed column width so contact text aligns vertically across rows */
export const ICON_SLOT_SIZE = 52;

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "email",
    href: `mailto:${SITE.email}`,
    value: SITE.email,
    iconSrc: mailIcon,
    iconSize: 44,
  },
  {
    id: "phone",
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    value: SITE.phone,
    iconSrc: phoneIcon,
    iconSize: 44,
  },
  {
    id: "linkedin",
    href: SITE.linkedin,
    value: "LinkedIn",
    subtitle: "linkedin.com/in/oliverhanert",
    iconSrc: linkedinIcon,
    iconSize: 34,
    external: true,
  },
  {
    id: "cv",
    href: "/cv.pdf",
    value: "",
    iconSrc: cvIcon,
    iconSize: 40,
    download: "CV-2026-Oliver-Dyrup-Hanert.pdf",
  },
];
