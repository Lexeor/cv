import { useContext } from "react";
import React from "react";
import { PopupContext } from "../contexts/PopupContext";
import { projects } from "../../data/data";

function Popup(props) {
  const { showPopup, togglePopup, popupContentId } = useContext(PopupContext);

  const currentProject = projects[popupContentId];

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
            <img src={currentProject.image} />
          </div>
          <div className="popup-details">
            <h3>{currentProject.name}</h3>
            <p>{currentProject.gitUrl}</p>
          </div>
        </div>
        <div className="popup-content">
          <h2>Задача</h2>
          <p>{currentProject.goal}</p>
          <h2>Решение</h2>
          <p>{currentProject.solution}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
