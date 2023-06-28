import { useContext } from "react";

import { data as dataRu } from "../data/data-ru";
import { data as dataEn } from "../data/data-en";

import { LangContext } from "../contexts/LangContext";

const PrintPage = () => {
  const {
    state: { language },
    dispatch: { translate },
  } = useContext(LangContext);

  const references = language === "ru" ? dataRu.references : dataEn.references;
  const links = dataEn.links;

  let renderLinks = links.map((link) => {
    return <a href={link.url}>{link.name}</a>;
  });

  let renderReferences = references.map((ref) => {
    return (
      <section className="section-ref">
        <span>
          <strong>{ref.name}</strong> from <strong>{ref.company}</strong>
        </span>

        <span>{ref.position}</span>
        <span>{ref.email}</span>
      </section>
    );
  });

  return (
    <div className="container">
      <div className="info-bar print">
        <div className="img-area print"></div>
        <h2>{translate("firstName")}</h2>
        <h1>{translate("lastName")}</h1>
        <h3>React Frontend Developer</h3>
        <div className="infobar-print">
          <h4>Details</h4>
          <p>Baku, Azerbaijan</p>
          <p>+994 (010) 531-96-32</p>
          <a href="mailto:lexeor.ross@gmail.com">lexeor.ross@gmail.com</a>
          <h4>{translate("linksHeader")}</h4>
          <a href="https://lexeor.github.io/cv">Portfolio / CV</a>
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
        <h2>{translate("employmentHeader")}</h2>
        <h2>{translate("educationHeader")}</h2>
        <h2>{translate("coursesHeader")}</h2>
        <h2>{translate("referencesHeader")}</h2>
        {renderReferences}
      </div>
    </div>
  );
};

export default PrintPage;
