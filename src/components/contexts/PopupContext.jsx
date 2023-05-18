import React, { createContext, useState } from "react";

export const PopupContext = createContext(null);

export const PopupContextProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContentId, setPopupContentId] = useState(0);

  const togglePopup = (contentId = 0) => {
    setPopupContentId(contentId);
    setShowPopup((prev) => !prev);
  };

  const value = {
    showPopup,
    togglePopup,
    popupContentId,
  };

  return (
    <PopupContext.Provider value={value}> {children} </PopupContext.Provider>
  );
};
