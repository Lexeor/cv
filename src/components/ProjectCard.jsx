import { Link } from "react-router-dom";
import StackPill from "./StackPill";

function ProjectCard(props) {
  const stackRender = props.item.stack.map((item) => {
    return <StackPill key={item.id} item={item} />;
  });

  function clickHandler() {
    props.setProjectId(props.item.id);
  }

  return (
    <div className="project-card" onClick={clickHandler}>
      <Link to="/project" style={{ all: "unset" }}>
        <div className="project-image">
          <img src={props.item.images[0]} alt="Project Thumbnail" />
        </div>
        <div className="project-card-content">
          <h2>{props.item.name}</h2>
          <p>{props.item.desc}</p>
        </div>
        <span>Использованный стек:</span>
        <div className="stack-wrapper">{stackRender}</div>
      </Link>
    </div>
  );
}

export default ProjectCard;
