import { useContext, forwardRef } from "react";

import { data as dataRu } from "../data/data-ru";
import { data as dataEn } from "../data/data-en";

import { LangContext } from "../contexts/LangContext";

const PrintPage = forwardRef(function PrintPage(props: any, compRef: any) {
  const {
    state: { language },
    dispatch: { translate },
  } = useContext(LangContext);

  const references = language === "ru" ? dataRu.references : dataEn.references;
  const links = dataEn.links;
  const education =
    language === "ru" ? dataRu.certifications[0] : dataEn.certifications[0];
  const courses =
    language === "ru" ? dataRu.certifications : dataEn.certifications;
  const employment = language === "ru" ? dataRu.employment : dataEn.employment;
  const projects =
    language === "ru" ? dataRu.projectsPrint : dataEn.projectsPrint;

  const renderLinks = links.map((link) => {
    return (
      <a key={link.id} href={link.url} target="_blank">
        {link.name}
      </a>
    );
  });

  const renderReferences = references.map((ref) => {
    return (
      <section key={ref.id} className="section-ref">
        <span>
          <strong>{ref.name}</strong> from <strong>{ref.company}</strong>
        </span>

        <span>{ref.position}</span>
        <span>{ref.email}</span>
      </section>
    );
  });

  const renderProjects = projects.map((proj) => {
    return (
      <section key={proj.id} className="section-education">
        <strong>{proj.name}</strong>

        <span className="secondary">{proj.date}</span>
        {proj.description.map((line) => {
          return <p>{line}</p>;
        })}
      </section>
    );
  });

  const renderEmploymentHistory = employment.map((item) => {
    return (
      <section className="section-education">
        <h3>
          {item.position} at {item.name}
        </h3>
        <span className="secondary">
          {item.from} - {item.to}
        </span>
        <p>{item.description}</p>
      </section>
    );
  });

  const renderEducation = () => {
    return (
      <section className="section-education">
        <h3>{education.name}</h3>
        <span>{education.specialization}</span>
        <span className="secondary">{education.graduationDate}</span>
      </section>
    );
  };

  const renderCourses = courses
    .filter((item) => item.id !== 0)
    .map((course) => {
      return (
        <section className="section-education">
          <h3>{course.specialization}</h3>
          <span>{course.name}</span>
          <span className="secondary">{course.graduationDate}</span>
        </section>
      );
    });

  return (
    <div className="container-print" ref={compRef}>
      <div className="info-bar print">
        <div className="img-area print"></div>
        <h2>{translate("firstName")}</h2>
        <h1>{translate("lastName")}</h1>
        <h3>React Frontend Developer</h3>
        <div className="infobar-print">
          <h4>Details</h4>
          <p>Baku, Azerbaijan</p>
          <p>+994 (010) 531-96-32</p>
          <a href="mailto:lexeor.ross@gmail.com" target="_blank">
            lexeor.ross@gmail.com
          </a>
          <h4>{translate("linksHeader")}</h4>
          <a href="https://lexeor.github.io/cv" target="_blank">
            Portfolio / CV
          </a>
          {renderLinks}
          <h4>{translate("skillsHeader")}</h4>
          <p>React</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>SASS</p>
          <p>Git</p>
          <p>UX/UI</p>
          <p>Reponsive Design</p>
          <h4>{translate("languagesHeader")}</h4>
          <p>Russian</p>
          <p>English</p>
        </div>
      </div>
      <div className="print-content">
        <h2>{translate("profileHeader")}</h2>
        <p>{translate("profileText")}</p>
        <h2>{translate("strengthsHeader")}</h2>
        <h3>{translate("strengthsSubeader1")}</h3>
        <p>{translate("strengthsSubeaderText1")}</p>
        <h3>{translate("strengthsSubeader2")}</h3>
        <p>{translate("strengthsSubeaderText2")}</p>
        <h3>{translate("strengthsSubeader3")}</h3>
        <p>{translate("strengthsSubeaderText3")}</p>
        <h2>{translate("projectsHeader")}</h2>
        {renderProjects}
        <h2>{translate("employmentHeader")}</h2>
        {renderEmploymentHistory}
        <h2>{translate("educationHeader")}</h2>
        {renderEducation()}
        <h2>{translate("coursesHeader")}</h2>
        {renderCourses}
        <h2>{translate("referencesHeader")}</h2>
        {renderReferences}
      </div>
    </div>
  );
});

export default PrintPage;
