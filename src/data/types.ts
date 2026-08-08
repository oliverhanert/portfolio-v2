import type { Client } from "./clients";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  fit?: "cover" | "contain";
  bg?: string;
  wide?: boolean;
  offset?: "left" | "right" | "none";
};

export type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  imageAlt: string;
  tagline: string;
  story: string;
  role: string;
  tech: string[];
  url?: string;
  agency?: string;
  accent: string;
  gallery?: ProjectGalleryItem[];
  client?: Client;
};

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  href?: string;
  fit?: "cover" | "contain";
  bg?: string;
};
