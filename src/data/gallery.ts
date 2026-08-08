import type { GalleryItem } from "./types";
import fmHero from "@/assets/funbox/fm-fanatics-hero.jpg";
import fmMockup1 from "@/assets/funbox/fm-fanatics-mockup-1.png";
import fmMockup2 from "@/assets/funbox/fm-fanatics-mockup-2.png";

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: fmHero,
    alt: "FM Fanatics Instagram profil",
    title: "FM Fanatics",
    subtitle: "Visuel identitet & Instagram · 3000+ følgere",
    href: "https://www.instagram.com/fmfanatics/",
    fit: "cover",
  },
  {
    id: 2,
    src: fmMockup1,
    alt: "FM Fanatics mockup",
    title: "FM Fanatics",
    subtitle: "Templates og SoMe-assets i Figma",
    href: "https://www.instagram.com/fmfanatics/",
    fit: "contain",
    bg: "#e8e4dc",
  },
  {
    id: 3,
    src: fmMockup2,
    alt: "FM Fanatics mockup",
    title: "FM Fanatics",
    subtitle: "Hobbyprojekt med August · Football Manager",
    href: "https://www.instagram.com/fmfanatics/",
    fit: "contain",
    bg: "#e8e4dc",
  },
  {
    id: 4,
    src: "",
    alt: "Copenhagen Hub illustrationer",
    title: "Copenhagen Hub",
    subtitle: "Spillerillustrationer i Illustrator · aldrig lanceret",
    fit: "cover",
    bg: "#1a1714",
  },
  {
    id: 5,
    src: "",
    alt: "Merch logo til vennegruppe",
    title: "Merch logo",
    subtitle: "Logo til merchandise · upload kommer",
    fit: "cover",
    bg: "#322820",
  },
];
