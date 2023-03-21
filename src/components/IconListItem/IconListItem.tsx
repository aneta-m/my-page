import React from "react";
import styles from "./IconListItem.module.scss";

const IconListItem = ({
  icon,
  img,
  text,
  type,
}: {
  icon?: React.ReactNode;
  img?: string;
  text: string;
  type?: "top-align";
}) => {
  return (
    <div className={styles.list_item}>
      {icon ? (
        icon
      ) : (
        <img
          src={img}
          alt={text}
          className={`${styles.img} ${
            type === "top-align" ? styles.img_top : ""
          }`}
        />
      )}
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconListItem;
