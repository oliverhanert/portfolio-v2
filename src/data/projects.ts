import { useMemo } from "react";
import { useLanguage } from "@/i18n/context";
import { categoryLabels, projectContent } from "@/i18n/projectContent";
import { PROJECTS_BASE } from "@/data/projects.base";
import { getClientForUrl } from "@/data/clients";
import type { Project } from "@/data/types";
import type { Locale } from "@/i18n/types";

export function buildProjects(locale: Locale): Project[] {
  return PROJECTS_BASE.map((base) => {
    const copy = projectContent[locale][base.id];
    return {
      ...base,
      ...copy,
      category: categoryLabels[locale][base.categoryKey] ?? base.categoryKey,
      client: getClientForUrl(base.url),
    };
  });
}

export function useProjects(): Project[] {
  const { locale } = useLanguage();
  return useMemo(() => buildProjects(locale), [locale]);
}

export function useProject(id: string): Project | undefined {
  const projects = useProjects();
  return projects.find((p) => p.id === id);
}

export function useNextProject(id: string): Project {
  const projects = useProjects();
  const idx = projects.findIndex((p) => p.id === id);
  return projects[(idx + 1) % projects.length];
}

export function storyExcerpt(story: string, maxLength = 120) {
  const first = story.split("\n\n")[0] ?? story;
  return first.length > maxLength ? `${first.slice(0, maxLength).trim()}…` : first;
}

export { heroImageUrl } from "@/data/projects.base";
