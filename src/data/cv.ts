import type { Locale } from "@/i18n/types";

export type CvJob = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type CvEducation = {
  degree: string;
  school: string;
  period: string;
};

export type CvContent = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  sections: {
    experience: string;
    education: string;
    about: string;
    skills: string;
    tools: string;
    languages: string;
    links: string;
  };
  experience: CvJob[];
  education: CvEducation[];
  about: {
    email: string;
    phone: string;
    location: string;
    detail: string;
  };
  skills: string[];
  tools: string;
  languages: string[];
  links: { label: string; href: string }[];
  downloadLabel: string;
};

export const cvContent: Record<Locale, CvContent> = {
  da: {
    titleLine1: "Oliver",
    titleLine2: "Dyrup Hanert",
    subtitle: "Webudvikler,\ndigital designer",
    sections: {
      experience: "Erfaring",
      education: "Uddannelse",
      about: "Om mig",
      skills: "Andre kundskaber",
      tools: "Værktøjer & teknologier",
      languages: "Sprog",
      links: "Find mig her",
    },
    experience: [
      {
        role: "Frontend-udvikler & digital designer",
        company: "Peytz & Co.",
        period: "Aug 2025 – Nu, København",
        description:
          "Udvikling og design i React, Next.js og WordPress. Tæt samarbejde med designere, udviklere og projektledere, fra UI-design til implementering og kundedialog. Bl.a. Folkeskolen, Diabetesforeningen, Konstruktørforeningen, Pulsen og Profil Rejser.",
      },
      {
        role: "Frontend-udvikler & WordPress-konfigurator",
        company: "KathArt Interactive",
        period: "Jan 2023 – Aug 2025, København",
        description:
          "Direkte samarbejde med mine to chefer og designafdelingen, hvor min primære opgave bestod i at opbygge og udvikle hjemmesider samt rådgive og supportere kunder. Jeg har lavet store og komplekse løsninger til kunder som DTU Science Park, Mary Fonden, Visit Greenland og Enhedslisten.",
      },
      {
        role: "Digital designer & indholdsansvarlig",
        company: "Holdet.dk / Swush",
        period: "Jan 2022 – Jan 2023 · 1 år, København",
        description:
          "Opbygning og design af kampagnesider, grafik og indhold til nyhedsbreve, tekst og indhold til SoMe og blogs samt diverse animationer/motion graphics til annoncering og nyhedsbreve.",
      },
      {
        role: "Studentermedarbejder",
        company: "Carlsen/Lindhardt & Ringhof Forlag – Egmont",
        period: "Sep 2021 – Jan 2022 · 5 mdr., København",
        description:
          "Korrekturlæsning af manuskripter, distribution af presserelateret materiale samt grafiske opgaver til events.",
      },
      {
        role: "Lead Coordinator – Internal Logistics",
        company: "OrganiCup",
        period: "Maj 2020 – Aug 2021 · 1 år, 4 mdr., København",
        description:
          "Hovedansvarlig for intern logistik, planlægning af globale kampagner samt vedligeholdelse af hjemmeside og webshop.",
      },
    ],
    education: [
      {
        degree: "PBA i Webudvikling",
        school: "KEA – Københavns Erhvervsakademi",
        period: "Aug 2022 – Jan 2023, København",
      },
      {
        degree: "Erhvervsakademiuddannelse i Multimediedesign",
        school: "KEA – Københavns Erhvervsakademi",
        period: "Aug 2020 – Aug 2022, København",
      },
    ],
    about: {
      email: "o.hanert@gmail.com",
      phone: "(+45) 60810660",
      location: "27 år, bor i København V",
      detail: "Opvokset og boet 20 år i Fredensborg",
    },
    skills: [
      "Webudvikling",
      "UI/UX design",
      "Wireframing & prototyping",
      "Design-research",
      "Kundesupport & rådgivning",
    ],
    tools:
      "HTML/CSS/JS, React, TypeScript, Next.js, WordPress, Umbraco, Figma, GSAP, Adobe Creative Suite, HubSpot",
    languages: ["Dansk (modersmål)", "Engelsk (professionelt)"],
    links: [
      { label: "linkedin.com/in/oliverhanert", href: "https://linkedin.com/in/oliverhanert" },
      { label: "oliverhanert.dk", href: "https://oliverhanert.dk" },
    ],
    downloadLabel: "Download PDF",
  },
  en: {
    titleLine1: "Oliver",
    titleLine2: "Dyrup Hanert",
    subtitle: "Web developer,\ndigital designer",
    sections: {
      experience: "Experience",
      education: "Education",
      about: "About",
      skills: "Skills",
      tools: "Tools & technologies",
      languages: "Languages",
      links: "Find me",
    },
    experience: [
      {
        role: "Frontend developer & digital designer",
        company: "Peytz & Co.",
        period: "Aug 2025 – Present, Copenhagen",
        description:
          "Development and design on websites and platforms in React, Next.js and WordPress. I work closely with designers, developers and project managers, owning tasks from UI design and components through to front-end implementation and client dialogue. Clients and projects include Folkeskolen, Diabetesforeningen, Konstruktørforeningen, Pulsen Gymnasium and Profil Rejser.",
      },
      {
        role: "Frontend developer & WordPress configurator",
        company: "KathArt Interactive",
        period: "Jan 2023 – Aug 2025, Copenhagen",
        description:
          "Direct collaboration with leadership and the design department, building and developing websites and advising clients. Delivered large, complex solutions for clients including DTU Science Park, Mary Fonden, Visit Greenland and Enhedslisten.",
      },
      {
        role: "Digital designer & content lead",
        company: "Holdet.dk / Swush",
        period: "Jan 2022 – Jan 2023 · 1 year, Copenhagen",
        description:
          "Campaign pages, newsletter graphics and content, social media and blog content, plus motion graphics for advertising and newsletters.",
      },
      {
        role: "Student assistant",
        company: "Carlsen / Lindhardt & Ringhof – Egmont",
        period: "Sep 2021 – Jan 2022 · 5 months, Copenhagen",
        description: "Proofreading manuscripts, press distribution and graphic tasks for events.",
      },
      {
        role: "Lead Coordinator – Internal Logistics",
        company: "OrganiCup",
        period: "May 2020 – Aug 2021 · 1 year, 4 months, Copenhagen",
        description:
          "Responsible for internal logistics, global campaign planning and maintenance of website and webshop.",
      },
    ],
    education: [
      {
        degree: "Professional Bachelor in Web Development",
        school: "KEA – Copenhagen School of Design and Technology",
        period: "Aug 2022 – Jan 2023, Copenhagen",
      },
      {
        degree: "Academy Profession in Multimedia Design",
        school: "KEA – Copenhagen School of Design and Technology",
        period: "Aug 2020 – Aug 2022, Copenhagen",
      },
    ],
    about: {
      email: "o.hanert@gmail.com",
      phone: "(+45) 60810660",
      location: "27, based in Copenhagen V",
      detail: "Grew up in Fredensborg",
    },
    skills: [
      "Web development",
      "UI/UX design",
      "Wireframing & prototyping",
      "Design research",
      "Client support & consulting",
    ],
    tools:
      "HTML/CSS/JS, React, TypeScript, Next.js, WordPress, Umbraco, Figma, GSAP, Adobe Creative Suite, HubSpot",
    languages: ["Danish (native)", "English (professional)"],
    links: [
      { label: "linkedin.com/in/oliverhanert", href: "https://linkedin.com/in/oliverhanert" },
      { label: "oliverhanert.dk", href: "https://oliverhanert.dk" },
    ],
    downloadLabel: "Download PDF",
  },
};
