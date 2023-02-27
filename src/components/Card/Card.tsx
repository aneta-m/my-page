import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  type,
  children,
}: {
  type?: "simple";
  children: React.ReactNode;
}) => {
  return (
    <div className={`${styles.card} ${type ? styles[type] : ""}`}>
      {children}
    </div>
  );
};

export default Card;
