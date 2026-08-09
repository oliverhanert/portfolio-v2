import img001 from "@/assets/projects/001-hero.jpg";
import img001g1 from "@/assets/projects/001-gallery-1.jpg";
import img001g2 from "@/assets/projects/001-gallery-2.jpg";
import img002 from "@/assets/projects/002-hero.webp";
import img002Scene from "@/assets/projects/002-hero.png";
import img002Composite from "@/assets/projects/002-gallery-composite.png";
import img002ScreenHome from "@/assets/projects/002-screen-home.png";
import img002ScreenPlus from "@/assets/projects/002-screen-plus.png";
import img003 from "@/assets/projects/003-hero.png";
import img003g1 from "@/assets/projects/003-gallery-1.png";
import img003g2 from "@/assets/projects/003-gallery-2.png";
import img004 from "@/assets/projects/004-hero.png";
import img004g1 from "@/assets/projects/004-gallery-1.png";
import img004g2 from "@/assets/projects/004-gallery-2.png";
import img005 from "@/assets/projects/005-hero.png";
import img007 from "@/assets/projects/007-hero.jpg";
import img008 from "@/assets/projects/008-hero.jpg";
import img008g1 from "@/assets/projects/008-gallery-1.png";
import img008g2 from "@/assets/projects/008-gallery-2.png";
import img009 from "@/assets/projects/009-hero.jpg";
import img010 from "@/assets/projects/010-hero.webp";
import img011 from "@/assets/projects/011-hero.jpg";
import img012 from "@/assets/projects/012-hero.webp";
import img013 from "@/assets/projects/013-hero.jpg";
import img014 from "@/assets/projects/014-hero.webp";
import img015 from "@/assets/projects/015-hero.jpg";
import img016 from "@/assets/projects/016-hero.jpg";
import img017 from "@/assets/projects/017-hero.jpg";

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
  showGalleryOnFeatured?: boolean;
  inDevelopment?: boolean;
  gallery?: ProjectGalleryItem[];
};

export const FEATURED_PROJECT_IDS = ["002", "008", "004", "001"] as const;

export const SECONDARY_PROJECT_IDS = [
  "007",
  "014",
  "003",
  "005",
  "009",
  "010",
  "011",
  "012",
  "013",
  "015",
  "016",
  "017",
] as const;

function caseGallery(
  hero: string,
  title: string,
  extras: [string, string],
): ProjectGalleryItem[] {
  return [
    { src: hero, alt: `${title}, overblik`, aspect: "16/9", wide: true },
    {
      src: extras[0],
      alt: `${title}, detalje`,
      aspect: "4/3",
      fit: "cover",
      offset: "right",
      wide: false,
    },
    {
      src: extras[1],
      alt: `${title}, stemning`,
      aspect: "4/3",
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
    featured: true,
    gallery: caseGallery(img001, "DTU Science Park", [img001g1, img001g2]),
  },
  {
    id: "002",
    year: "2024",
    categoryKey: "Fagmedie",
    image: img002,
    tech: ["React", "Next.js", "GraphQL", "Tailwind CSS"],
    agency: "Peytz & Co.",
    url: "https://folkeskolen.dk",
    accent: "#0000fe",
    featured: true,
    showGalleryOnFeatured: false,
    gallery: [
      {
        src: img002Scene,
        alt: "Folkeskolen, elever på skoletur",
        aspect: "16/9",
        wide: true,
        fit: "cover",
      },
      {
        src: img002Composite,
        alt: "Folkeskolen, oversigt over folkeskolen.dk og Folkeskolen Plus+",
        wide: true,
        fit: "contain",
        bg: "#e8e3d9",
      },
      {
        src: img002ScreenHome,
        alt: "Folkeskolen, forsiden",
        aspect: "4/3",
        fit: "contain",
        bg: "#ededeb",
        offset: "right",
        wide: false,
      },
      {
        src: img002ScreenPlus,
        alt: "Folkeskolen Plus+, medlemsportal",
        aspect: "4/3",
        fit: "contain",
        bg: "#ededeb",
        wide: false,
      },
    ],
  },
  {
    id: "003",
    year: "2024",
    categoryKey: "Rejsebureau",
    image: img003,
    tech: ["WordPress", "Multisite", "Gutenberg", "SCSS", "HubSpot"],
    agency: "Peytz & Co.",
    url: "https://www.profil-rejser.dk",
    accent: "#0c6b8a",
    gallery: [
      {
        src: img003,
        alt: "Profil Rejser, hero med tropisk destination",
        aspect: "16/9",
        wide: true,
      },
      {
        src: img003g1,
        alt: "Profil Rejser, Grønlandsrejse med skib og isfjelde",
        aspect: "4/3",
        fit: "cover",
        offset: "right",
        wide: false,
      },
      {
        src: img003g2,
        alt: "Profil Rejser, bjerglandskab som hero-billede",
        aspect: "4/3",
        fit: "cover",
        wide: false,
      },
    ],
  },
  {
    id: "004",
    year: "2026",
    categoryKey: "Medlemsplatform",
    image: img004,
    tech: ["WordPress", "Gutenberg", "SCSS", "PHP"],
    agency: "Peytz & Co.",
    url: "https://kf.wp.prod.combell.peytz.dk",
    accent: "#152e19",
    featured: true,
    inDevelopment: true,
    gallery: [
      {
        src: img004,
        alt: "Konstruktørforeningen, bygningskonstruktører på byggeplads",
        aspect: "16/9",
        wide: true,
        fit: "cover",
      },
      {
        src: img004g1,
        alt: "Konstruktørforeningen, forsiden med grøn hero",
        fit: "contain",
        bg: "#f4f3f1",
        wide: false,
      },
      {
        src: img004g2,
        alt: "Konstruktørforeningen, kurser og arrangementer",
        fit: "contain",
        bg: "#f4f3f1",
        wide: false,
      },
    ],
  },
  {
    id: "005",
    year: "2023",
    categoryKey: "Brand & website",
    image: img005,
    tech: ["WordPress", "SCSS", "Gutenberg"],
    agency: "Peytz & Co.",
    url: "https://www.pulsen.dk",
    accent: "#dc2626",
    gallery: [
      {
        src: img005,
        alt: "Pulsen Gymnasium, website mockup",
        aspect: "16/9",
        wide: true,
        fit: "contain",
        bg: "#ebe4d8",
      },
    ],
  },
  {
    id: "007",
    year: "2026",
    categoryKey: "Patientorganisation",
    image: img007,
    tech: ["WordPress", "Gutenberg", "SCSS", "WCAG 2.1 AA"],
    agency: "Peytz & Co.",
    url: "https://diabetes.wp.prod.combell.peytz.dk",
    accent: "#0369a1",
    inDevelopment: true,
  },
  {
    id: "008",
    year: "2025",
    categoryKey: "Patientorganisation",
    image: img008,
    tech: ["WordPress", "Gutenberg", "Custom Blocks", "Arrigoo", "SCSS"],
    agency: "Peytz & Co.",
    url: "https://www.gigtforeningen.dk",
    accent: "#fe2909",
    featured: true,
    gallery: [
      {
        src: img008,
        alt: "Gigtforeningen, hero med kampagnen Kampen mod smerterne",
        aspect: "16/9",
        wide: true,
        fit: "cover",
      },
      {
        src: img008g1,
        alt: "Gigtforeningen, forsiden med hero og medlemsvalg",
        fit: "contain",
        bg: "#f1eee4",
        wide: false,
      },
      {
        src: img008g2,
        alt: "Gigtforeningen, underside med illustration og indhold",
        fit: "contain",
        bg: "#f1eee4",
        wide: false,
      },
    ],
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
  },
  {
    id: "015",
    year: "2022",
    categoryKey: "Digital design",
    image: img015,
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
