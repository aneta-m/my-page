import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import Button from "../Button/Button";

const Dropdown = ({
  list,
  children,
}: {
  list: JSX.Element[];
  children?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };
  window.addEventListener("click", (e) => {
    isOpen && setIsOpen(false);
  });
  return (
    <div className={styles.dropdown}>
      <Button
        onClick={toggleList}
        type={isOpen ? "dropdown_up" : "dropdown_down"}
      >
        {children || ""}
      </Button>
      <div className={isOpen ? styles.select_list : styles.select_hidden}>
        {isOpen ? list : ""}
      </div>
    </div>
  );
};

export default Dropdown;
