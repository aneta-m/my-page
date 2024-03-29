import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/aneta-miatkowska/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className={styles.link}
            href="https://github.com/aneta-m"
            target="_blank"
            rel="noreferrer"
            aria-label="github profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          Copyright &copy; Aneta Miatkowska 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
