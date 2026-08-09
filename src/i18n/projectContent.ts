import type { Locale } from "./types";

export type ProjectCopy = {
  title: string;
  tagline: string;
  story: string;
  highlight?: string;
  role: string;
  labels: string[];
  imageAlt: string;
};

export const projectContent: Record<Locale, Record<string, ProjectCopy>> = {
  da: {
    "001": {
      title: "DTU Science Park",
      tagline: "Nyt website udviklet som del af et rebrand og en ny visuel identitet.",
      story:
        "DTU Science Park skulle have en hjemmeside, der matchede en ny visuel identitet og kunne håndtere komplekst indhold, flersprogethed og specialbyggede moduler. Jeg udviklede løsningen i WordPress med fokus på struktur, performance og en oplevelse, der føltes moderne uden at miste faglig tyngde.",
      role: "Webudvikler",
      labels: ["WordPress", "Frontend", "Rebrand"],
      imageAlt: "DTU Science Park forsiden",
    },
    "002": {
      title: "Folkeskolen",
      tagline: "Løbende udvikling og designnære forbedringer på et nationalt fagmedie.",
      story:
        "Folkeskolen er et indholdstungt digitalt produkt med høje krav til læsbarhed, struktur og overblik. Jeg arbejdede med løbende frontendudvikling og forbedringer af moduler og indholdskomponenter med fokus på, at nye elementer skulle fungere godt både visuelt, redaktionelt og responsivt. Det er en type projekt, jeg trives i, fordi detaljerne i layout, hierarki og spacing har stor betydning for den samlede brugeroplevelse.",
      highlight:
        "Det er et projekt, der viser den type arbejde, jeg især motiveres af: at forbedre en eksisterende digital løsning med respekt for både indholdet, brugeren og den tekniske virkelighed.",
      role: "Frontend-udvikler",
      labels: ["Frontend", "Platform", "Indholdsstruktur", "React"],
      imageAlt: "Folkeskolen forsiden",
    },
    "003": {
      title: "Profil Rejser",
      tagline: "Løbende udvikling og forbedringer på tværs af indhold, funktioner og brugerrejser.",
      story:
        "Profil Rejser og Bella Vista kræver en platform, hvor booking, destinationer og brandudtryk hænger sammen på tværs af to brands. Jeg arbejder løbende med frontend, UI og forbedringer af flows i React og TypeScript — med særligt fokus på, at rejseindhold skal være let at finde og vedligeholde.",
      role: "Frontend-udvikler & UI-designer",
      labels: ["Frontend", "React", "Designimplementering"],
      imageAlt: "Profil Rejser forsiden",
    },
    "004": {
      title: "Konstruktørforeningen",
      tagline: "Hjemmeside og medlemsplatform med fokus på struktur, funktion og overblik.",
      story:
        "Konstruktørforeningen var en løsning, hvor information, medlemsfunktioner og brugeroplevelse skulle spille sammen. Jeg arbejdede med frontend og den konkrete realisering af løsningen med fokus på, at både indhold og funktionalitet stod tydeligt frem på tværs af skærmstørrelser. Projektet viser godt den type opgaver, hvor struktur og praktisk brugbarhed er mindst lige så vigtige som det visuelle udtryk.",
      role: "Frontend-udvikler",
      labels: ["Frontend", "Platform", "Medlemsplatform", "React"],
      imageAlt: "Konstruktørforeningen forsiden",
    },
    "005": {
      title: "Pulsen Gymnasium",
      tagline: "Digital identitet og website for et nyt sportsgymnasium.",
      story:
        "Pulsen skulle have en digital tilstedeværelse, der formidlede skolens energi og identitet — ikke bare information om uddannelser. Jeg udviklede frontend og bidrog med digitalt design i React og TypeScript, hvor farver, typografi og layouts skulle føles unge og ambitiøse.",
      role: "Frontend-udvikler & digital designer",
      labels: ["Frontend", "Designimplementering", "Brand"],
      imageAlt: "Interiør på Pulsen Gymnasium med grafik og stemningsbilleder",
    },
    "007": {
      title: "Diabetes\u00ADforeningen",
      tagline: "Nyt website med fokus på tilgængelighed, tydelighed og en varm digital tone.",
      story:
        "Jeg arbejdede med frontendimplementering og den designnære omsætning af løsningen til et færdigt website. Her var det vigtigt at balancere et imødekommende visuelt udtryk med tydelig struktur, god læsbarhed og en løsning, der fungerer for mange forskellige brugere. Projektet er med, fordi det viser den type arbejde, hvor oplevelse, indhold og tilgængelighed skal hænge tæt sammen.",
      highlight:
        "Når målgruppen er bred, bliver detaljer som kontraster, typografi, spacing og tydelige næste skridt ekstra vigtige.",
      role: "Frontend-udvikler & designimplementering",
      labels: ["Frontend", "Designimplementering", "Tilgængelighed", "React"],
      imageAlt: "Diabetesforeningen forsiden",
    },
    "008": {
      title: "Gigtforeningen",
      tagline: "Redesign med fokus på varme, tydelighed og en tryg brugeroplevelse.",
      story:
        "Gigtforeningen skulle have et site, der føltes nært og menneskeligt uden at miste faglig tyngde. Jeg byggede frontend i React med fokus på overskuelig navigation, genkendelige skabeloner og et udtryk, der møder brugerne der, hvor de er.",
      role: "Frontend-udvikler",
      labels: ["Frontend", "Redesign", "Patientorganisation"],
      imageAlt: "Gigtforeningen forsiden",
    },
    "009": {
      title: "Scleroseforeningen",
      tagline: "Tilgængelig og overskuelig platform for en bred målgruppe.",
      story:
        "Scleroseforeningen skulle fungere for en meget bred målgruppe — fra nydiagnosticerede til sundhedsprofessionelle. Jeg udviklede frontend med tilgængelighed, klart informationshierarki og forskellige indgangspunkter for medlemmer, frivillige og professionelle.",
      role: "Frontend-udvikler",
      labels: ["Frontend", "Tilgængelighed", "Platform"],
      imageAlt: "Scleroseforeningen forsiden",
    },
    "010": {
      title: "AFTRYK · Mary Fonden",
      tagline: "Kampagnesite udviklet til en lancering med stor offentlig synlighed.",
      story:
        "AFTRYK var et kampagnesite, hvor design, animation og teknisk execution skulle hænge sammen fra start. Jeg udviklede løsningen i WordPress med scroll-baserede animationer og et visuelt udtryk, der skulle bære en vigtig samfundsag.",
      role: "Webudvikler",
      labels: ["WordPress", "Kampagne", "Animation"],
      imageAlt: "AFTRYK kampagnesite for Mary Fonden",
    },
    "011": {
      title: "Visit Greenland",
      tagline: "Website udviklet som del af en ny digital og visuel retning.",
      story:
        "Visit Greenland skulle have et website, der inspirerede til rejser og formidlede praktisk information på tværs af sprog. Jeg arbejdede med frontend og digitalt design — billedtunge layouts og en struktur, der lod Grønland tale for sig selv.",
      role: "Frontend-udvikler & digital designer",
      labels: ["Frontend", "Turisme", "Rebrand"],
      imageAlt: "Visit Greenland forsiden",
    },
    "012": {
      title: "Enhedslisten",
      tagline: "Kampagnesite udviklet til Europa-Parlamentsvalget 2024.",
      story:
        "Enhedslistens kampagnesite skulle være klar til valgkamp under tidspres. Jeg byggede hele sitet i WordPress med custom tema og JavaScript i tæt samarbejde med kundens design- og marketingteam.",
      role: "Webudvikler",
      labels: ["WordPress", "Kampagne", "Frontend"],
      imageAlt: "Enhedslisten forsiden",
    },
    "013": {
      title: "Royal Arctic Line",
      tagline: "Platform med fokus på struktur, funktionalitet og adgang til information.",
      story:
        "Royal Arctic Line skulle vise rutedata, fragt og bookinginformation, der stemmer overens med virkeligheden. Jeg byggede sitet i WordPress med custom integrationer og løbende designopgaver i tæt samarbejde med kunden.",
      role: "Webudvikler & digital designer",
      labels: ["WordPress", "Platform", "Integration"],
      imageAlt: "Royal Arctic Line forsiden",
    },
    "014": {
      title: "Værdibyg",
      tagline: "Vidensplatform med fokus på læsbarhed, struktur og adgang til indhold.",
      story:
        "På Værdibyg arbejdede jeg med frontend og implementering på en platform, hvor informationsarkitektur og præsentation er afgørende. Her handlede det om at skabe ro, tydelighed og et layout, der gør det lettere for brugeren at orientere sig i komplekst indhold. Jeg har valgt projektet, fordi det viser min interesse for løsninger, hvor indhold, struktur og interface skal spille naturligt sammen.",
      role: "Webudvikler & digital designer",
      labels: ["Frontend", "WordPress", "Indholdsstruktur", "Platform"],
      imageAlt: "Værdibyg forsiden",
    },
    "015": {
      title: "Holdet.dk",
      tagline: "Kampagnesider, grafik og motion design til digitale kampagner og sociale medier.",
      story:
        "Hos Holdet.dk arbejdede jeg som digital designer og indholdsansvarlig med kampagnesider, SoMe-grafik, nyhedsbreve og motion graphics til annoncering — i et tempo, hvor design og udgivelse hænger tæt sammen.",
      role: "Digital designer",
      labels: ["Digital design", "Kampagne", "Motion"],
      imageAlt: "Holdet.dk kampagneside",
    },
    "016": {
      title: "Bjørn Parfume",
      tagline: "Webshop og kampagneside med fokus på visuel identitet og digitalt udtryk.",
      story:
        "Bjørn Parfume skulle have en digital tilstedeværelse, der matchede produktets kvalitet. Jeg byggede webshop og kampagnesider i WordPress med fokus på visuelt hierarki, storytelling og et skarpt digitalt udtryk.",
      role: "Webudvikler & digital designer",
      labels: ["WordPress", "Webshop", "Design"],
      imageAlt: "Bjørn Parfume webshop",
    },
    "017": {
      title: "Skills4Reuse",
      tagline: "Website for et europæisk initiativ med fokus på formidling og struktur.",
      story:
        "Skills4Reuse skulle gøre et komplekst fagligt emne tilgængeligt uden at blive tungt at navigere i. Jeg designede og udviklede hjemmesiden med custom CSS, JavaScript og illustrationer.",
      role: "Webudvikler & designer",
      labels: ["Website", "Formidling", "Design"],
      imageAlt: "Skills4Reuse forsiden",
    },
  },
  en: {
    "001": {
      title: "DTU Science Park",
      tagline: "New website developed as part of a rebrand and new visual identity.",
      story:
        "DTU Science Park needed a website that matched a new visual identity and could handle complex content, multilingual setup and custom modules. I built the solution in WordPress with a focus on structure, performance and an experience that felt modern without losing professional weight.",
      role: "Web developer",
      labels: ["WordPress", "Frontend", "Rebrand"],
      imageAlt: "DTU Science Park homepage",
    },
    "002": {
      title: "Folkeskolen",
      tagline: "Ongoing development and design-adjacent improvements on a national trade media product.",
      story:
        "Folkeskolen is a content-heavy digital product with high demands for readability, structure and overview. I worked on ongoing front-end development and improvements to modules and content components, making sure new elements worked well visually, editorially and responsively. It is the kind of project I thrive in, because details in layout, hierarchy and spacing matter greatly to the overall user experience.",
      highlight:
        "It shows the type of work I am especially motivated by: improving an existing digital solution with respect for content, users and technical reality.",
      role: "Frontend developer",
      labels: ["Frontend", "Platform", "Content structure", "React"],
      imageAlt: "Folkeskolen homepage",
    },
    "003": {
      title: "Profil Rejser",
      tagline: "Ongoing development and improvements across content, features and user journeys.",
      story:
        "Profil Rejser and Bella Vista need a platform where booking, destinations and brand expression work together across two brands. I work ongoing on front-end, UI and flow improvements in React and TypeScript — with a focus on travel content that is easy to find and maintain.",
      role: "Frontend developer & UI designer",
      labels: ["Frontend", "React", "Design implementation"],
      imageAlt: "Profil Rejser homepage",
    },
    "004": {
      title: "Konstruktørforeningen",
      tagline: "Website and membership platform focused on structure, function and overview.",
      story:
        "Konstruktørforeningen was a solution where information, membership features and user experience had to work together. I worked on the front-end and the concrete realisation of the solution, making sure content and functionality were clear across screen sizes. The project shows tasks where structure and practical usability are at least as important as visual expression.",
      role: "Frontend developer",
      labels: ["Frontend", "Platform", "Membership", "React"],
      imageAlt: "Konstruktørforeningen homepage",
    },
    "005": {
      title: "Pulsen Gymnasium",
      tagline: "Digital identity and website for a new sports high school.",
      story:
        "Pulsen needed a digital presence that conveyed the school's energy and identity — not just programme information. I developed the front-end and contributed digital design in React and TypeScript, where colour, typography and layouts had to feel young and ambitious.",
      role: "Frontend developer & digital designer",
      labels: ["Frontend", "Design implementation", "Brand"],
      imageAlt: "Interior at Pulsen Gymnasium",
    },
    "007": {
      title: "Diabetes\u00ADforeningen",
      tagline: "New website focused on accessibility, clarity and a warm digital tone.",
      story:
        "I worked on front-end implementation and the design-adjacent translation of the solution into a finished website. The challenge was balancing a welcoming visual expression with clear structure, good readability and a solution that works for many different users. The project is here because it shows work where experience, content and accessibility must hang closely together.",
      highlight:
        "When the audience is broad, details like contrast, typography, spacing and clear next steps become especially important.",
      role: "Frontend developer & design implementation",
      labels: ["Frontend", "Design implementation", "Accessibility", "React"],
      imageAlt: "Diabetesforeningen homepage",
    },
    "008": {
      title: "Gigtforeningen",
      tagline: "Redesign focused on warmth, clarity and a reassuring user experience.",
      story:
        "Gigtforeningen needed a site that felt close and human without losing professional weight. I built the front-end in React with a focus on clear navigation, recognisable templates and an expression that meets users where they are.",
      role: "Frontend developer",
      labels: ["Frontend", "Redesign", "Patient organisation"],
      imageAlt: "Gigtforeningen homepage",
    },
    "009": {
      title: "Scleroseforeningen",
      tagline: "Accessible and clear platform for a broad audience.",
      story:
        "Scleroseforeningen had to work for a very broad audience — from the newly diagnosed to healthcare professionals. I developed the front-end with accessibility, clear information hierarchy and different entry points for members, volunteers and professionals.",
      role: "Frontend developer",
      labels: ["Frontend", "Accessibility", "Platform"],
      imageAlt: "Scleroseforeningen homepage",
    },
    "010": {
      title: "AFTRYK · Mary Fonden",
      tagline: "Campaign site developed for a launch with major public visibility.",
      story:
        "AFTRYK was a campaign site where design, animation and technical execution had to work together from the start. I built the solution in WordPress with scroll-based animations and a visual expression that had to carry an important social cause.",
      role: "Web developer",
      labels: ["WordPress", "Campaign", "Animation"],
      imageAlt: "AFTRYK campaign site for Mary Fonden",
    },
    "011": {
      title: "Visit Greenland",
      tagline: "Website developed as part of a new digital and visual direction.",
      story:
        "Visit Greenland needed a website that inspired travel and conveyed practical information across languages. I worked on front-end and digital design — image-heavy layouts and a structure that let Greenland speak for itself.",
      role: "Frontend developer & digital designer",
      labels: ["Frontend", "Tourism", "Rebrand"],
      imageAlt: "Visit Greenland homepage",
    },
    "012": {
      title: "Enhedslisten",
      tagline: "Campaign site developed for the 2024 European Parliament election.",
      story:
        "Enhedslisten's campaign site had to be ready for an election under time pressure. I built the entire site in WordPress with a custom theme and JavaScript in close collaboration with the client's design and marketing team.",
      role: "Web developer",
      labels: ["WordPress", "Campaign", "Frontend"],
      imageAlt: "Enhedslisten homepage",
    },
    "013": {
      title: "Royal Arctic Line",
      tagline: "Platform focused on structure, functionality and access to information.",
      story:
        "Royal Arctic Line had to show route data, freight and booking information that matches reality. I built the site in WordPress with custom integrations and ongoing design tasks in close collaboration with the client.",
      role: "Web developer & digital designer",
      labels: ["WordPress", "Platform", "Integration"],
      imageAlt: "Royal Arctic Line homepage",
    },
    "014": {
      title: "Værdibyg",
      tagline: "Knowledge platform focused on readability, structure and access to content.",
      story:
        "At Værdibyg I worked on front-end and implementation on a platform where information architecture and presentation are decisive. The task was to create calm, clarity and a layout that makes it easier for users to navigate complex content. I chose the project because it shows my interest in solutions where content, structure and interface must work naturally together.",
      role: "Web developer & digital designer",
      labels: ["Frontend", "WordPress", "Content structure", "Platform"],
      imageAlt: "Værdibyg homepage",
    },
    "015": {
      title: "Holdet.dk",
      tagline: "Campaign pages, graphics and motion design for digital campaigns and social media.",
      story:
        "At Holdet.dk I worked as a digital designer and content lead on campaign pages, social graphics, newsletters and motion graphics for advertising — at a pace where design and publishing are tightly connected.",
      role: "Digital designer",
      labels: ["Digital design", "Campaign", "Motion"],
      imageAlt: "Holdet.dk campaign page",
    },
    "016": {
      title: "Bjørn Parfume",
      tagline: "Webshop and campaign site focused on visual identity and digital expression.",
      story:
        "Bjørn Parfume needed a digital presence that matched the quality of the product. I built the webshop and campaign pages in WordPress with a focus on visual hierarchy, storytelling and a sharp digital expression.",
      role: "Web developer & digital designer",
      labels: ["WordPress", "Webshop", "Design"],
      imageAlt: "Bjørn Parfume webshop",
    },
    "017": {
      title: "Skills4Reuse",
      tagline: "Website for a European initiative focused on communication and structure.",
      story:
        "Skills4Reuse had to make a complex professional topic accessible without becoming heavy to navigate. I designed and developed the website with custom CSS, JavaScript and illustrations.",
      role: "Web developer & designer",
      labels: ["Website", "Communication", "Design"],
      imageAlt: "Skills4Reuse homepage",
    },
  },
};

export const categoryLabels: Record<Locale, Record<string, string>> = {
  da: {
    Website: "Website",
    Fagmedie: "Fagmedie",
    Rejsebureau: "Rejsebureau",
    Medlemsplatform: "Medlemsplatform",
    "Brand & website": "Brand & website",
    Patientorganisation: "Patientorganisation",
    "Fond & NGO": "Fond & NGO",
    Turisme: "Turisme",
    Kampagne: "Kampagne",
    Platform: "Platform",
    Vidensplatform: "Vidensplatform",
    "Digital design": "Digital design",
    Webshop: "Webshop",
  },
  en: {
    Website: "Website",
    Fagmedie: "Trade media",
    Rejsebureau: "Travel agency",
    Medlemsplatform: "Membership platform",
    "Brand & website": "Brand & website",
    Patientorganisation: "Patient organisation",
    "Fond & NGO": "Foundation & NGO",
    Turisme: "Tourism",
    Kampagne: "Campaign",
    Platform: "Platform",
    Vidensplatform: "Knowledge platform",
    "Digital design": "Digital design",
    Webshop: "Webshop",
  },
};
