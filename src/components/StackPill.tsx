import React from "react";

type StackPillProps = {
  item: {
    id: number;
    name: string;
    color: string;
  };
};

function StackPill({ item }: StackPillProps) {
  // Class for pill circle badge
  const circleClass = () => {
    return `pill-circle ${item.color}`;
  };

  return (
    <div className="stack-pill">
      <div className={circleClass()}></div>
      <span>{item.name}</span>
    </div>
  );
}

export default StackPill;
