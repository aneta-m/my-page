import React from "react";
import styles from "./IconListItem.module.scss";

const IconListItem = ({
  icon,
  img,
  text,
}: {
  icon?: React.ReactNode;
  img?: string;
  text: string;
}) => {
  return (
    <div className={styles.list_item}>
      {icon ? icon : <img src={img} alt={text} className={styles.img} />}
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconListItem;
