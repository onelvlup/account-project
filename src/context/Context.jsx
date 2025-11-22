// GlobalContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Create the context
const GlobalContext = createContext();

// Create the provider
export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("lang")) || "ru"
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (localStorage.getItem("lang")) {
      console.log(language);
      i18n.changeLanguage(language);
      localStorage.setItem("lang", JSON.stringify(language));
      return;
    }
    localStorage.setItem("lang", JSON.stringify("ru"));
  }, [language]);

  const [formVisible, setFormVisible] = useState(false);
  const toggleFormVisible = () => {
    setFormVisible((p) => !p);
  };

  const context = {
    formVisible,
    toggleFormVisible,
    language,
    setLanguage,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

// Custom hook to use global state
export const useGlobalState = () => {
  return useContext(GlobalContext);
};
