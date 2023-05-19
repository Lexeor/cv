import React from "react";

function Card(props) {
  const buildClass = () => {
    return `${props.item.icon} ${props.item.color}`;
  };

  const finalCard = props.item.url ? (
    <a
      href={props.item.url}
      target="_blank"
      rel="noreferrer"
      className="card-link"
    >
      <div className="skill-card">
        {props.item.icon ? (
          <i className={buildClass()}></i>
        ) : (
          <img src={`icons/${props.item.svg}.svg`} alt="icon" />
        )}

        <span>{props.item.name}</span>
      </div>
    </a>
  ) : (
    <div className="skill-card">
      {props.item.icon ? (
        <i className={buildClass()}></i>
      ) : (
        <img src={`icons/${props.item.svg}.svg`} alt="icon" />
      )}
      <span>{props.item.name}</span>
    </div>
  );
  return <div>{finalCard}</div>;
}

export default Card;
