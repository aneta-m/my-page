import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  onClick,
  link,
  color,
  type,
  children,
}: {
  onClick?: { (e: React.MouseEvent<HTMLButtonElement>): void };
  link?: string;
  color?: "dark" | "light";
  type?: "dropdown_up" | "dropdown_down" | "dropdown_list";
  children: React.ReactNode;
}) => {
  if (!type) {
    return onClick ? (
      <button
        onClick={onClick}
        className={`${styles.button} ${
          color === "light" ? styles.light : styles.dark
        }`}
      >
        {children}
      </button>
    ) : (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`${styles.button} ${
          color === "light" ? styles.light : styles.dark
        }`}
      >
        {children}
      </a>
    );
  }

  if (type === "dropdown_up" || type === "dropdown_down") {
    return (
      <button onClick={onClick} className={styles.dropdown}>
        {children}
        <i
          className={`fa-solid ${
            type === "dropdown_down" ? "fa-angle-down" : "fa-angle-up"
          } ${styles.icon}`}
        ></i>
      </button>
    );
  }
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
