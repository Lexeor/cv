import React, { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";
import { Link } from "react-router-dom";
import { data as dataRu } from "../../data/data-ru";
import { data as dataEn } from "../../data/data-en";
import ImageGallery from "react-image-gallery";
import StackPill from "../StackPill";

type ProjectProps = {
  projectId: number;
  translate: (key: string) => string;
};

function Project({ projectId, translate }: ProjectProps) {
  const {
    state: { language },
  } = useContext(LangContext);
  const projects = language === "ru" ? dataRu.projects : dataEn.projects;
  const currentProject = projects[projectId];

  const images = currentProject.images.map((image) => {
    return { original: image };
  });

  const goalRender = currentProject.goal.map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  const solutionRender = currentProject.solution.map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  const stackRender = currentProject.stack.map((item) => {
    return <StackPill key={item.id} item={item} />;
  });

  return (
    <div className="project-main">
      <h1 className="main-header">{currentProject.name}</h1>
      <Link to="/" style={{ all: "unset" }}>
        <i className="ri-close-line close"></i>
      </Link>
      <div className="project-details">
        {currentProject.gitUrl && (
          <a
            href={currentProject.gitUrl}
            className="git-button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub Repo</span>
          </a>
        )}
        {currentProject.gitPagesUrl && (
          <a
            href={currentProject.gitPagesUrl}
            className="git-button green"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub Pages</span>
          </a>
        )}
      </div>
      <div className="project-content">
        <h1>{translate("goalHeader")}</h1>
        <div>{goalRender}</div>
        <h1>{translate("solutionHeader")}</h1>
        <div>{solutionRender}</div>
        <h1>{translate("usedStack")}</h1>
        <div className="stack-wrapper">{stackRender}</div>
      </div>
      <h1>{translate("visualizationHeader")}</h1>
      <div className="proj-image-area">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
        />
      </div>
    </div>
  );
}

export default Project;
