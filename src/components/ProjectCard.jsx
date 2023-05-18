import React, { useContext } from "react";
import StackPill from "./StackPill";
import { PopupContext } from "./contexts/PopupContext";

function ProjectCard(props) {
  const { togglePopup } = useContext(PopupContext);

  const stackRender = props.item.stack.map((item) => {
    return <StackPill key={item.id} item={item} />;
  });

  return (
    <div className="project-card" onClick={() => togglePopup(props.item.id)}>
      <div className="project-image">
        <img src={props.item.image} alt="Project Thumbnail" />
      </div>
      <div className="project-card-content">
        <h2>{props.item.name}</h2>
        <p>{props.item.desc}</p>
      </div>
      <span>Использованный стек:</span>
      <div className="stack-wrapper">{stackRender}</div>
    </div>
  );
}

export default ProjectCard;
