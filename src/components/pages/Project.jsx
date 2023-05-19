import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/data";
import ImageGallery from "react-image-gallery";

function Project(props) {
  const currentProject = projects[props.projectId];

  const images = currentProject.images.map((image) => {
    return { original: image };
  });

  const renderGoal = currentProject.goal.map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  const renderSolution = currentProject.solution.map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  return (
    <div className="project-main">
      <h1>Project: {currentProject.name}</h1>
      <Link to="/" style={{ all: "unset" }}>
        <i className="ri-close-line close"></i>
      </Link>
      <div className="proj-image-area">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
        />
      </div>
      <div className="popup-details">
        <div>{currentProject.gitUrl}</div>
      </div>
      <div className="popup-content">
        <h2>Задача</h2>
        <div>{renderGoal}</div>
        <h2>Решение</h2>
        <div>{renderSolution}</div>
      </div>
    </div>
  );
}

export default Project;
