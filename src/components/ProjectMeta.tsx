import type { Project } from "@/data/types";
import { useLanguage } from "@/i18n/context";
import { Button } from "@/components/Button";
import { ProjectLabels } from "@/components/ProjectLabels";

type Props = {
  project: Project;
  className?: string;
};

export function ProjectMeta({ project, className = "" }: Props) {
  const { t } = useLanguage();

  return (
    <aside className={`flex flex-col gap-7 ${className}`}>
      <div>
        <p className="type-label mb-2">{t.project.year}</p>
        <p className="type-meta-value">{project.year}</p>
      </div>
      <div>
        <p className="type-label mb-2">{t.project.type}</p>
        <p className="type-meta-value">{project.category}</p>
      </div>
      <div>
        <p className="type-label mb-2">{t.project.role}</p>
        <p className="type-meta-value">{project.role}</p>
      </div>
      {project.agency && (
        <div>
          <p className="type-label mb-2">{t.project.agency}</p>
          <p className="type-meta-value">{project.agency}</p>
        </div>
      )}
      <div>
        <p className="type-label mb-3">{t.project.focus}</p>
        <ProjectLabels labels={project.labels} accent={project.accent} />
      </div>
      <div>
        <p className="type-label mb-3">{t.project.stack}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>
      {project.url && (
        <Button href={project.url} variant="fill" size="sm" accent={project.accent}>
          {t.project.visitSite}
        </Button>
      )}

      <style>{`
        .tech-pill {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          border: 1px solid rgba(14,14,14,0.1);
          border-radius: 999px;
          color: rgba(14,14,14,0.5);
        }
      `}</style>
    </aside>
  );
}
