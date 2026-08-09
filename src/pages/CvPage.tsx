import { useLanguage } from "@/i18n/context";
import { cvContent } from "@/data/cv";
import { Button } from "@/components/Button";
import "@/styles/cv.css";

const CV_FILENAME = "CV-2026-Oliver-Dyrup-Hanert.pdf";

function spacedTitle(text: string) {
  return text.split("").join(" ");
}

export function CvPage() {
  const { locale } = useLanguage();
  const cv = cvContent[locale];

  return (
    <div className="cv-page">
      <div className="cv-toolbar no-print">
        <Button variant="outline" size="sm" href="/cv.pdf" download={CV_FILENAME}>
          {cv.downloadLabel}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => window.print()}>
          Print
        </Button>
      </div>

      <article className="cv-sheet">
        <div className="cv-main">
          <header>
            <h1 className="cv-header-name">
              {cv.titleLine1}
              <br />
              {cv.titleLine2}
            </h1>
            <p className="cv-header-subtitle">{cv.subtitle}</p>
          </header>

          <h2 className="cv-section-title">{spacedTitle(cv.sections.experience)}</h2>
          {cv.experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="cv-job">
              <div className="cv-job-role">{job.role}</div>
              <div className="cv-job-company">{job.company}</div>
              <div className="cv-job-period">{job.period}</div>
              <p className="cv-job-desc">{job.description}</p>
            </div>
          ))}

          <h2 className="cv-section-title">{spacedTitle(cv.sections.education)}</h2>
          {cv.education.map((edu) => (
            <div key={`${edu.degree}-${edu.period}`} className="cv-edu">
              <div className="cv-edu-degree">{edu.degree}</div>
              <div className="cv-edu-school">{edu.school}</div>
              <div className="cv-edu-period">{edu.period}</div>
            </div>
          ))}
        </div>

        <aside className="cv-sidebar">
          <h2 className="cv-section-title">{cv.sections.about}</h2>
          <div className="cv-block">
            <span className="cv-about-line">{cv.about.email}</span>
            <span className="cv-about-line">{cv.about.phone}</span>
            <span className="cv-about-line">{cv.about.location}</span>
            <span className="cv-about-line">{cv.about.detail}</span>
          </div>

          <h2 className="cv-section-title">{cv.sections.skills}</h2>
          <ul className="cv-skill-list">
            {cv.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h2 className="cv-section-title">{cv.sections.tools}</h2>
          <p className="cv-tools-text">{cv.tools}</p>

          <h2 className="cv-section-title">{cv.sections.languages}</h2>
          <ul className="cv-skill-list">
            {cv.languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>

          <h2 className="cv-section-title">{cv.sections.links}</h2>
          <ul className="cv-link-list">
            {cv.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </aside>

        <footer className="cv-footer">CV</footer>
      </article>
    </div>
  );
}
