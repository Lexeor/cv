import React from "react";

type RecommendationCardProps = {
  item: {
    id: number;
    name: string;
    position: string;
    company: string;
    email: string;
  };
  sideBar: boolean;
};

function RecommendationCard({ item, sideBar }: RecommendationCardProps) {
  const mailRef = `mailto:${item.email}`;

  return (
    <div className="ref-card">
      <div className="ref-card-details">
        <div className="ref-name">{item.name}</div>
        <div className="ref-position">{item.position}</div>
        <div className="ref-company">{item.company}</div>
        {sideBar && <span className="ref-email">{item.email}</span>}
      </div>
      {!sideBar && (
        <a href={mailRef} className="ref-mailto">
          <i className="fa-regular fa-envelope"></i>
        </a>
      )}
    </div>
  );
}

export default RecommendationCard;
