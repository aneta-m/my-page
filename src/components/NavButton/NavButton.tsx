import React from "react";
import styles from "./NavButton.module.scss";

const NavButton = ({
  onClick,
  sectionId,
  children,
}: {
  onClick: { (sectionId: string): void };
  sectionId: string;
  children: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    onClick(sectionId);

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default NavButton;
