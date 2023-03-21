import React from "react";
import useTranslation from "../../hooks/useTranslation";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Logo from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import styles from "./Nav.module.scss";

const Nav = ({ onClick }: { onClick: { (sectionId: string): void } }) => {
  const t = useTranslation();
  return (
    <nav className={styles.nav} data-testid="nav">
      <ul className={styles.nav_list}>
        <li className={styles.logo}>
          <Logo />
        </li>
        <li>
          <LanguageDropdown />
        </li>
        <li>
          <NavButton onClick={() => onClick("about")}>{t.nav.about}</NavButton>
        </li>
        <li>
          <NavButton onClick={() => onClick("projects")}>
            {t.nav.projects}
          </NavButton>
        </li>
        <li>
          <NavButton onClick={() => onClick("contact")}>
            {t.nav.contact}
          </NavButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
