import React from "react";
import styles from "./FixedSidebar.module.scss";

const FixedSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a className={styles.link} href="https://www.onet.pl">
        <i className={`fa-brands fa-linkedin-in ${styles.icon}`}></i>
      </a>
      <a className={styles.link} href="https://www.onet.pl">
        <i className={`fa-brands fa-github ${styles.icon}`}></i>
      </a>
    </div>
  );
};

export default FixedSidebar;
