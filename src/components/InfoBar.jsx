import React from "react";

function InfoBar() {
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
    </div>
  );
}

export default InfoBar;
