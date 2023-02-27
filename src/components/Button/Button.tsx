import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  onClick,
  link,
  color,
  children,
}: {
  onClick?: { (e: React.MouseEvent<HTMLButtonElement>): void };
  link?: string;
  color?: "dark" | "light";
  children: string;
}) => {
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
      className={`${styles.button} ${
        color === "light" ? styles.light : styles.dark
      }`}
    >
      {children}
    </a>
  );
};

export default Button;
