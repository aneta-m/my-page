import React, { useContext } from "react";
import LanguageContext from "../../LanguageContext";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

const LanguageDropdown = () => {
  const languages = ["pl", "en"];
  const { language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (language: string) => {
    setLanguage && setLanguage(language);
    localStorage.setItem("lang", language);
  };
  const selectList = languages
    .filter((item) => item !== language)
    .map((item, index) => (
      <Button
        onClick={(e) => handleLanguageChange(item)}
        type="dropdown_list"
        key={index}
      >
        {item.toUpperCase()}
      </Button>
    ));

  return <Dropdown list={selectList}>{language?.toUpperCase()}</Dropdown>;
};

export default LanguageDropdown;
