import React from "react";

type LanguageSwitchProps = {
  language: string;
  setLanguage: (lang: string) => void;
};

function LanguageSwitch({ language, setLanguage }: LanguageSwitchProps) {
  const switcherClass = `slider round ${language}`;
  const checked = language === "en" ? false : true;

  return (
    <label className="language-switcher no-print">
      <input
        type="checkbox"
        defaultChecked={checked}
        onClick={() => setLanguage(language === "en" ? "ru" : "en")}
      />
      <span className={switcherClass}></span>
      <span className="select-en"></span>
      <span className="select-ru"></span>
    </label>
  );
}

export default LanguageSwitch;
