import React from "react";

function CertCard(props) {
  const logoPath = `./cv/${props.item.logo}`;
  const filePath = `./cv/${props.item.url}`;

  return (
    <div className="cert-card">
      <div className="cert-card-row">
        <img src={logoPath} alt="logo" />
        <div className="cert-card-content">
          <h2>{props.item.name}</h2>
          <h3>{props.item.specialization}</h3>
          <span>Дата окончания: {props.item.graduationDate}</span>
        </div>
      </div>
      <a href={filePath} target="_blank" className="download-icon">
        <span>Download</span>
        <i className="fa-solid fa-file-pdf"></i>
      </a>
    </div>
  );
}

export default CertCard;
