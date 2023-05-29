import React from "react";

type CardType = {
  item: {
    id: number;
    name: string;
    icon?: string;
    svg?: string;
    color?: string;
    url?: string;
  };
};

function Card({ item }: CardType) {
  const buildClass = () => {
    return `${item.icon} ${item.color}`;
  };

  const finalCard = item.url ? (
    <a href={item.url} target="_blank" rel="noreferrer" className="card-link">
      <div className="skill-card">
        {item.icon ? (
          <i className={buildClass()}></i>
        ) : (
          <img src={`icons/${item.svg}.svg`} alt="icon" />
        )}

        <span>{item.name}</span>
      </div>
    </a>
  ) : (
    <div className="skill-card">
      {item.icon ? (
        <i className={buildClass()}></i>
      ) : (
        <img src={`icons/${item.svg}.svg`} alt="icon" />
      )}
      <span>{item.name}</span>
    </div>
  );
  return <div>{finalCard}</div>;
}

export default Card;
