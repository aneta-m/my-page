import React from "react";

const LanguageContext = React.createContext<{
  language: string | null;
  setLanguage: React.Dispatch<React.SetStateAction<string>> | null;
}>({
  language: null,
  setLanguage: null,
});

export default LanguageContext;
