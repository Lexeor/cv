import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { data as dataRu } from "../data/data-ru";
import { data as dataEn } from "../data/data-en";
import RecommendationCard from "./RecommendationCard";
import QRCode from "react-qr-code";
import { isMobile } from "react-device-detect";
import { Text, LanguageContext } from "../contexts/LanguageContext";

function InfoBar(props) {
  const location = useLocation();
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const references =
    userLanguage === "ru" ? dataRu.references : dataEn.references;

  const recommendationsRender = references.map((item) => {
    return <RecommendationCard key={item.id} item={item} sideBar={true} />;
  });

  const switcherClass = `slider round ${userLanguage}`;

  return (
    <div className="info-bar">
      <div className="info-bar-columns">
        <div className="info-bar-column">
          <div className="img-area"></div>
        </div>
        <div className="info-bar-column">
          <h2>
            <Text tid="firstName" />
          </h2>
          <h1>
            <Text tid="lastName" />
          </h1>
          <h3>React Frontend Developer</h3>
        </div>
      </div>
      <label className="language-switcher no-print">
        <input
          type="checkbox"
          onClick={() =>
            userLanguageChange(userLanguage === "ru" ? "en" : "ru")
          }
        />
        <span className={switcherClass}></span>
        <span className="select-en"></span>
        <span className="select-ru"></span>
      </label>
      <div className="contacts">
        <h3>
          <Text tid="contactMe" />
        </h3>
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
      {location.pathname === "/" && !isMobile && (
        <button className="btn-print" onClick={props.handlePrint}>
          <i className="fa-solid fa-print"></i>
          <span>
            <Text tid="print" />
          </span>
        </button>
      )}
      <div className="contacts-print">
        <h1 className="h-print">
          <Text tid="contacts" />
        </h1>
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
        <h1 className="h-print">
          <Text tid="referencesHeader" />
        </h1>
        {recommendationsRender}
      </div>
      <div className="contacts-print">
        <h1 className="h-print">
          <Text tid="seeOnline" />
        </h1>
        <QRCode
          value="https://lexeor.github.io/cv/"
          className="h-print"
          size={170}
          bgColor={"#f9f9f9"}
        />
      </div>
    </div>
  );
}

export default InfoBar;
