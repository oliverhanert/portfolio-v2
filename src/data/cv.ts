import type { Locale } from "@/i18n/types";

export type CvExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  note?: string;
};

export type CvContent = {
  roleLine: string;
  profile: string;
  sections: {
    experience: string;
    education: string;
    skills: string;
    tools: string;
    languages: string;
  };
  experience: CvExperience[];
  education: { school: string; degree: string; period: string; location: string }[];
  skills: string[];
  tools: string[];
  languages: string;
  downloadLabel: string;
};

export const cvContent: Record<Locale, CvContent> = {
  da: {
    roleLine: "Digital designer & frontend-udvikler",
    profile:
      "Uddannet multimediedesigner og PBA i webudvikling. Arbejder i krydsfeltet mellem digitalt design, frontend og brugeroplevelse — fra Figma og idé til færdig løsning i React og WordPress. Vant til tværfagligt samarbejde med designere, udviklere og kunder, og til at tage ansvar fra de første overvejelser til leverance.",
    sections: {
      experience: "Erfaring",
      education: "Uddannelse",
      skills: "Kompetencer",
      tools: "Værktøjer",
      languages: "Sprog",
    },
    experience: [
      {
        company: "Peytz & Co.",
        role: "Frontend-udvikler & digital designer",
        period: "2023 – nu",
        location: "København",
        bullets: [
          "Udvikling og design på websites og platforme for bl.a. Folkeskolen, DTU Science Park, Diabetesforeningen, Konstruktørforeningen, Pulsen Gymnasium og Profil Rejser.",
          "React- og Next.js-blokke, UI-design, komponenter og skabeloner i tæt samarbejde med designere og projektledere.",
          "Selvstændigt ansvar for opgaver fra idé og kundedialog til færdig leverance.",
          "Tilgængelighed (WCAG 2.1 AA) integreret i design og implementering.",
        ],
        note: "Tidligere projekter via Kathart, bl.a. Visit Greenland, Mary Fonden, Enhedslisten og Royal Arctic Line.",
      },
      {
        company: "Holdet.dk / Swush",
        role: "Digital designer & indholdsansvarlig",
        period: "2022 – 2023",
        location: "København",
        bullets: [
          "Kampagnesider, SoMe-grafik, nyhedsbreve, blogindhold og motion graphics til annoncering.",
        ],
      },
      {
        company: "Carlsen / Lindhardt & Ringhof (Egmont)",
        role: "Studentermedarbejder",
        period: "2021 – 2022",
        location: "København",
        bullets: ["Korrektur, pressemateriale og grafiske opgaver til events."],
      },
      {
        company: "OrganiCup",
        role: "Lead Coordinator, Internal Logistics",
        period: "2020 – 2021",
        location: "København",
        bullets: ["Intern logistik, kampagner og vedligeholdelse af hjemmeside og webshop."],
      },
    ],
    education: [
      {
        school: "KEA – Københavns Erhvervsakademi",
        degree: "PBA i Webudvikling",
        period: "2022 – 2023",
        location: "København",
      },
      {
        school: "KEA – Københavns Erhvervsakademi",
        degree: "Multimediedesign",
        period: "2020 – 2022",
        location: "København",
      },
    ],
    skills: [
      "Digital produktdesign",
      "UI/UX",
      "Wireframing & prototyping",
      "Designsystemer & komponenter",
      "Brugercentreret design",
      "Tilgængelighed",
      "Kundesamarbejde",
    ],
    tools: [
      "Figma",
      "React",
      "TypeScript",
      "Next.js",
      "WordPress",
      "Umbraco",
      "HTML/CSS/JS",
      "GSAP",
      "Tailwind",
      "AI-værktøjer",
    ],
    languages: "Dansk (modersmål) · Engelsk (professionelt)",
    downloadLabel: "Download PDF",
  },
  en: {
    roleLine: "Digital designer & frontend developer",
    profile:
      "Multimedia design graduate with a professional bachelor in web development. I work where digital design, front-end and user experience meet — from Figma and ideas to finished solutions in React and WordPress. Used to cross-disciplinary collaboration with designers, developers and clients, and to owning work from early thinking through to delivery.",
    sections: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      tools: "Tools",
      languages: "Languages",
    },
    experience: [
      {
        company: "Peytz & Co.",
        role: "Frontend developer & digital designer",
        period: "2023 – present",
        location: "Copenhagen",
        bullets: [
          "Development and design on websites and platforms for clients including Folkeskolen, DTU Science Park, Diabetesforeningen, Konstruktørforeningen, Pulsen Gymnasium and Profil Rejser.",
          "React and Next.js blocks, UI design, components and templates in close collaboration with designers and project managers.",
          "Independent responsibility from idea and client dialogue through to finished delivery.",
          "Accessibility (WCAG 2.1 AA) integrated into design and implementation.",
        ],
        note: "Earlier projects via Kathart, including Visit Greenland, Mary Fonden, Enhedslisten and Royal Arctic Line.",
      },
      {
        company: "Holdet.dk / Swush",
        role: "Digital designer & content lead",
        period: "2022 – 2023",
        location: "Copenhagen",
        bullets: [
          "Campaign pages, social graphics, newsletters, blog content and motion graphics for advertising.",
        ],
      },
      {
        company: "Carlsen / Lindhardt & Ringhof (Egmont)",
        role: "Student assistant",
        period: "2021 – 2022",
        location: "Copenhagen",
        bullets: ["Proofreading, press material and graphic tasks for events."],
      },
      {
        company: "OrganiCup",
        role: "Lead Coordinator, Internal Logistics",
        period: "2020 – 2021",
        location: "Copenhagen",
        bullets: ["Internal logistics, campaigns and maintenance of website and webshop."],
      },
    ],
    education: [
      {
        school: "KEA – Copenhagen School of Design and Technology",
        degree: "Professional Bachelor in Web Development",
        period: "2022 – 2023",
        location: "Copenhagen",
      },
      {
        school: "KEA – Copenhagen School of Design and Technology",
        degree: "Multimedia Design",
        period: "2020 – 2022",
        location: "Copenhagen",
      },
    ],
    skills: [
      "Digital product design",
      "UI/UX",
      "Wireframing & prototyping",
      "Design systems & components",
      "User-centred design",
      "Accessibility",
      "Client collaboration",
    ],
    tools: [
      "Figma",
      "React",
      "TypeScript",
      "Next.js",
      "WordPress",
      "Umbraco",
      "HTML/CSS/JS",
      "GSAP",
      "Tailwind",
      "AI tools",
    ],
    languages: "Danish (native) · English (professional)",
    downloadLabel: "Download PDF",
  },
};
