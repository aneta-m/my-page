import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../LanguageContext";
import en from "../translations/en.json";

const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const [dictionary, setDictionary] = useState<WebsiteData>(en);

  const importDictionary = async (language: string | null) => {
    const dictionary = await import(`../translations/${language}.json`);
    return dictionary;
  };

  useEffect(() => {
    if (language && language !== "en") {
      importDictionary(language).then((dictionary) => {
        setDictionary(dictionary);
      });
    } else {
      setDictionary(en);
    }
  }, [language]);
  return dictionary;
};
export default useTranslation;
