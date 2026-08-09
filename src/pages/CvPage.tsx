import { useLanguage } from "@/i18n/context";
import { cvContent } from "@/data/cv";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/constants";
import "@/styles/cv.css";

const CV_FILENAME = "CV-2026-Oliver-Dyrup-Hanert.pdf";

export function CvPage() {
  const { locale } = useLanguage();
  const cv = cvContent[locale];

  return (
    <div className="cv-page font-body">
      <div className="cv-toolbar no-print">
        <Button variant="outline" size="sm" href="/cv.pdf" download={CV_FILENAME}>
          {cv.downloadLabel}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => window.print()}>
          {locale === "da" ? "Print" : "Print"}
        </Button>
      </div>

      <article className="cv-sheet">
        <div className="cv-accent" />

        <h1 className="cv-name">
          Oliver
          <br />
          Dyrup Hanert
        </h1>
        <p className="cv-role">{cv.roleLine}</p>

        <div className="cv-contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>{SITE.phone}</span>
          <a href={SITE.url}>{SITE.url.replace("https://", "")}</a>
          <a href={SITE.linkedin}>LinkedIn</a>
          <span>{SITE.location}</span>
        </div>

        <section className="cv-section">
          <h2 className="cv-section-label">{locale === "da" ? "Profil" : "Profile"}</h2>
          <p className="cv-profile">{cv.profile}</p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-label">{cv.sections.experience}</h2>
          {cv.experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="cv-job">
              <div className="cv-job-header">
                <div>
                  <div className="cv-job-company">{job.company}</div>
                  <div className="cv-job-role">{job.role}</div>
                </div>
                <div className="cv-job-meta">
                  {job.period} · {job.location}
                </div>
              </div>
              <ul className="cv-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.note && <p className="cv-note">{job.note}</p>}
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-label">{cv.sections.education}</h2>
          {cv.education.map((edu) => (
            <div key={`${edu.degree}-${edu.period}`} className="cv-edu">
              <div className="cv-edu-degree">{edu.degree}</div>
              <div className="cv-edu-school">{edu.school}</div>
              <div className="cv-edu-meta">
                {edu.period} · {edu.location}
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section cv-columns">
          <div>
            <h2 className="cv-section-label">{cv.sections.skills}</h2>
            <div className="cv-tags">{cv.skills.join(" · ")}</div>
          </div>
          <div>
            <h2 className="cv-section-label">{cv.sections.tools}</h2>
            <div className="cv-tags">{cv.tools.join(" · ")}</div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-label">{cv.sections.languages}</h2>
          <p className="cv-languages">{cv.languages}</p>
        </section>
      </article>
    </div>
  );
}
