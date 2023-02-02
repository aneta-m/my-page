import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button className={styles.logo} onClick={handleClick}>
      AM
    </button>
  );
};

export default Logo;
