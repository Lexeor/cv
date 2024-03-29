import React, { useContext } from "react";
import Card from "../Card";
import CertCard from "../CertCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import RecommendationCard from "../RecommendationCard";
import { data as dataRu } from "../../data/data-ru";
import { data as dataEn } from "../../data/data-en";
import { LangContext } from "../../contexts/LangContext";

type HomeProps = {
  setProjectId: (id: number) => void;
  translate: (key: string) => string;
};

function Home({ translate, setProjectId }: HomeProps) {
  const {
    state: { language },
  } = useContext(LangContext);
  const data = language === "ru" ? dataRu : dataEn;

  const primarySkillsRender = data.skills.primary.map((item, idx) => {
    return <Card key={item.id} item={item} index={idx} />;
  });

  const secondarySkillsRender = data.skills.secondary.map((item, idx) => {
    return <Card key={item.id} item={item} index={idx} />;
  });

  const dictionarySkillsRender = data.skills.third.map((item, idx) => {
    return <Card key={item.id} item={item} index={idx} />;
  });

  const linksRender = data.links.map((item, idx) => {
    return <Card key={item.id} item={item} index={idx} />;
  });

  const certificationsRender = data.certifications.map((item) => {
    return <CertCard key={item.id} item={item} translate={translate} />;
  });

  const projectsRender = data.projects.map((item) => {
    return (
      <ProjectCard
        key={item.id}
        item={item}
        setProjectId={setProjectId}
        translate={translate}
      />
    );
  });

  const recommendationsRender = data.references.map((item) => {
    return <RecommendationCard key={item.id} item={item} sideBar={false} />;
  });

  return (
    <div className="content">
      <section>
        <h1>{translate("helloHeader")}</h1>
        <p>{translate("aboutMe1")}</p>
        <p>{translate("aboutMe2")}</p>
      </section>
      <section>
        <h1>{translate("skillsHeader")}</h1>
        <h2>{translate("skillsSubheaderPrimary")}</h2>
        <div className="cards-wrapper">{primarySkillsRender}</div>
        <h2>{translate("skillsSubheaderSecondary")}</h2>
        <div className="cards-wrapper">{secondarySkillsRender}</div>
        <h2>{translate("skillsSubheaderThird")}</h2>
        <div className="cards-wrapper">{dictionarySkillsRender}</div>
        <p>{translate("skillsPhrase")}</p>
      </section>
      <section>
        <h1 className="no-print">{translate("projectsHeader")}</h1>
        <div className="projects-wrapper no-print">{projectsRender}</div>
      </section>
      <section>
        <h1>{translate("educationHeader")}</h1>
        <div className="full-card-wrapper">{certificationsRender}</div>
      </section>
      <section>
        <h1 className="no-print">{translate("linksHeader")}</h1>
        <div className="cards-wrapper no-print">{linksRender}</div>
      </section>
      <section>
        <h1 className="no-print">{translate("referencesHeader")}</h1>
        <div className="full-card-wrapper no-print">{recommendationsRender}</div>
      </section>
    </div>
  );
}

export default Home;
