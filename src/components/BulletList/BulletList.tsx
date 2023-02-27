import React from "react";
import styles from "./Bulletlist.module.scss";

const BulletList = ({ list }: { list: React.ReactNode[] }) => {
  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li className={styles.item} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
