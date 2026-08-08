import type { Locale } from "./types";

export type ProjectCopy = {
  title: string;
  tagline: string;
  story: string;
  role: string;
  imageAlt: string;
};

export const projectContent: Record<Locale, Record<string, ProjectCopy>> = {
  da: {
    "001": {
      title: "DTU Science Park",
      tagline: "Nyt website i forbindelse med rebrand og ny visuel identitet.",
      story:
        "I 2023 fik jeg muligheden for at lave et af mine mest komplekse projekter: DTU Science Parks nye hjemmeside. De havde netop skiftet visuel identitet, og behovet for en moderne og levende hjemmeside var en naturlig del af den transformation.\n\nSammen med DTUs interne designere og kommunikationsteam byggede jeg løsningen i WordPress og Elementor. Det krævede specialbyggede moduler, blandt andet en billedkarusel med thumbnails til udlejningsmål, flersproget opsætning med WPML, HubSpot-integration på formularer og custom JavaScript til deeplinks i tabs-sektioner.\n\nEt projekt hvor jeg fik brugt hele værktøjskassen. Løsningen lever stadig i produktion.",
      role: "Webudvikler",
      imageAlt: "DTU Science Park forsiden",
    },
    "002": {
      title: "Folkeskolen",
      tagline: "Løbende blokudvikling og design på et nationalt fagmedie.",
      story:
        "Folkeskolen er Danmarks fagmedie for lærere og pædagoger. Platformen håndterer enorme mængder indhold, kompleks taksonomi og mange brugertyper, og den skal fungere i en travl hverdag.\n\nJeg arbejder løbende som frontend-udvikler hos Peytz & Co. med udvikling af blokke i React og Next.js, samt designopgaver på tværs af artikler, sektioner og flows. GraphQL er datalaget bag det hele.\n\nDet er arbejde der kræver disciplin i struktur og ydeevne. Ikke glamour, men vigtigt.",
      role: "Frontend-udvikler",
      imageAlt: "Folkeskolen forsiden",
    },
    "003": {
      title: "Profil Rejser",
      tagline: "Løbende udvikling for Profil Rejser og Bella Vista.",
      story:
        "Profil Rejser og Bella Vista arrangerer gruppe- og studierejser. Jeg arbejder løbende med front-end, kode og design på begge brands, fra destinationssider og bookingflows til det visuelle udtryk på tværs af platformene.\n\nArbejdet foregår i React og TypeScript på en Umbraco-backend. Det handler om at holde to brands sammenhængende visuelt, samtidig med at booking og rejseindhold skal være let at finde og vedligeholde.\n\nEt langvarigt samarbejde, hvor både kode og UI udvikles i takt med kundens behov.",
      role: "Frontend-udvikler & UI-designer",
      imageAlt: "Profil Rejser forsiden",
    },
    "004": {
      title: "Konstruktørforeningen",
      tagline: "Hjemmeside og medlemsplatform for ingeniør-fagforeningen.",
      story:
        "Konstruktørforeningen er fagforeningen for konstruktører og bygningsingeniører i Danmark. De skulle have en digital platform der kommunikerer faglig tyngde. Professionelt og troværdigt, men ikke støvet.\n\nJeg byggede front-end i React og TypeScript på Umbraco. Arbejdet omfattede medlemsflows, redaktionelle skabeloner og et designsystem af komponenter der skalerer, når foreningen publicerer nyt indhold.\n\nMålet var et site medlemmene faktisk gider bruge, og som redaktionen kan vedligeholde uden friktion.",
      role: "Frontend-udvikler",
      imageAlt: "Konstruktørforeningen forsiden",
    },
    "005": {
      title: "Pulsen Gymnasium",
      tagline: "Digital tilstedeværelse for et nyt sportsgymnasium.",
      story:
        "Pulsen er et sportsgymnasium med høje ambitioner. Siden skulle ikke bare informere om uddannelser og optag. Den skulle tiltrække kommende elever og formidle skolens energi og identitet.\n\nJeg udviklede front-end og bidrog med digitalt design i React og TypeScript på Umbraco. Farver, typografi og layouts skulle afspejle et ungt, ambitiøst miljø, ikke et generisk skoleskabelon.\n\nEt projekt hvor æstetik og funktion gik hånd i hånd fra start.",
      role: "Frontend-udvikler & digital designer",
      imageAlt: "Interiør på Pulsen Gymnasium med grafik og stemningsbilleder",
    },
    "007": {
      title: "Diabetes\u00ADforeningen",
      tagline: "Nyt website med tilgængelighed og varm tone.",
      story:
        "Diabetesforeningen skulle have en ny hjemmeside der gør sundhedsinformation forståelig for alle. Fra nydiagnosticerede til pårørende og sundhedsprofessionelle.\n\nJeg udviklede front-end og UI med WCAG 2.1 AA som integreret del af arbejdet: kontrast, tastaturnavigation, semantisk HTML og skabeloner der fungerer for alle brugere. Det visuelle udtryk skulle være varmt og troværdigt, ikke klinisk.\n\nEt projekt hvor hvert valg tæller, fordi indholdet møder mennesker i alle slags livssituationer.",
      role: "Frontend-udvikler & UI-designer",
      imageAlt: "Diabetesforeningen forsiden",
    },
    "008": {
      title: "Gigtforeningen",
      tagline: "Redesign for en patientorganisation med varm tone.",
      story:
        "Gigtforeningen repræsenterer mennesker med gigt og reumatiske sygdomme. Deres nye site skulle føles nært og menneskeligt, men stadig bære en patientorganisations faglige tyngde.\n\nJeg byggede front-end i React og TypeScript med fokus på overskuelig navigation, genkendelige skabeloner og et udtryk der møder brugerne der, hvor de er. Redaktionen skulle kunne publicere artikler, råd og kampagner uden at bryde designet.\n\nBalancen mellem professionelt og personligt var hele pointen.",
      role: "Frontend-udvikler",
      imageAlt: "Gigtforeningen forsiden",
    },
    "009": {
      title: "Scleroseforeningen",
      tagline: "Tilgængelig platform for en bred målgruppe.",
      story:
        "Scleroseforeningen støtter mennesker med MS og deres pårørende. Siden skal fungere for en meget bred målgruppe, fra nydiagnosticerede i krise til sundhedsprofessionelle der skal finde faglig dokumentation hurtigt.\n\nJeg udviklede front-end med tilgængelighed, klar informationshierarki og forskellige indgangspunkter for medlemmer, frivillige og professionelle. WCAG var en forudsætning fra dag ét, ikke et tjekpunkt til sidst.\n\nStruktur og omhu i hvert komponentvalg.",
      role: "Frontend-udvikler",
      imageAlt: "Scleroseforeningen forsiden",
    },
    "010": {
      title: "AFTRYK · Mary Fonden",
      tagline: "Kampagnesite præsenteret ved lancering med H.M. Dronningen.",
      story:
        "De unge sætter høje krav til sig selv, når de skal finde sig til rette i nye fællesskaber. Det var udgangspunktet for AFTRYK, et kampagnesite jeg udviklede i samarbejde med Mary Fonden.\n\nLøsningen er bygget i WordPress med Greenshift og GSAP. Siten er opbygget af vektor-baggrunde og scroll-baserede animationer, der skaber en rød tråd gennem kampagnen. Projektet blev præsenteret ved lanceringseventet i november 2024.\n\nEt projekt hvor design, animation og teknisk execution skulle hænge sammen fra start.",
      role: "Webudvikler",
      imageAlt: "AFTRYK kampagnesite for Mary Fonden",
    },
    "011": {
      title: "Visit Greenland",
      tagline: "Nyt website og rebranding for Grønlands turistorganisation.",
      story:
        "Visit Greenland skulle have et nyt website som del af et rebrand. Platformen skal inspirere til rejser, formidle praktisk information og fungere på tværs af sprog, med billeder i centrum.\n\nJeg arbejdede med både front-end udvikling og digitalt design: destinationssider, billedtunge layouts og en struktur der lader Grønland tale for sig selv. Teknikken måtte ikke komme i vejen for det visuelle.\n\nPerformance og visuel impact skulle gå hånd i hånd.",
      role: "Frontend-udvikler & digital designer",
      imageAlt: "Visit Greenland forsiden",
    },
    "012": {
      title: "Enhedslisten",
      tagline: "Kampagnesite klar til Europa-Parlamentsvalget 2024.",
      story:
        "I samarbejde med Enhedslistens interne designere og marketingsteam udviklede jeg deres nye hjemmeside i 2023. I første omgang som kampagnesite til Europa-Parlamentsvalget 2024.\n\nJeg byggede hele sitet i WordPress med custom tema, JavaScript og CSS hos Kathart. Løsningen har en række features klar under overfladen, blandt andet en interaktiv politisk ordbog, donationssystem og minimalistiske videnssider.\n\nTempo, klare prioriteter og tæt samarbejde med kundens team.",
      role: "Webudvikler",
      imageAlt: "Enhedslisten forsiden",
    },
    "013": {
      title: "Royal Arctic Line",
      tagline: "Hjemmeside med ruter, fragt og booking.",
      story:
        "Royal Arctic Line sejler gods og passagerer til og fra Grønland. Hjemmesiden skulle vise rutedata, fragttider og bookinginformation der stemmer overens med virkeligheden, ikke bare se godt ud.\n\nJeg byggede sitet i WordPress og lavede custom integrationer til ruter, fragt og booking via REST API. Udover udvikling tog jeg løbende designopgaver: grafik, materiale og opdateringer i tæt samarbejde med kunden.\n\nKomplekst domæne og mange brugergrupper. Et projekt man vokser af.",
      role: "Webudvikler & digital designer",
      imageAlt: "Royal Arctic Line forsiden",
    },
    "014": {
      title: "Værdibyg",
      tagline: "Vidensbank for hele byggesektoren.",
      story:
        "Værdibyg er byggeriets fælles vidensplatform. De samler vejledninger, metoder og anbefalinger på tværs af hele byggesektoren, og min hovedopgave var vidensbanken.\n\nJeg byggede den i WordPress med custom Gutenberg-blokke: struktureret fagindhold, søgning, filtrering og et setup der gør et teksttungt univers overskueligt for dem der bruger det dagligt. Derudover løbende designopgaver på tværs af platformen.\n\nForståelse for brugerens hverdag er lige så vigtig som koden her.",
      role: "Webudvikler & digital designer",
      imageAlt: "Værdibyg forsiden",
    },
    "015": {
      title: "Holdet.dk",
      tagline: "Kampagnesider, SoMe og motion graphics til fodboldspil.",
      story:
        "Hos Holdet.dk og Swush arbejdede jeg som digital designer og indholdsansvarlig. Det handlede om at bygge kampagnesider, lave grafik til nyhedsbreve og SoMe, skrive indhold til blogs og producere animationer til annoncering.\n\nJeg arbejdede i WordPress med CSS/SCSS og GraphQL, og lærte at arbejde hurtigt i et produktteam hvor design, indhold og udgivelse hænger tæt sammen.\n\nEt godt sted at lære tempo og samspillet mellem design og marketing.",
      role: "Digital designer",
      imageAlt: "Holdet.dk kampagneside",
    },
    "016": {
      title: "Bjørn Parfume",
      tagline: "Webshop og kampagneside til dansk parfumebrand.",
      story:
        "Bjørn Parfume skulle have en digital tilstedeværelse der matcher produktets kvalitet. Jeg byggede webshop og kampagnesider i WordPress med Greenshift og custom CSS, og arbejdede tæt på det visuelle udtryk.\n\nProjektet kombinerede e-commerce, storytelling og et skarpt visuelt hierarki. Det var et af de første projekter hvor jeg selv stod for både udvikling og det digitale design fra start til slut.\n\nEnkelt i scope, men godt til at finpudse detaljerne.",
      role: "Webudvikler & digital designer",
      imageAlt: "Bjørn Parfume webshop",
    },
    "017": {
      title: "Skills4Reuse",
      tagline: "Hjemmeside for europæisk genbrugsinitiativ.",
      story:
        "Skills4Reuse er et projekt under Norion der formidler viden om genbrug og cirkulær økonomi. Jeg designede og udviklede hjemmesiden i GoBasic med custom CSS, JavaScript og illustrationer lavet i Illustrator.\n\nSitet skulle gøre et komplekst fagligt emne tilgængeligt for flere målgrupper, uden at det blev tungt at navigere i.\n\nEt tidligt projekt hvor jeg lærte at oversætte indhold til et klart visuelt sprog.",
      role: "Webudvikler & designer",
      imageAlt: "Skills4Reuse forsiden",
    },
  },
  en: {
    "001": {
      title: "DTU Science Park",
      tagline: "New website as part of a rebrand and new visual identity.",
      story:
        "In 2023 I got the chance to work on one of my most complex projects: DTU Science Park's new website. They had just changed their visual identity, and a modern, lively website was a natural part of that transformation.\n\nTogether with DTU's internal designers and communications team, I built the solution in WordPress and Elementor. It required custom modules, including an image carousel with thumbnails for rental properties, multilingual setup with WPML, HubSpot integration on forms and custom JavaScript for deeplinks in tab sections.\n\nA project where I used the full toolbox. The solution is still running in production.",
      role: "Web developer",
      imageAlt: "DTU Science Park homepage",
    },
    "002": {
      title: "Folkeskolen",
      tagline: "Ongoing block development and design for a national trade media site.",
      story:
        "Folkeskolen is Denmark's trade media for teachers and pedagogues. The platform handles huge volumes of content, complex taxonomy and many user types, and it has to work in a busy everyday setting.\n\nI work ongoing as a frontend developer at Peytz & Co. on React and Next.js blocks, plus design tasks across articles, sections and flows. GraphQL is the data layer behind it all.\n\nIt is the kind of work that demands discipline in structure and performance. Not glamorous, but important.",
      role: "Frontend developer",
      imageAlt: "Folkeskolen homepage",
    },
    "003": {
      title: "Profil Rejser",
      tagline: "Ongoing development for Profil Rejser and Bella Vista.",
      story:
        "Profil Rejser and Bella Vista organise group and study trips. I work ongoing on front-end, code and design for both brands, from destination pages and booking flows to the visual expression across the platforms.\n\nThe work happens in React and TypeScript on an Umbraco backend. It is about keeping two brands visually coherent while booking and travel content stays easy to find and maintain.\n\nA long-term collaboration where both code and UI evolve with the client's needs.",
      role: "Frontend developer & UI designer",
      imageAlt: "Profil Rejser homepage",
    },
    "004": {
      title: "Danish Association of Construction Engineers",
      tagline: "Website and membership platform for the engineering union.",
      story:
        "The Danish Association of Construction Engineers needed a digital platform that communicates professional weight. Credible and serious, but not dusty.\n\nI built the front-end in React and TypeScript on Umbraco. The work covered membership flows, editorial templates and a component system that scales as the organisation publishes new content.\n\nThe goal was a site members actually want to use, and that editors can maintain without friction.",
      role: "Frontend developer",
      imageAlt: "Danish Association of Construction Engineers homepage",
    },
    "005": {
      title: "Pulsen Gymnasium",
      tagline: "Digital presence for a new sports high school.",
      story:
        "Pulsen is a sports high school with high ambitions. The site had to do more than inform about programmes and admissions. It had to attract future students and convey the school's energy and identity.\n\nI developed the front-end and contributed digital design in React and TypeScript on Umbraco. Colours, typography and layouts had to reflect a young, ambitious environment, not a generic school template.\n\nA project where aesthetics and function went hand in hand from the start.",
      role: "Frontend developer & digital designer",
      imageAlt: "Interior at Pulsen Gymnasium with graphics and atmosphere photography",
    },
    "007": {
      title: "Danish Diabetes Association",
      tagline: "New website with accessibility and a warm tone.",
      story:
        "The Danish Diabetes Association needed a new website that makes health information understandable for everyone. From the newly diagnosed to relatives and healthcare professionals.\n\nI developed the front-end and UI with WCAG 2.1 AA as an integrated part of the work: contrast, keyboard navigation, semantic HTML and templates that work for all users. The visual expression had to feel warm and trustworthy, not clinical.\n\nA project where every choice matters, because the content meets people in all kinds of life situations.",
      role: "Frontend developer & UI designer",
      imageAlt: "Danish Diabetes Association homepage",
    },
    "008": {
      title: "Danish Rheumatism Association",
      tagline: "Redesign for a patient organisation with a warm tone.",
      story:
        "The Danish Rheumatism Association represents people with arthritis and rheumatic diseases. Their new site had to feel close and human, while still carrying the professional weight of a patient organisation.\n\nI built the front-end in React and TypeScript with a focus on clear navigation, recognisable templates and an expression that meets users where they are. Editors needed to publish articles, advice and campaigns without breaking the design.\n\nThe balance between professional and personal was the whole point.",
      role: "Frontend developer",
      imageAlt: "Danish Rheumatism Association homepage",
    },
    "009": {
      title: "Danish Multiple Sclerosis Society",
      tagline: "Accessible platform for a broad audience.",
      story:
        "The Danish Multiple Sclerosis Society supports people with MS and their relatives. The site has to work for a very broad audience, from the newly diagnosed in crisis to healthcare professionals who need to find documentation quickly.\n\nI developed the front-end with accessibility, clear information hierarchy and different entry points for members, volunteers and professionals. WCAG was a requirement from day one, not a checkbox at the end.\n\nStructure and care in every component choice.",
      role: "Frontend developer",
      imageAlt: "Danish Multiple Sclerosis Society homepage",
    },
    "010": {
      title: "AFTRYK · Mary Foundation",
      tagline: "Campaign site presented at launch with Her Majesty The Queen.",
      story:
        "Young people set high demands on themselves when they have to find their place in new communities. That was the starting point for AFTRYK, a campaign site I developed in collaboration with the Mary Foundation.\n\nThe solution is built in WordPress with Greenshift and GSAP. The site is made up of vector backgrounds and scroll-based animations that create a visual thread through the campaign. The project was presented at the launch event in November 2024.\n\nA project where design, animation and technical execution had to work together from the start.",
      role: "Web developer",
      imageAlt: "AFTRYK campaign site for the Mary Foundation",
    },
    "011": {
      title: "Visit Greenland",
      tagline: "New website and rebranding for Greenland's tourism organisation.",
      story:
        "Visit Greenland needed a new website as part of a rebrand. The platform must inspire travel, convey practical information and work across languages, with imagery at the centre.\n\nI worked on both front-end development and digital design: destination pages, image-heavy layouts and a structure that lets Greenland speak for itself. The technology could not get in the way of the visual.\n\nPerformance and visual impact had to go hand in hand.",
      role: "Frontend developer & digital designer",
      imageAlt: "Visit Greenland homepage",
    },
    "012": {
      title: "Enhedslisten",
      tagline: "Campaign site ready for the 2024 European Parliament election.",
      story:
        "In collaboration with Enhedslisten's internal designers and marketing team, I developed their new website in 2023. Initially as a campaign site for the 2024 European Parliament election.\n\nI built the entire site in WordPress with a custom theme, JavaScript and CSS at Kathart. The solution has a range of features ready under the surface, including an interactive political dictionary, donation system and minimal knowledge pages.\n\nPace, clear priorities and close collaboration with the client's team.",
      role: "Web developer",
      imageAlt: "Enhedslisten homepage",
    },
    "013": {
      title: "Royal Arctic Line",
      tagline: "Website with routes, freight and booking.",
      story:
        "Royal Arctic Line sails cargo and passengers to and from Greenland. The website had to show route data, freight times and booking information that matches reality, not just look good.\n\nI built the site in WordPress and created custom integrations for routes, freight and booking via REST API. Beyond development, I took ongoing design tasks: graphics, materials and updates in close collaboration with the client.\n\nComplex domain and many user groups. A project you grow from.",
      role: "Web developer & digital designer",
      imageAlt: "Royal Arctic Line homepage",
    },
    "014": {
      title: "Værdibyg",
      tagline: "Knowledge bank for the entire construction sector.",
      story:
        "Værdibyg is the construction industry's shared knowledge platform. They gather guides, methods and recommendations across the entire sector, and my main task was the knowledge bank.\n\nI built it in WordPress with custom Gutenberg blocks: structured professional content, search, filtering and a setup that makes a text-heavy universe manageable for daily users. Plus ongoing design tasks across the platform.\n\nUnderstanding the user's everyday work is just as important as the code here.",
      role: "Web developer & digital designer",
      imageAlt: "Værdibyg homepage",
    },
    "015": {
      title: "Holdet.dk",
      tagline: "Campaign pages, social media and motion graphics for a football game.",
      story:
        "At Holdet.dk and Swush I worked as a digital designer and content lead. That meant building campaign pages, creating graphics for newsletters and social media, writing blog content and producing animations for advertising.\n\nI worked in WordPress with CSS/SCSS and GraphQL, and learned to move fast in a product team where design, content and publishing are tightly connected.\n\nA good place to learn pace and the interplay between design and marketing.",
      role: "Digital designer",
      imageAlt: "Holdet.dk campaign page",
    },
    "016": {
      title: "Bjørn Parfume",
      tagline: "Webshop and campaign site for a Danish perfume brand.",
      story:
        "Bjørn Parfume needed a digital presence that matched the quality of the product. I built the webshop and campaign pages in WordPress with Greenshift and custom CSS, working closely on the visual expression.\n\nThe project combined e-commerce, storytelling and a sharp visual hierarchy. It was one of the first projects where I handled both development and digital design from start to finish.\n\nSmall in scope, but good for refining the details.",
      role: "Web developer & digital designer",
      imageAlt: "Bjørn Parfume webshop",
    },
    "017": {
      title: "Skills4Reuse",
      tagline: "Website for a European reuse initiative.",
      story:
        "Skills4Reuse is a Norion project that communicates knowledge about reuse and the circular economy. I designed and developed the website in GoBasic with custom CSS, JavaScript and illustrations made in Illustrator.\n\nThe site had to make a complex professional topic accessible to multiple audiences without becoming heavy to navigate.\n\nAn early project where I learned to translate content into a clear visual language.",
      role: "Web developer & designer",
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
