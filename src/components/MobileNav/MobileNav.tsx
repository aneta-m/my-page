import React, { useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Logo from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import styles from "./MobileNav.module.scss";

const MobileNav = ({ onClick }: { onClick: (sectionId: string) => void }) => {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen((prevState) => !prevState);
  const handleClick = (sectionId: string): void => {
    onClick(sectionId);
    toggleNav();
  };
  return (
    <nav data-testid="mobile-nav">
      <button
        className={styles.toggle_button}
        onClick={toggleNav}
        aria-label="Open navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        className={`${styles.mobile_nav} ${
          isOpen ? styles.mobile_nav_open : ""
        }`}
      >
        {isOpen ? (
          <button
            className={styles.toggle_button}
            onClick={toggleNav}
            aria-label="Close navigation"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        ) : (
          ""
        )}
        <div className={styles.logo} onClick={() => handleClick("header")}>
          <Logo />
        </div>
        <ul className={styles.mobile_nav_list}>
          <li>
            <NavButton onClick={() => handleClick("about")}>
              {t.nav.about}
            </NavButton>
          </li>
          <li>
            <NavButton onClick={() => handleClick("projects")}>
              {t.nav.projects}
            </NavButton>
          </li>
          <li>
            <NavButton onClick={() => handleClick("contact")}>
              {t.nav.contact}
            </NavButton>
          </li>
          <li>
            <LanguageDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
