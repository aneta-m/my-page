import React, { useState, useEffect } from "react";
import useWindowResize from "./useWindowResize";

const useScrollToSection = () => {
  const [targetElement, setTargetElement] = useState<{
    [key: string]: HTMLElement;
  } | null>(null);
  const isMobile = useWindowResize();
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const sectionElements: { [key: string]: HTMLElement } = {};
    sections.forEach((section) => {
      sectionElements[section.id] = section;
    });
    setTargetElement(sectionElements);
  }, []);

  const navigateToSection = (sectionId: string) => {
    const navOffset = isMobile ? 0 : sectionId === "about" ? 143 : 92;
    const sectionElement = targetElement ? targetElement[sectionId] : null;
    const scrollTopValue =
      sectionElement &&
      sectionElement.getBoundingClientRect().top +
        window.pageYOffset -
        navOffset;
    scrollTopValue &&
      window.scrollTo({ top: scrollTopValue, behavior: "smooth" });
  };
  return navigateToSection;
};

export default useScrollToSection;
