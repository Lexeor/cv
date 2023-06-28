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
          <h4>Links</h4>
          <a href="https://lexeor.github.io/cv">Portfolio / CV</a>
          {renderLinks}
          <h4>Skills</h4>
          <p>React</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>SASS</p>
          <p>Git</p>
          <p>UX/UI</p>
          <p>Reponsive Design</p>
          <h4>Languages</h4>
          <p>Russian</p>
          <p>English</p>
        </div>
      </div>
      <div className="print-content">
        <h2>Profile</h2>
        <h2>Strengths</h2>
        <h2>Projects</h2>
        <h2>Employment History</h2>
        <h2>Education</h2>
        <h2>Courses</h2>
        <h2>References</h2>
      </div>
    </div>
  );
};

export default PrintPage;
