import React from "react";

function CertCard(props) {
  return (
    <div className="cert-card">
      <img src={props.item.logo} alt="logo" />
      <div className="cert-card-content">
        <h2>{props.item.name}</h2>
        <h3>{props.item.specialization}</h3>
        <span>Дата окончания: {props.item.graduationDate}</span>
      </div>
      <div className="download-icon">
        <a href={props.item.url} target="_blank">
          <i className="fa-solid fa-file-pdf"></i>
        </a>
      </div>
    </div>
  );
}

export default CertCard;
