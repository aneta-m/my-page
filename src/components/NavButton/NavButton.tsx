import React from "react";
import styles from "./NavButton.module.scss";

const NavButton = ({
  onClick,
  children,
}: {
  onClick: { (): void };
  children: string;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavButton;
