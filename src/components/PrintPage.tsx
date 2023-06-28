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
        <p>
          For the last 12 years I have worked in the IT department of the
          Swedish company Sandvik, where I have gone from a Service Desk
          specialist to an IT infrastructure manager for Russia and the CIS. In
          my work, I devoted a lot of time to automating business processes
          using scripts and web applications, and in the end I realized that
          these tasks are the most interesting for me. It seems to me that now
          is a great time to change specialization.
        </p>
        <h2>Strengths</h2>
        <h3>Collaborative</h3>
        <p>
          12 years of work experience in multicultural cross-functional teams
          located all around the globe.
        </p>
        <h3>Eager to learn new skills</h3>
        <p>
          As a person switching his specialty I'm constantly seeking for new
          ways to grow and expand my skills.
        </p>
        <h3>Result-oriented</h3>
        <p>
          IT Infrastructure manager position taught me to focus on the result
          and looking for most efficient ways to achieve it.
        </p>
        <h2>Projects</h2>
        <h2>Employment History</h2>
        <h2>Education</h2>
        <h2>Courses</h2>
        <h2>References</h2>
        {renderReferences}
      </div>
    </div>
  );
};

export default PrintPage;
