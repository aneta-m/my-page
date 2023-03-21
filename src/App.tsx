import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import styles from "./App.module.scss";
import FixedSidebar from "./components/FixedSidebar/FixedSidebar";
import useScrollToSection from "./hooks/useScrollToSection";
import useWindowResize from "./hooks/useWindowResize";
import MobileNav from "./components/MobileNav/MobileNav";

const App = () => {
  const getInitialLanguage: () => string = () => {
    const data = window.localStorage.getItem("lang");
    if (data) {
      return data;
    }
    return "en";
  };
  const [language, setLanguage] = useState<string>(getInitialLanguage);
  const isMobile = useWindowResize();
  const navigateToSection = useScrollToSection();

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={styles.app}>
        {isMobile ? (
          <MobileNav onClick={navigateToSection} />
        ) : (
          <Nav onClick={navigateToSection} />
        )}
        <Header onClick={navigateToSection} />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FixedSidebar />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
