import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.scss";

const Nav = ({ onClick }: { onClick: { (sectionId: string): void } }) => {
  return (
    <nav>
      <ul className={styles.nav_list}>
        <li>
          <Logo />
        </li>
        <li>
          <button className={styles.link} onClick={(e) => onClick("about")}>
            About
          </button>
        </li>
        <li>
          <button className={styles.link} onClick={(e) => onClick("portfolio")}>
            Portfolio
          </button>
        </li>
        <li>
          <button className={styles.link} onClick={(e) => onClick("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
