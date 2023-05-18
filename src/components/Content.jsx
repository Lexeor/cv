import React from "react";
import Card from "./Card";
import CertCard from "./CertCard";
import ProjectCard from "./ProjectCard";
import { skills, certifications, links, projects } from "../data/data";

function Content() {
  const primarySkillsRender = skills.primary.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const secondarySkillsRender = skills.secondary.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const linksRender = links.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const certificationsRender = certifications.map((item) => {
    return <CertCard key={item.id} item={item} />;
  });

  const projectsRender = projects.map((item) => {
    return <ProjectCard key={item.id} item={item} />;
  });

  return (
    <div className="content">
      <section>
        <h1>Описание</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex totam
          alias accusamus incidunt omnis nihil eligendi, unde, minus porro
          facilis eum dolore fugit quaerat corporis eaque ullam aut, voluptatem
          velit!
        </p>
      </section>
      <section>
        <h1>Скиллы</h1>
        <h2>Основные</h2>
        <div className="cards-wrapper">{primarySkillsRender}</div>
        <h2>Дополнительные</h2>
        <div className="cards-wrapper">{secondarySkillsRender}</div>
        <p>И я всегда буду рад научиться чему-то новому :)</p>
      </section>
      <section>
        <h1>Проекты</h1>
        <div className="projects-wrapper">{projectsRender}</div>
      </section>
      <section>
        <h1>Образование</h1>
        <div className="cards-wrapper">{certificationsRender}</div>
      </section>
      <section>
        <h1>Ссылки</h1>
        <div className="cards-wrapper">{linksRender}</div>
      </section>
    </div>
  );
}

export default Content;
