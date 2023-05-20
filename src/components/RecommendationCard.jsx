import React from "react";

function RecommendationCard(props) {
  const mailRef = `mailto:${props.item.email}`;

  return (
    <div className="ref-card">
      <div className="ref-card-details">
        <div className="ref-name">{props.item.name}</div>
        <div className="ref-position">{props.item.position}</div>
        <div className="ref-company">{props.item.company}</div>
        {props.sideBar && <span className="ref-email">{props.item.email}</span>}
      </div>
      {!props.sideBar && (
        <a href={mailRef} className="ref-mailto">
          <i className="fa-regular fa-envelope"></i>
        </a>
      )}
    </div>
  );
}

export default RecommendationCard;
