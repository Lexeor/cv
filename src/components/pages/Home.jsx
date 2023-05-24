import React, { useContext } from "react";
import Card from "../Card";
import CertCard from "../CertCard";
import ProjectCard from "../ProjectCard";
import RecommendationCard from "../RecommendationCard";
import { data as dataRu } from "../../data/data-ru";
import { data as dataEn } from "../../data/data-en";
import { Text, LanguageContext } from "../../contexts/LanguageContext";

function Home(props) {
  const { userLanguage } = useContext(LanguageContext);
  const data = userLanguage === "ru" ? dataRu : dataEn;

  const primarySkillsRender = data.skills.primary.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const secondarySkillsRender = data.skills.secondary.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const dictionarySkillsRender = data.skills.third.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const linksRender = data.links.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const certificationsRender = data.certifications.map((item) => {
    return <CertCard key={item.id} item={item} />;
  });

  const projectsRender = data.projects.map((item) => {
    return (
      <ProjectCard
        key={item.id}
        item={item}
        setProjectId={props.setProjectId}
      />
    );
  });

  const recommendationsRender = data.references.map((item) => {
    return <RecommendationCard key={item.id} item={item} sideBar={false} />;
  });

  return (
    <div className="content">
      <section>
        <h1>
          <Text tid="helloHeader" />
        </h1>
        <p>
          <Text tid="aboutMe1" />
        </p>
        <p>
          <Text tid="aboutMe2" />
        </p>
      </section>
      <section>
        <h1>
          <Text tid="skillsHeader" />
        </h1>
        <h2>
          <Text tid="skillsSubheaderPrimary" />
        </h2>
        <div className="cards-wrapper">{primarySkillsRender}</div>
        <h2>
          <Text tid="skillsSubheaderSecondary" />
        </h2>
        <div className="cards-wrapper">{secondarySkillsRender}</div>
        <h2>
          <Text tid="skillsSubheaderThird" />
        </h2>
        <div className="cards-wrapper">{dictionarySkillsRender}</div>
        <p>
          <Text tid="skillsPhrase" />
        </p>
      </section>
      <section>
        <h1 className="no-print">
          <Text tid="projectsHeader" />
        </h1>
        <div className="projects-wrapper no-print">{projectsRender}</div>
      </section>
      <section>
        <h1>
          <Text tid="educationHeader" />
        </h1>
        <div className="cards-wrapper">{certificationsRender}</div>
      </section>
      <section>
        <h1 className="no-print">
          <Text tid="linksHeader" />
        </h1>
        <div className="cards-wrapper no-print">{linksRender}</div>
      </section>
      <section>
        <h1 className="no-print">
          <Text tid="referencesHeader" />
        </h1>
        <div className="cards-wrapper no-print">{recommendationsRender}</div>
      </section>
    </div>
  );
}

export default Home;
