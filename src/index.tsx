import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PrintPage from "./components/PrintPage";
import "./styles/main.css";
import { LanguageContextProvider } from "./contexts/LangContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
      {/* <PrintPage /> */}
    </LanguageContextProvider>
  </React.StrictMode>
);
