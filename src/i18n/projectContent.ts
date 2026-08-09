import type { Locale } from "./types";

export type ProjectCopy = {
  title: string;
  titleLines?: [string, string];
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
        "DTU Science Park skulle have en hjemmeside, der matchede en ny visuel identitet og kunne håndtere komplekst indhold på tværs af sprog, formularer og specialmoduler. Jeg udviklede løsningen i WordPress med fokus på struktur, performance og en oplevelse, der føltes moderne uden at miste faglig tyngde, fra billedkaruseller og tabs til flersproget opsætning og integrationer.",
      highlight:
        "Et projekt der viser, hvordan et rebrand skal omsættes til et levende website, ikke bare en ny overflade, men en løsning der kan bære komplekst indhold i praksis.",
      role: "Webudvikler",
      labels: ["Rebrand", "Designimplementering", "Flersproget", "Komplekst indhold"],
      imageAlt: "DTU Science Park forsiden",
    },
    "002": {
      title: "Folkeskolen",
      tagline: "Løbende udvikling på et nationalt fagmedie og tilhørende medlemsportal.",
      story:
        "Folkeskolen er Danmarks fagmedie for lærere, et indholdstungt digitalt produkt med høje krav til læsbarhed, struktur og overblik. Jeg arbejder med løbende frontendudvikling på folkeskolen.dk og den tilhørende medlemsportal Folkeskolen Plus+, hvor artikler, nyhedsflows og medlemsfordele skal fungere sammen. Fokus er på moduler og indholdskomponenter, der holder visuelt, redaktionelt og responsivt, fra forsiden med seneste nyt til medlemsoplevelsen i Plus+.",
      highlight:
        "Det er et projekt, der viser den type arbejde, jeg især motiveres af: at forbedre en eksisterende digital løsning med respekt for både indholdet, brugeren og den tekniske virkelighed.",
      role: "Frontend-udvikler",
      labels: ["Fagmedie", "Medlemsportal", "Løbende udvikling", "Indholdsstruktur"],
      imageAlt: "Folkeskolen forsiden",
    },
    "003": {
      title: "Profil Rejser",
      tagline: "Nyt site til Danmarks førende rejsebureau, og luksusbrandet Bella Vista.",
      story:
        "Profil Rejser og Bella Vista by Profil Rejser fik en ny WordPress-multisite-løsning, der samler to brands på én platform med fælles backend og hvert sit udtryk. Jeg arbejder med frontend og designimplementering af det nye CVI, custom blocks, fleksible hero-varianter og layouts, hvor billedtunge rejseoplevelser skal inspirere uden at gå på kompromis med overblik og brugervenlighed. Siden lanceringen i oktober 2024 er løsningen blevet videreudviklet løbende med fokus på redaktionel fleksibilitet og flows, der understøtter salg af skræddersyede rejser.",
      highlight:
        "Et projekt, hvor frontend, indhold og brand skal spille sammen på tværs af to sites, med destinationer fra Grønland til tropeparadis som det visuelle fundament.",
      role: "Frontend-udvikler & UI-designer",
      labels: ["Rejsebureau", "Multisite", "Custom blocks", "Designimplementering"],
      imageAlt: "Profil Rejser hero med tropisk overwater resort",
    },
    "004": {
      title: "Konstruktørforeningen",
      titleLines: ["Konstruktør", "foreningen"],
      tagline: "Nyt WordPress-site under udvikling — medlemsplatform med struktur, funktion og overblik.",
      story:
        "Konstruktørforeningen er i gang med et nyt website og en medlemsplatform i WordPress, hvor information, medlemsfunktioner og brugeroplevelse skal spille sammen. Jeg arbejder med frontend og designimplementering af løsningen i 2026, med fokus på at både indhold og funktionalitet står tydeligt frem på tværs af skærmstørrelser. Siden er endnu ikke live — det du ser her, er fra staging-miljøet under udvikling.",
      highlight:
        "Et projekt der viser den type løbende arbejde, hvor struktur, praktisk brugbarhed og et tydeligt digitalt overblik er mindst lige så vigtige som det visuelle udtryk.",
      role: "Frontend-udvikler",
      labels: ["Medlemsplatform", "WordPress", "Designimplementering", "Staging"],
      imageAlt: "Konstruktørforeningen forsiden",
    },
    "005": {
      title: "Pulsen Gymnasium",
      tagline: "Nyt navn, ny identitet og nyt website for et teknisk gymnasium.",
      story:
        "Da HTX Roskilde stod med lavt kendskab og behov for et tydeligere gymnasieudtryk, blev skolen rebranded til PulSen Gymnasium, med ny visuel identitet og et nyt website i WordPress. Jeg udviklede frontend og bidrog med designimplementering: farverige moduler, tydeligt informationshierarki og et udtryk, der skulle føles energisk og inkluderende og samtidig formidle skolens styrker inden for IT og science.",
      highlight:
        "Et rebrand-projekt, hvor det digitale udtryk skulle følge den nye identitet hele vejen, fra rekruttering og studieliv til lovpligtigt indhold og integrationer.",
      role: "Frontend-udvikler & digital designer",
      labels: ["Rebrand", "Gymnasium", "Designimplementering", "Identitet"],
      imageAlt: "Pulsen Gymnasium website vist på tablet og laptop",
    },
    "007": {
      title: "Diabetes\u00ADforeningen",
      titleLines: ["Diabetes", "foreningen"],
      tagline: "Nyt website under udvikling med fokus på tilgængelighed, tydelighed og en varm digital tone.",
      story:
        "Jeg arbejder med frontend og designimplementering af Diabetesforeningens nye website i WordPress i 2026. Løsningen skal balancere et imødekommende visuelt udtryk med tydelig struktur, god læsbarhed og en oplevelse, der fungerer for en bred målgruppe. Projektet er stadig under udvikling, og materialet her er fra staging-miljøet.",
      highlight:
        "Når målgruppen er bred, bliver detaljer som kontraster, typografi, spacing og tydelige næste skridt ekstra vigtige — også mens løsningen stadig formes.",
      role: "Frontend-udvikler & designimplementering",
      labels: ["Patientorganisation", "Tilgængelighed", "Designimplementering", "Staging"],
      imageAlt: "Diabetesforeningen forsiden",
    },
    "008": {
      title: "Gigtforeningen",
      titleLines: ["Gigt", "foreningen"],
      tagline: "Nyt WordPress-site med custom blocks og segmenteret indhold via Arrigoo.",
      story:
        "Gigtforeningen fik et nyt website i WordPress med custom blocks, et varmt visuelt udtryk og en struktur, der skulle møde en bred målgruppe med forskellige behov. Jeg arbejdede med frontend og designimplementering af løsningen, herunder skabeloner, navigation og de blokke, der skal fungere både redaktionelt og visuelt. Et centralt fokus var segmentering via Arrigoo, så indhold og flows kan tilpasses forskellige brugertyper uden at gå på kompromis med overblik og tillid.",
      highlight:
        "Projektet viser, hvordan et patientorganisations-site kan kombinere redesign, fleksible WordPress-blokke og segmenteret kommunikation i praksis.",
      role: "Frontend-udvikler & designimplementering",
      labels: ["Patientorganisation", "Redesign", "Custom blocks", "Segmentering"],
      imageAlt: "Gigtforeningen, hero med Kampen mod smerterne",
    },
    "009": {
      title: "Scleroseforeningen",
      titleLines: ["Sclerose", "foreningen"],
      tagline: "Multisite til patientforening med afsæt i brugercentreret design.",
      story:
        "Scleroseforeningen skulle fungere for en meget bred målgruppe, fra nydiagnosticerede til sundhedsprofessionelle. Som en del af Peytz' arbejde med patientforeninger udviklede jeg frontend med tilgængelighed, klart informationshierarki og forskellige indgangspunkter for medlemmer, frivillige og professionelle.",
      role: "Frontend-udvikler",
      labels: ["Patientorganisation", "Multisite", "Tilgængelighed", "Brugercentreret design"],
      imageAlt: "Scleroseforeningen forsiden",
    },
    "010": {
      title: "AFTRYK · Mary Fonden",
      tagline: "Kampagnesite udviklet til en lancering med stor offentlig synlighed.",
      story:
        "AFTRYK var et kampagnesite, hvor design, animation og teknisk execution skulle hænge sammen fra start. Jeg udviklede løsningen i WordPress med scroll-baserede animationer og et visuelt udtryk, der skulle bære en vigtig samfundsag.",
      role: "Webudvikler",
      labels: ["Kampagne", "Animation", "Samfundsformidling", "Scroll-oplevelse"],
      imageAlt: "AFTRYK kampagnesite for Mary Fonden",
    },
    "011": {
      title: "Visit Greenland",
      tagline: "Website udviklet som del af en ny digital og visuel retning.",
      story:
        "Visit Greenland skulle have et website, der inspirerede til rejser og formidlede praktisk information på tværs af sprog. Jeg arbejdede med frontend og digitalt design, billedtunge layouts og en struktur, der lod Grønland tale for sig selv.",
      role: "Frontend-udvikler & digital designer",
      labels: ["Turisme", "Rebrand", "Billedtungt layout", "Frontend"],
      imageAlt: "Visit Greenland forsiden",
    },
    "012": {
      title: "Enhedslisten",
      tagline: "Kampagnesite udviklet til Europa-Parlamentsvalget 2024.",
      story:
        "Enhedslistens kampagnesite skulle være klar til valgkamp under tidspres. Jeg byggede hele sitet i WordPress med custom tema og JavaScript i tæt samarbejde med kundens design- og marketingteam.",
      role: "Webudvikler",
      labels: ["Kampagne", "Valgkamp", "Custom tema", "Frontend"],
      imageAlt: "Enhedslisten forsiden",
    },
    "013": {
      title: "Royal Arctic Line",
      tagline: "Platform med fokus på struktur, funktionalitet og adgang til information.",
      story:
        "Royal Arctic Line skulle vise rutedata, fragt og bookinginformation, der stemmer overens med virkeligheden. Jeg byggede sitet i WordPress med custom integrationer og løbende designopgaver i tæt samarbejde med kunden.",
      role: "Webudvikler & digital designer",
      labels: ["Platform", "Integration", "Freight & booking", "Design"],
      imageAlt: "Royal Arctic Line forsiden",
    },
    "014": {
      title: "Værdibyg",
      tagline: "Vidensplatform med fokus på læsbarhed, struktur og adgang til indhold.",
      story:
        "På Værdibyg arbejdede jeg med frontend og implementering på en platform, hvor informationsarkitektur og præsentation er afgørende. Her handlede det om at skabe ro, tydelighed og et layout, der gør det lettere for brugeren at orientere sig i komplekst indhold. Jeg har valgt projektet, fordi det viser min interesse for løsninger, hvor indhold, struktur og interface skal spille naturligt sammen.",
      role: "Webudvikler & digital designer",
      labels: ["Vidensplatform", "Indholdsstruktur", "Custom blocks", "Læsbarhed"],
      imageAlt: "Værdibyg forsiden",
    },
    "015": {
      title: "Holdet.dk",
      tagline: "Kampagnesider, grafik og motion design til digitale kampagner og sociale medier.",
      story:
        "Hos Holdet.dk arbejdede jeg som digital designer og indholdsansvarlig med kampagnesider, SoMe-grafik, nyhedsbreve og motion graphics til annoncering, i et tempo, hvor design og udgivelse hænger tæt sammen.",
      role: "Digital designer",
      labels: ["Digital design", "Kampagne", "Motion", "SoMe"],
      imageAlt: "Holdet.dk kampagneside",
    },
    "016": {
      title: "Bjørn Parfume",
      tagline: "Webshop og kampagneside med fokus på visuel identitet og digitalt udtryk.",
      story:
        "Bjørn Parfume skulle have en digital tilstedeværelse, der matchede produktets kvalitet. Jeg byggede webshop og kampagnesider i WordPress med fokus på visuelt hierarki, storytelling og et skarpt digitalt udtryk.",
      role: "Webudvikler & digital designer",
      labels: ["Webshop", "E-commerce", "Design", "Storytelling"],
      imageAlt: "Bjørn Parfume webshop",
    },
    "017": {
      title: "Skills4Reuse",
      tagline: "Website for et europæisk initiativ med fokus på formidling og struktur.",
      story:
        "Skills4Reuse skulle gøre et komplekst fagligt emne tilgængeligt uden at blive tungt at navigere i. Jeg designede og udviklede hjemmesiden med custom CSS, JavaScript og illustrationer.",
      role: "Webudvikler & designer",
      labels: ["Formidling", "Illustration", "EU-projekt", "Design"],
      imageAlt: "Skills4Reuse forsiden",
    },
  },
  en: {
    "001": {
      title: "DTU Science Park",
      tagline: "New website developed as part of a rebrand and new visual identity.",
      story:
        "DTU Science Park needed a website that matched a new visual identity and could handle complex content across languages, forms and custom modules. I built the solution in WordPress with a focus on structure, performance and an experience that felt modern without losing professional weight, from image carousels and tabs to multilingual setup and integrations.",
      highlight:
        "A project that shows how a rebrand must become a living website, not just a new surface, but a solution that can carry complex content in practice.",
      role: "Web developer",
      labels: ["Rebrand", "Design implementation", "Multilingual", "Complex content"],
      imageAlt: "DTU Science Park homepage",
    },
    "002": {
      title: "Folkeskolen",
      tagline: "Ongoing development on a national trade media product and its membership portal.",
      story:
        "Folkeskolen is Denmark's trade media for teachers, a content-heavy digital product with high demands for readability, structure and overview. I work on ongoing front-end development on folkeskolen.dk and the Folkeskolen Plus+ membership portal, where articles, news flows and member benefits need to work together. The focus is on modules and content components that hold up visually, editorially and responsively, from the homepage with latest news to the member experience in Plus+.",
      highlight:
        "It shows the type of work I am especially motivated by: improving an existing digital solution with respect for content, users and technical reality.",
      role: "Frontend developer",
      labels: ["Trade media", "Membership portal", "Ongoing development", "Content structure"],
      imageAlt: "Folkeskolen homepage",
    },
    "003": {
      title: "Profil Rejser",
      tagline: "New site for one of Denmark's leading travel agencies, and the luxury brand Bella Vista.",
      story:
        "Profil Rejser and Bella Vista by Profil Rejser received a new WordPress multisite solution that brings two brands together on one platform with a shared backend and distinct expressions. I work on front-end and design implementation of the new visual identity, custom blocks, flexible hero variants and layouts where image-heavy travel experiences must inspire without compromising overview and usability. Since the October 2024 launch, the solution has been developed ongoing with a focus on editorial flexibility and flows that support sales of tailored trips.",
      highlight:
        "A project where front-end, content and brand must work together across two sites, with destinations from Greenland to tropical paradise as the visual foundation.",
      role: "Frontend developer & UI designer",
      labels: ["Travel agency", "Multisite", "Custom blocks", "Design implementation"],
      imageAlt: "Profil Rejser hero with tropical overwater resort",
    },
    "004": {
      title: "Konstruktørforeningen",
      titleLines: ["Konstruktør", "foreningen"],
      tagline: "New WordPress site in development — membership platform focused on structure, function and overview.",
      story:
        "Konstruktørforeningen is building a new website and membership platform in WordPress, where information, membership features and user experience need to work together. I work on front-end and design implementation in 2026, making sure content and functionality are clear across screen sizes. The site is not live yet — what you see here is from the staging environment while the project is still in development.",
      role: "Frontend developer",
      labels: ["Membership", "WordPress", "Design implementation", "Staging"],
      imageAlt: "Konstruktørforeningen homepage",
    },
    "005": {
      title: "Pulsen Gymnasium",
      tagline: "New name, new identity and new website for a technical high school.",
      story:
        "When HTX Roskilde faced low awareness and a need for a clearer high-school expression, the school was rebranded as PulSen Gymnasium, with a new visual identity and a new WordPress website. I developed the front-end and contributed design implementation: colourful modules, clear information hierarchy and an expression that had to feel energetic and inclusive while communicating the school's strengths in IT and science.",
      highlight:
        "A rebrand project where the digital expression had to follow the new identity throughout, from recruitment and student life to mandatory content and integrations.",
      role: "Frontend developer & digital designer",
      labels: ["Rebrand", "High school", "Design implementation", "Identity"],
      imageAlt: "Pulsen Gymnasium website shown on tablet and laptop",
    },
    "007": {
      title: "Diabetes\u00ADforeningen",
      titleLines: ["Diabetes", "foreningen"],
      tagline: "New website in development focused on accessibility, clarity and a warm digital tone.",
      story:
        "I work on front-end and design implementation of Diabetesforeningen's new WordPress website in 2026. The solution must balance a welcoming visual expression with clear structure, good readability and an experience that works for a broad audience. The project is still in development, and the material here is from the staging environment.",
      highlight:
        "When the audience is broad, details like contrast, typography, spacing and clear next steps become especially important — also while the solution is still taking shape.",
      role: "Frontend developer & design implementation",
      labels: ["Patient organisation", "Accessibility", "Design implementation", "Staging"],
      imageAlt: "Diabetesforeningen homepage",
    },
    "008": {
      title: "Gigtforeningen",
      titleLines: ["Gigt", "foreningen"],
      tagline: "New WordPress site with custom blocks and segmented content via Arrigoo.",
      story:
        "Gigtforeningen received a new WordPress website with custom blocks, a warm visual expression and a structure that had to meet a broad audience with different needs. I worked on the front-end and design implementation of the solution, including templates, navigation and the blocks that must work both editorially and visually. A central focus was segmentation via Arrigoo, so content and flows can be tailored to different user types without compromising overview and trust.",
      highlight:
        "The project shows how a patient organisation site can combine redesign, flexible WordPress blocks and segmented communication in practice.",
      role: "Frontend developer & design implementation",
      labels: ["Patient organisation", "Redesign", "Custom blocks", "Segmentation"],
      imageAlt: "Gigtforeningen hero with Fight the Pain campaign",
    },
    "009": {
      title: "Scleroseforeningen",
      titleLines: ["Sclerose", "foreningen"],
      tagline: "Multisite for a patient organisation with user-centred design.",
      story:
        "Scleroseforeningen had to work for a very broad audience, from the newly diagnosed to healthcare professionals. As part of Peytz' work with patient organisations, I developed the front-end with accessibility, clear information hierarchy and different entry points for members, volunteers and professionals.",
      role: "Frontend developer",
      labels: ["Patient organisation", "Multisite", "Accessibility", "User-centred design"],
      imageAlt: "Scleroseforeningen homepage",
    },
    "010": {
      title: "AFTRYK · Mary Fonden",
      tagline: "Campaign site developed for a launch with major public visibility.",
      story:
        "AFTRYK was a campaign site where design, animation and technical execution had to work together from the start. I built the solution in WordPress with scroll-based animations and a visual expression that had to carry an important social cause.",
      role: "Web developer",
      labels: ["Campaign", "Animation", "Social cause", "Scroll experience"],
      imageAlt: "AFTRYK campaign site for Mary Fonden",
    },
    "011": {
      title: "Visit Greenland",
      tagline: "Website developed as part of a new digital and visual direction.",
      story:
        "Visit Greenland needed a website that inspired travel and conveyed practical information across languages. I worked on front-end and digital design, image-heavy layouts and a structure that let Greenland speak for itself.",
      role: "Frontend developer & digital designer",
      labels: ["Tourism", "Rebrand", "Image-heavy layout", "Frontend"],
      imageAlt: "Visit Greenland homepage",
    },
    "012": {
      title: "Enhedslisten",
      tagline: "Campaign site developed for the 2024 European Parliament election.",
      story:
        "Enhedslisten's campaign site had to be ready for an election under time pressure. I built the entire site in WordPress with a custom theme and JavaScript in close collaboration with the client's design and marketing team.",
      role: "Web developer",
      labels: ["Campaign", "Election", "Custom theme", "Frontend"],
      imageAlt: "Enhedslisten homepage",
    },
    "013": {
      title: "Royal Arctic Line",
      tagline: "Platform focused on structure, functionality and access to information.",
      story:
        "Royal Arctic Line had to show route data, freight and booking information that matches reality. I built the site in WordPress with custom integrations and ongoing design tasks in close collaboration with the client.",
      role: "Web developer & digital designer",
      labels: ["Platform", "Integration", "Freight & booking", "Design"],
      imageAlt: "Royal Arctic Line homepage",
    },
    "014": {
      title: "Værdibyg",
      tagline: "Knowledge platform focused on readability, structure and access to content.",
      story:
        "At Værdibyg I worked on front-end and implementation on a platform where information architecture and presentation are decisive. The task was to create calm, clarity and a layout that makes it easier for users to navigate complex content. I chose the project because it shows my interest in solutions where content, structure and interface must work naturally together.",
      role: "Web developer & digital designer",
      labels: ["Knowledge platform", "Content structure", "Custom blocks", "Readability"],
      imageAlt: "Værdibyg homepage",
    },
    "015": {
      title: "Holdet.dk",
      tagline: "Campaign pages, graphics and motion design for digital campaigns and social media.",
      story:
        "At Holdet.dk I worked as a digital designer and content lead on campaign pages, social graphics, newsletters and motion graphics for advertising, at a pace where design and publishing are tightly connected.",
      role: "Digital designer",
      labels: ["Digital design", "Campaign", "Motion", "Social media"],
      imageAlt: "Holdet.dk campaign page",
    },
    "016": {
      title: "Bjørn Parfume",
      tagline: "Webshop and campaign site focused on visual identity and digital expression.",
      story:
        "Bjørn Parfume needed a digital presence that matched the quality of the product. I built the webshop and campaign pages in WordPress with a focus on visual hierarchy, storytelling and a sharp digital expression.",
      role: "Web developer & digital designer",
      labels: ["Webshop", "E-commerce", "Design", "Storytelling"],
      imageAlt: "Bjørn Parfume webshop",
    },
    "017": {
      title: "Skills4Reuse",
      tagline: "Website for a European initiative focused on communication and structure.",
      story:
        "Skills4Reuse had to make a complex professional topic accessible without becoming heavy to navigate. I designed and developed the website with custom CSS, JavaScript and illustrations.",
      role: "Web developer & designer",
      labels: ["Communication", "Illustration", "EU initiative", "Design"],
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
