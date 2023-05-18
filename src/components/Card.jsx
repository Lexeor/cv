import React from "react";

function Card(props) {
  const buildClass = () => {
    return `${props.item.icon} ${props.item.color}`;
  };

  return (
    <div className="skill-card">
      <i className={buildClass()}></i>
      <span>{props.item.name}</span>
    </div>
  );
}

export default Card;
