import React from "react";

function Card(props) {
  const buildClass = () => {
    return `${props.item.icon} ${props.item.color}`;
  };

  const finalCard = props.item.url ? (
    <a href={props.item.url} target="_blank" className="card-link">
      <div className="skill-card">
        <i className={buildClass()}></i>
        <span>{props.item.name}</span>
      </div>
    </a>
  ) : (
    <div className="skill-card">
      <i className={buildClass()}></i>
      <span>{props.item.name}</span>
    </div>
  );
  return <div>{finalCard}</div>;
}

export default Card;
