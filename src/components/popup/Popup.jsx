import { useContext } from "react";
import React from "react";
import { PopupContext } from "../contexts/PopupContext";
import { projects } from "../../data/data";

function Popup(props) {
  const { showPopup, togglePopup, popupContentId } = useContext(PopupContext);

  const currentProject = projects[popupContentId];

  const renderGoal = currentProject.goal.map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  const renderSolution = currentProject.solution.map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  return (
    <div
      className="overlay"
      style={{
        visibility: showPopup ? "visible" : "hidden",
        opacity: showPopup ? "1" : "0",
      }}
    >
      <div className="popup">
        <i className="ri-close-line close" onClick={() => togglePopup()}></i>
        <div className="popup-sidebar">
          <div className="popup-image">
            <img src={currentProject.image} alt="Project" />
          </div>
          <div className="popup-details">
            <h3>{currentProject.name}</h3>
            <div>{currentProject.gitUrl}</div>
          </div>
        </div>
        <div className="popup-content">
          <h2>Задача</h2>
          <div>{renderGoal}</div>
          <h2>Решение</h2>
          <div>{renderSolution}</div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
