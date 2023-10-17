import React, { useState } from "react";
import { Link } from "react-router-dom";
import StackPill from "./StackPill";
import { motion } from "framer-motion";

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

export const variants = {
  show: {
    rotate: -3,
    x: -10,
    transition: {
      ease: 'easeOut',
      duration: 0.3
    }
  },
  hide: {
    rotate: 0,
    x: 0,
  }
};

function ProjectCard({ item, setProjectId, translate }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  
  const stackRender = item.stack.map((item) => {
    return <StackPill key={item.id} item={item} />;
  });

  function clickHandler() {
    setProjectId(item.id);
  }

  return (
    <Link to="/project">
      <div 
        className="project-card"
        onClick={clickHandler}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div className="project-image" 
          variants={variants} 
          animate={hovered ? 'show' : 'hide'}
          initial="hide"
        >
          <img src={item.images[0]} alt="Project Thumbnail" />
        </motion.div>
        <div className="project-card_body">
          <div className="project-card-content">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
          <div className="filler"></div>
          <div className="stack-wrapper">{stackRender}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
