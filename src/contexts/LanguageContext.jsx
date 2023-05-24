import React, { useState, createContext, useContext } from "react";
import { languageOptions, dictionaryList } from "../languages";

// Create the language context with default selected language
const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

function LanguageContextProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem("rcml-lang");
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

  const userLanguageChange = (selected) => {
    const newLanguage = languageOptions[selected] ? selected : "en";
    setUserLanguage(newLanguage);
    window.localStorage.setItem("rcml-lang", newLanguage);
  };

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// Get text according to id & current language
function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}

export { LanguageContext, LanguageContextProvider, Text };
