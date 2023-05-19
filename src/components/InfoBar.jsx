import React from "react";

function InfoBar() {
  return (
    <div className="info-bar">
      <div className="info-bar-column">
        <div className="img-area"></div>
      </div>
      <div className="info-bar-column">
        <h2>Александр</h2>
        <h1>Тарасов</h1>
        <h3>React Frontend Developer</h3>
      </div>
      <p>
        После долгих лет работы менеджером по IT инфраструктуре в крупной
        европейской компании я понял, что больше всего мне нравится
        автоматизировать работу, создавая скрипты и веб-приложения.
      </p>
    </div>
  );
}

export default InfoBar;
