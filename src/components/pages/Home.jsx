import React from "react";
import Card from "../Card";
import CertCard from "../CertCard";
import ProjectCard from "../ProjectCard";
import RecommendationCard from "../RecommendationCard";
import {
  skills,
  certifications,
  links,
  projects,
  references,
} from "../../data/data";

function Home(props) {
  const primarySkillsRender = skills.primary.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const secondarySkillsRender = skills.secondary.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const dictionarySkillsRender = skills.third.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const linksRender = links.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const certificationsRender = certifications.map((item) => {
    return <CertCard key={item.id} item={item} />;
  });

  const projectsRender = projects.map((item) => {
    return (
      <ProjectCard
        key={item.id}
        item={item}
        setProjectId={props.setProjectId}
      />
    );
  });

  const recommendationsRender = references.map((item) => {
    return <RecommendationCard key={item.id} item={item} />;
  });

  return (
    <div className="content">
      <section>
        <h1>Привет!</h1>
        <p>
          Меня зовут Саша и мне всегда нравилось автоматизировать свою работу,
          разрабатывая скрипты и веб-приложения. В один момент я подумал, почему
          бы не сделать это своей профессией, и вот мы здесь :)
        </p>
        <p>
          Программированием я увлекаюсь с детства, но серьезно применять его в
          своей работе начал лет 5 назад и не планирую останавливаться!
        </p>
      </section>
      <section>
        <h1>Скиллы</h1>
        <h2>Основные</h2>
        <div className="cards-wrapper">{primarySkillsRender}</div>
        <h2>Дополнительные</h2>
        <div className="cards-wrapper">{secondarySkillsRender}</div>
        <h2>Разберусь "со словарём"</h2>
        <div className="cards-wrapper">{dictionarySkillsRender}</div>
        <p>И всегда буду рад научиться чему-то новому.</p>
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
      <section>
        <h1>Рекомендации</h1>
        <div className="cards-wrapper">{recommendationsRender}</div>
      </section>
    </div>
  );
}

export default Home;
