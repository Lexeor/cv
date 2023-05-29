import React, { useReducer, createContext } from "react";

import en from "../languages/en.json";
import ru from "../languages/ru.json";

enum LangActionType {
  SET_LANGUAGE = "SET_LANGUAGE",
}

type LangState = {
  language: string;
};

type LangStateProps = {
  children: React.ReactNode;
};

type SetLanguageAction = {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
};

type ContextProps = {
  state: LangState;
  dispatch: {
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
  };
};

const langReducer = (
  state: LangState,
  action: SetLanguageAction
): LangState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

const localStorageLang = localStorage.getItem("rcml-lang");
const initialState = {
  language: localStorageLang ? localStorageLang : "en",
};

const LangContext = createContext({} as ContextProps);

const LanguageContextProvider = ({ children }: LangStateProps) => {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang: string) => {
    localStorage.setItem("rcml-lang", lang);
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    });
  };

  const translate = (key: string): string => {
    const { language } = state;
    let langData: { [key: string]: string } = {};

    if (language === "en") {
      langData = en;
    } else if (language === "ru") {
      langData = ru;
    }

    return langData[key];
  };

  return (
    <LangContext.Provider
      value={{ state, dispatch: { setLanguage, translate } }}
    >
      {children}
    </LangContext.Provider>
  );
};

export { LanguageContextProvider, LangContext };
