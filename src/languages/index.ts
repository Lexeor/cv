import en from "./en.json";
import ru from "./ru.json";

export const dictionaryList = { en: typeof en, ru: typeof ru };

export const languageOptions: { [key: string]: string } = {
  en: "English",
  ru: "Русский",
};
