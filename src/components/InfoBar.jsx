import React from "react";
import { useLocation } from "react-router-dom";
import { references } from "../data/data";
import RecommendationCard from "./RecommendationCard";
import QRCode from "react-qr-code";

function InfoBar(props) {
  const location = useLocation();

  const recommendationsRender = references.map((item) => {
    return <RecommendationCard key={item.id} item={item} sideBar={true} />;
  });

  return (
    <div className="info-bar">
      <div className="info-bar-columns">
        <div className="info-bar-column">
          <div className="img-area"></div>
        </div>
        <div className="info-bar-column">
          <h2>Александр</h2>
          <h1>Тарасов</h1>
          <h3>React Frontend Developer</h3>
        </div>
      </div>
      <div className="contacts">
        <h3>Связаться со мной</h3>
        <div className="contacts-line">
          <a href="tg://resolve?domain=lexeor">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="mailto:lexeor.ross@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-tarasov-react"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      {location.pathname === "/" && (
        <button className="btn-print" onClick={props.handlePrint}>
          <i className="fa-solid fa-print"></i>
          <span>Распечатать</span>
        </button>
      )}
      <div className="contacts-print">
        <h1 className="h-print">Контакты</h1>
        <div className="contacts-line">
          <i className="fa-brands fa-telegram"></i>
          <span>@Lexeor</span>
        </div>
        <div className="contacts-line">
          <i className="fa-regular fa-envelope"></i>
          <span>lexeor.ross@gmail.com</span>
        </div>
        <div className="contacts-line">
          <i className="fa-brands fa-linkedin"></i>
          <span>@alexander-tarasov-react</span>
        </div>
      </div>
      <div className="references-print">
        <h1 className="h-print">Рекомендации</h1>
        {recommendationsRender}
      </div>
      <div className="contacts-print">
        <h1 className="h-print">Веб-версия</h1>
        <QRCode
          value="https://lexeor.github.io/cv/"
          className="h-print"
          size={150}
        />
      </div>
    </div>
  );
}

export default InfoBar;
