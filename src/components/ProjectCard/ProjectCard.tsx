import React, { useState, useRef } from "react";
import { ProjectCardProps } from "./types";
import { Link } from "react-router-dom";
import StackPill from "../StackPill";
import { useScroll, motion, useTransform } from "framer-motion";

function ProjectCard({ item, setProjectId, translate }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const isMobile = window.innerWidth < 600;

  // Animations
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "0 1",
      isMobile ? "0.5 1" : "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  let variants = {};

  if(!isMobile) {
    variants = {
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
  }

  // Renders
  const stackRender = item.stack.map((item) => {
    return <StackPill key={item.id} item={item} />;
  });

  // Functions
  function clickHandler() {
    setProjectId(item.id);
  }

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >
      <Link to="/project">
        <div 
          ref={ref}
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
    </motion.div >
  );
}

export default ProjectCard;
