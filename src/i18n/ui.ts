import type { Locale } from "./types";

export const ui = {
  da: {
    nav: {
      contact: "Kontakt",
      back: "← Tilbage",
    },
    home: {
      heroLines: [
        "Webudvikler med passion for design.",
        "Jeg er uddannet multimediedesigner og arbejder som frontend-udvikler i København. Jeg bygger websites og platforme i WordPress og React, og jeg stræber altid efter at skabe løsninger der både fungerer og føles rigtige.",
      ],
      projectsLabel: "Projekter",
      projectsIntro:
        "Et udpluk af websites, platforme og kampagner jeg har været med til at bygge.",
      cta: "Vil du høre mere?",
      ctaButton: "Kontakt",
      clientsTitle: "Kunder jeg har arbejdet med",
      funboxSticker: "Åbn Funbox",
      projectsKeyboardHint: "Brug ↑ ↓ og Enter til at navigere projekter",
    },
    project: {
      visitSite: "Besøg sitet",
      readCase: "Læs case",
      next: "Se næste",
      nextEyebrow: "Næste case",
      year: "År",
      type: "Type",
      role: "Rolle",
      agency: "Bureau",
      stack: "Stack",
      close: "Luk",
      galleryTitle: "Billeder fra projektet",
    },
    funbox: {
      title: ["Fun", "Box"],
      intro: "Egne eksperimenter og ting jeg lavede fordi jeg gad. Ikke fordi nogen bad mig.",
      stickerEyebrow: "Psst",
      stickerCta: "Åbn mig",
      audioPlay: "Funk på",
      audioPause: "Funk af",
      audioSetMood: "Sæt stemningen",
    },
    contacts: {
      title: "Kontakt",
      roleLine: "Digital designer & frontend-udvikler · Peytz & Co. · København",
      downloadCv: "Download CV",
    },
    notFound: {
      code: "404",
      title: "Siden findes ikke",
      body: "Den her URL er vist løbet fra koden. Måske er den flyttet, måske har du tastet forkert. Måske er den i Funbox.",
      home: "Til forsiden",
      funbox: "Åbn Funbox",
    },
    meta: {
      title: "Oliver Hanert · Frontend-udvikler & digital designer",
      description:
        "Portfolio for Oliver Hanert. Frontend-udvikler og digital designer i København. Websites, platforme og digitale produkter for organisationer og brands.",
    },
  },
  en: {
    nav: {
      contact: "Contact",
      back: "← Back",
    },
    home: {
      heroLines: [
        "Web developer with a passion for design.",
        "I'm a multimedia design graduate working as a frontend developer in Copenhagen. I build websites and platforms in WordPress and React, and I always aim to create solutions that work well and feel right.",
      ],
      projectsLabel: "Projects",
      projectsIntro:
        "A selection of websites, platforms and campaigns I've helped build.",
      cta: "Want to know more?",
      ctaButton: "Contact",
      clientsTitle: "Clients I've worked with",
      funboxSticker: "Open Funbox",
      projectsKeyboardHint: "Use ↑ ↓ and Enter to browse projects",
    },
    project: {
      visitSite: "Visit site",
      readCase: "Read case",
      next: "Next project",
      nextEyebrow: "Next case",
      year: "Year",
      type: "Type",
      role: "Role",
      agency: "Agency",
      stack: "Stack",
      close: "Close",
      galleryTitle: "Project imagery",
    },
    funbox: {
      title: ["Fun", "Box"],
      intro: "Personal experiments and things I made because I wanted to. Not because anyone asked.",
      stickerEyebrow: "Psst",
      stickerCta: "Open me",
      audioPlay: "Funk on",
      audioPause: "Funk off",
      audioSetMood: "Set the mood",
    },
    contacts: {
      title: "Contact",
      roleLine: "Digital designer & frontend developer · Peytz & Co. · Copenhagen",
      downloadCv: "Download CV",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      body: "This URL seems to have escaped the codebase. Maybe it moved, maybe you mistyped. Maybe it's in the Funbox.",
      home: "Back home",
      funbox: "Open Funbox",
    },
    meta: {
      title: "Oliver Hanert · Frontend developer & digital designer",
      description:
        "Portfolio of Oliver Hanert. Frontend developer and digital designer in Copenhagen. Websites, platforms and digital products for organisations and brands.",
    },
  },
} as const;

export type UiStrings = (typeof ui)[Locale];
