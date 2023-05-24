import React, { useContext } from "react";
import { Text, LanguageContext } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { data as dataRu } from "../../data/data-ru";
import { data as dataEn } from "../../data/data-en";
import ImageGallery from "react-image-gallery";
import StackPill from "../StackPill";

function Project(props) {
  const { userLanguage } = useContext(LanguageContext);
  const projects = userLanguage === "ru" ? dataRu.projects : dataEn.projects;
  const currentProject = projects[props.projectId];

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
      <h1>Project: {currentProject.name}</h1>
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
        <h2>
          <Text tid="goalHeader" />
        </h2>
        <div>{goalRender}</div>
        <h2>
          <Text tid="solutionHeader" />
        </h2>
        <div>{solutionRender}</div>
        <h2>
          <Text tid="usedStack" />
        </h2>
        <div className="stack-wrapper">{stackRender}</div>
      </div>
      <h2>
        <Text tid="visualizationHeader" />
      </h2>
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
