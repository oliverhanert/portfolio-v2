import img001 from "@/assets/projects/001-hero.jpg";
import img002 from "@/assets/projects/002-hero.webp";
import img003 from "@/assets/projects/003-hero.jpg";
import img004 from "@/assets/projects/004-hero.jpg";
import img005 from "@/assets/projects/005-hero.jpg";
import img007 from "@/assets/projects/007-hero.jpg";
import img008 from "@/assets/projects/008-hero.jpg";
import img009 from "@/assets/projects/009-hero.jpg";
import img010 from "@/assets/projects/010-hero.webp";
import img011 from "@/assets/projects/011-hero.jpg";
import img012 from "@/assets/projects/012-hero.webp";
import img013 from "@/assets/projects/013-hero.jpg";
import img014 from "@/assets/projects/014-hero.webp";
import img016 from "@/assets/projects/016-hero.jpg";
import img017 from "@/assets/projects/017-hero.svg";

import type { ProjectGalleryItem } from "./types";

export type ProjectBase = {
  id: string;
  year: string;
  categoryKey: string;
  image: string;
  tech: string[];
  url?: string;
  agency?: string;
  accent: string;
  featured?: boolean;
  gallery?: ProjectGalleryItem[];
};

export const FEATURED_PROJECT_IDS = ["002", "007", "004", "014"] as const;

export const SECONDARY_PROJECT_IDS = [
  "001",
  "003",
  "005",
  "008",
  "009",
  "010",
  "011",
  "012",
  "013",
  "015",
  "016",
  "017",
] as const;

function caseGallery(hero: string, title: string): ProjectGalleryItem[] {
  return [
    { src: hero, alt: `${title} — overblik`, aspect: "16/9", wide: true },
    {
      src: hero,
      alt: `${title} — detalje`,
      aspect: "4/5",
      fit: "cover",
      offset: "right",
      wide: false,
    },
    {
      src: hero,
      alt: `${title} — mobil`,
      aspect: "9/16",
      fit: "cover",
      wide: false,
    },
  ];
}

export const PROJECTS_BASE: ProjectBase[] = [
  {
    id: "001",
    year: "2022",
    categoryKey: "Website",
    image: img001,
    tech: ["WordPress", "Elementor", "JavaScript", "WPML", "HubSpot"],
    agency: "Kathart",
    url: "https://dtusciencepark.com",
    accent: "#1c3d5a",
  },
  {
    id: "002",
    year: "2024",
    categoryKey: "Fagmedie",
    image: img002,
    tech: ["React", "Next.js", "GraphQL", "Tailwind CSS"],
    agency: "Peytz & Co.",
    url: "https://folkeskolen.dk",
    accent: "#b91c1c",
    featured: true,
    gallery: caseGallery(img002, "Folkeskolen"),
  },
  {
    id: "003",
    year: "2024",
    categoryKey: "Rejsebureau",
    image: img003,
    tech: ["React", "TypeScript", "Umbraco", "SCSS"],
    agency: "Peytz & Co.",
    url: "https://www.profil-rejser.dk",
    accent: "#0c6b8a",
  },
  {
    id: "004",
    year: "2023",
    categoryKey: "Medlemsplatform",
    image: img004,
    tech: ["React", "TypeScript", "Umbraco", "SCSS"],
    agency: "Peytz & Co.",
    url: "https://kf.wp.prod.combell.peytz.dk",
    accent: "#374151",
    featured: true,
    gallery: caseGallery(img004, "Konstruktørforeningen"),
  },
  {
    id: "005",
    year: "2023",
    categoryKey: "Brand & website",
    image: img005,
    tech: ["React", "TypeScript", "Umbraco", "SCSS"],
    agency: "Peytz & Co.",
    url: "https://www.pulsen.dk",
    accent: "#dc2626",
  },
  {
    id: "007",
    year: "2023",
    categoryKey: "Patientorganisation",
    image: img007,
    tech: ["React", "TypeScript", "Umbraco", "WCAG 2.1 AA"],
    agency: "Peytz & Co.",
    url: "https://diabetes.wp.prod.combell.peytz.dk",
    accent: "#0369a1",
    featured: true,
    gallery: caseGallery(img007, "Diabetesforeningen"),
  },
  {
    id: "008",
    year: "2023",
    categoryKey: "Patientorganisation",
    image: img008,
    tech: ["React", "TypeScript", "Umbraco", "SCSS"],
    agency: "Peytz & Co.",
    url: "https://www.gigtforeningen.dk",
    accent: "#7c3aed",
  },
  {
    id: "009",
    year: "2023",
    categoryKey: "Patientorganisation",
    image: img009,
    tech: ["React", "TypeScript", "Umbraco", "WCAG 2.1 AA"],
    agency: "Peytz & Co.",
    url: "https://www.scleroseforeningen.dk",
    accent: "#059669",
  },
  {
    id: "010",
    year: "2022",
    categoryKey: "Fond & NGO",
    image: img010,
    tech: ["WordPress", "Greenshift", "GSAP", "JavaScript", "Figma"],
    url: "https://aftryk.maryfonden.dk",
    accent: "#9333ea",
  },
  {
    id: "011",
    year: "2022",
    categoryKey: "Turisme",
    image: img011,
    tech: ["React", "TypeScript", "Umbraco", "SCSS"],
    url: "https://visitgreenland.com",
    accent: "#0284c7",
  },
  {
    id: "012",
    year: "2024",
    categoryKey: "Kampagne",
    image: img012,
    tech: ["WordPress", "JavaScript", "CSS"],
    agency: "Kathart",
    url: "https://enhedslisten.dk",
    accent: "#be123c",
  },
  {
    id: "013",
    year: "2023",
    categoryKey: "Platform",
    image: img013,
    tech: ["WordPress", "JavaScript", "CSS", "REST API"],
    agency: "Kathart",
    url: "https://royalarcticline.com",
    accent: "#1e40af",
  },
  {
    id: "014",
    year: "2025",
    categoryKey: "Vidensplatform",
    image: img014,
    tech: ["WordPress", "Gutenberg", "Custom Blocks", "CSS"],
    agency: "Kathart",
    url: "https://vaerdibyg.dk",
    accent: "#ca8a04",
    featured: true,
    gallery: caseGallery(img014, "Værdibyg"),
  },
  {
    id: "015",
    year: "2022",
    categoryKey: "Digital design",
    image: "",
    tech: ["WordPress", "CSS/SCSS", "Figma", "Motion graphics"],
    agency: "Holdet.dk / Swush",
    url: "https://holdet.dk",
    accent: "#e11d48",
  },
  {
    id: "016",
    year: "2022",
    categoryKey: "Webshop",
    image: img016,
    tech: ["WordPress", "Greenshift", "CSS/SCSS", "Scannet"],
    url: "https://bjornparfume.dk",
    accent: "#78716c",
  },
  {
    id: "017",
    year: "2021",
    categoryKey: "Website",
    image: img017,
    tech: ["GoBasic", "CSS/SCSS", "JavaScript", "Illustrator"],
    agency: "Norion",
    url: "https://www.skills4reuse.com",
    accent: "#16a34a",
  },
];

export function heroImageUrl(image: string, _size: "hero" | "detail" = "hero") {
  return image;
}
