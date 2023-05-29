import React from "react";
import { Text } from "../contexts/LanguageContext";

function CertCard(props) {
  return (
    <div className="cert-card">
      <div className="cert-card-row">
        <img src={props.item.logo} alt="logo" />
        <div className="cert-card-content">
          <h2>{props.item.name}</h2>
          <h3>{props.item.specialization}</h3>
          <span>
            <Text tid="graduationDate" /> {props.item.graduationDate}
          </span>
        </div>
      </div>
      <a
        href={props.item.url}
        target="_blank"
        rel="noreferrer"
        className="download-icon"
      >
        <span>Download</span>
        <i className="fa-solid fa-file-pdf"></i>
      </a>
    </div>
  );
}

export default CertCard;