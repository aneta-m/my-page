import React, { ReactElement } from "react";
import styles from "./IconList.module.scss";
import IconListItem from "../IconListItem/IconListItem";

const IconList = ({
  list,
}: {
  list: {
    text: string;
    imgSrc?: string;
    icon?: ReactElement;
    align?: string;
  }[];
}) => {
  const listItems = list.map(
    (item, index) =>
      (item.imgSrc || item.icon) && (
        <li key={index}>
          <IconListItem
            img={item.imgSrc && item.imgSrc}
            icon={item.icon && item.icon}
            text={item.text}
            type={item.align === "top" ? "top-align" : undefined}
          />
        </li>
      )
  );
  return <ul className={styles.list}>{listItems}</ul>;
};

export default IconList;
