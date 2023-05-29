import { Link } from "react-router-dom";
import StackPill from "./StackPill";

type StackItemType = {
  id: number;
  name: string;
  color: string;
};

type ProjectCardProps = {
  item: {
    id: number;
    images: string[];
    name: string;
    desc: string;
    stack: StackItemType[];
    goal: string[];
    solution: string[];
    gitUrl: string | null;
  };
  setProjectId: (id: number) => void;
  translate: (key: string) => string;
};

function ProjectCard({ item, setProjectId, translate }: ProjectCardProps) {
  const stackRender = item.stack.map((item) => {
    return <StackPill key={item.id} item={item} />;
  });

  function clickHandler() {
    setProjectId(item.id);
  }

  return (
    <div className="project-card" onClick={clickHandler}>
      <Link to="/project">
        <div className="project-image">
          <img src={item.images[0]} alt="Project Thumbnail" />
        </div>
        <div className="project-card-content">
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
        </div>
        <div className="filler"></div>
        <span>{translate("usedStack")}</span>
        <div className="stack-wrapper">{stackRender}</div>
      </Link>
    </div>
  );
}

export default ProjectCard;
