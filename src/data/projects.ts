import { useMemo } from "react";
import { useLanguage } from "@/i18n/context";
import { categoryLabels, projectContent } from "@/i18n/projectContent";
import {
  FEATURED_PROJECT_IDS,
  PROJECTS_BASE,
  SECONDARY_PROJECT_IDS,
} from "@/data/projects.base";
import { getClientForUrl } from "@/data/clients";
import type { Project } from "@/data/types";
import type { Locale } from "@/i18n/types";

function mapProject(locale: Locale, base: (typeof PROJECTS_BASE)[number]): Project {
  const copy = projectContent[locale][base.id];
  return {
    ...base,
    ...copy,
    featured: base.featured ?? false,
    category: categoryLabels[locale][base.categoryKey] ?? base.categoryKey,
    client: getClientForUrl(base.url),
  };
}

function sortByIds(projects: Project[], ids: readonly string[]) {
  const order = new Map(ids.map((id, index) => [id, index]));
  return [...projects].sort((a, b) => (order.get(a.id) ?? 99) - (order.get(b.id) ?? 99));
}

export function buildProjects(locale: Locale): Project[] {
  const all = PROJECTS_BASE.map((base) => mapProject(locale, base));
  const featured = sortByIds(
    all.filter((p) => p.featured),
    FEATURED_PROJECT_IDS,
  );
  const secondary = sortByIds(
    all.filter((p) => !p.featured),
    SECONDARY_PROJECT_IDS,
  );
  return [...featured, ...secondary];
}

export function useProjects(): Project[] {
  const { locale } = useLanguage();
  return useMemo(() => buildProjects(locale), [locale]);
}

export function useFeaturedProjects(): Project[] {
  const projects = useProjects();
  return useMemo(() => projects.filter((p) => p.featured), [projects]);
}

export function useSecondaryProjects(): Project[] {
  const projects = useProjects();
  return useMemo(() => projects.filter((p) => !p.featured), [projects]);
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
