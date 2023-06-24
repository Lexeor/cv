import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import RecommendationCard from "./RecommendationCard";
import LanguageSwitch from "./LanguageSwitch";
import QRCode from "react-qr-code";
import { isMobile } from "react-device-detect";
import { LangContext } from "../contexts/LangContext";

import { data as dataRu } from "../data/data-ru";
import { data as dataEn } from "../data/data-en";

type InfoBarProps = {
  handlePrint: () => void;
  translate: (key: string) => string;
};

function InfoBar({ translate, handlePrint }: InfoBarProps) {
  const location = useLocation();
  const {
    state: { language },
    dispatch: { setLanguage },
  } = useContext(LangContext);
  const references = language === "ru" ? dataRu.references : dataEn.references;

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
          <h2>{translate("firstName")}</h2>
          <h1>{translate("lastName")}</h1>
          <h3>React Frontend Developer</h3>
        </div>
      </div>
      <LanguageSwitch language={language} setLanguage={setLanguage} />
      <div className="contacts">
        <h3>{translate("contactMe")}</h3>
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
      {/* {location.pathname === "/" && !isMobile && (
        <button className="btn-print" onClick={handlePrint}>
          <i className="fa-solid fa-print"></i>
          <span>{translate("print")}</span>
        </button>
      )} */}
      <div className="contacts-print">
        <h1 className="h-print">{translate("contacts")}</h1>
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
        <h1 className="h-print">{translate("referencesHeader")}</h1>
        {recommendationsRender}
      </div>
      <div className="contacts-print">
        <h1 className="h-print">{translate("seeOnline")}</h1>
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
