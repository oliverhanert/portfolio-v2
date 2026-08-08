export type Locale = "da" | "en";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "da", label: "DA" },
  { code: "en", label: "EN" },
];

export const DEFAULT_LOCALE: Locale = "da";
