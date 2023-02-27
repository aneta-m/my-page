import React from "react";
import Logo from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import styles from "./Nav.module.scss";

const Nav = ({ onClick }: { onClick: { (sectionId: string): void } }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.logo}>
          <Logo />
        </li>
        <li>
          <NavButton onClick={onClick} sectionId="about">
            About
          </NavButton>
        </li>
        <li>
          <NavButton onClick={onClick} sectionId="projects">
            Projects
          </NavButton>
        </li>
        <li>
          <NavButton onClick={onClick} sectionId="contact">
            Contact
          </NavButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
