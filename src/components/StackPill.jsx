import React from "react";

function StackPill(props) {
  const pillClass = () => {
    return `stack-pill ${props.item.color}`;
  };
  return <div className={pillClass()}>{props.item.name}</div>;
}

export default StackPill;
