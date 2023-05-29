import React from "react";

type StackPillProps = {
  item: {
    id: number;
    name: string;
    color: string;
  };
};

function StackPill({ item }: StackPillProps) {
  const pillClass = () => {
    return `stack-pill ${item.color}`;
  };
  return <div className={pillClass()}>{item.name}</div>;
}

export default StackPill;
