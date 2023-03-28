import React from "react";
import styles from "./FixedSidebar.module.scss";

const FixedSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/aneta-miatkowska/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin profile"
          >
            <i className={`fa-brands fa-linkedin-in ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://github.com/aneta-m"
            target="_blank"
            rel="noreferrer"
            aria-label="github profile"
          >
            <i className={`fa-brands fa-github ${styles.icon}`}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FixedSidebar;
