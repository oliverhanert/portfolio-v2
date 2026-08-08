import logoAftryk from "@/assets/logos/aftryk.svg";
import logoDiabetes from "@/assets/logos/diabetes.svg";
import logoDtu from "@/assets/logos/dtusciencepark.svg";
import logoEnhedslisten from "@/assets/logos/enhedslisten.png";
import logoFolkeskolen from "@/assets/logos/folkeskolen.svg";
import logoGigt from "@/assets/logos/gigtforeningen.svg";
import logoKf from "@/assets/logos/kf.svg";
import logoMary from "@/assets/logos/maryfonden.svg";
import logoProfil from "@/assets/logos/profil-rejser.svg";
import logoPulsen from "@/assets/logos/pulsen.png";
import logoRal from "@/assets/logos/royalarcticline.svg";
import logoSclerose from "@/assets/logos/scleroseforeningen.svg";
import logoVaerdibyg from "@/assets/logos/vaerdibyg.svg";
import logoVisit from "@/assets/logos/visitgreenland.svg";

export type Client = {
  name: string;
  domain: string;
  url?: string;
  logo?: string;
};

export const CLIENTS: Client[] = [
  { name: "DTU Science Park", domain: "dtusciencepark.com", logo: logoDtu },
  { name: "Folkeskolen", domain: "folkeskolen.dk", logo: logoFolkeskolen },
  { name: "Profil Rejser", domain: "profil-rejser.dk", logo: logoProfil },
  { name: "Pulsen Gymnasium", domain: "pulsen.dk", logo: logoPulsen },
  {
    name: "Diabetesforeningen",
    domain: "diabetes.dk",
    url: "https://diabetes.wp.prod.combell.peytz.dk",
    logo: logoDiabetes,
  },
  { name: "Visit Greenland", domain: "visitgreenland.com", logo: logoVisit },
  { name: "Royal Arctic Line", domain: "royalarcticline.com", logo: logoRal },
  { name: "Enhedslisten", domain: "enhedslisten.dk", logo: logoEnhedslisten },
  { name: "Værdibyg", domain: "vaerdibyg.dk", logo: logoVaerdibyg },
  { name: "Mary Fonden", domain: "maryfonden.dk", logo: logoMary },
  {
    name: "Konstruktørforeningen",
    domain: "konstruktorforeningen.dk",
    url: "https://kf.wp.prod.combell.peytz.dk",
    logo: logoKf,
  },
  { name: "Gigtforeningen", domain: "gigtforeningen.dk", logo: logoGigt },
  { name: "Scleroseforeningen", domain: "scleroseforeningen.dk", logo: logoSclerose },
  { name: "AFTRYK", domain: "aftryk.maryfonden.dk", logo: logoAftryk },
];

function hostFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

export function getClientForUrl(projectUrl?: string): Client | undefined {
  if (!projectUrl) return undefined;

  const host = hostFromUrl(projectUrl);
  if (!host) return undefined;

  return CLIENTS.find((client) => {
    const candidates = [
      client.domain.replace(/^www\./, "").toLowerCase(),
      client.url ? hostFromUrl(client.url) : null,
    ].filter(Boolean) as string[];

    return candidates.some(
      (candidate) => host === candidate || host.endsWith(`.${candidate}`),
    );
  });
}
