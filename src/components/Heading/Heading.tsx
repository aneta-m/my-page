import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({
  type,
  children,
}: {
  type: "section_title" | "subheading" | "main" | "title" | "title_center";
  children: string;
}) => {
  if (type === "subheading") {
    return (
      <h2 className={`${styles.heading} ${styles.subheading}`}>{children}</h2>
    );
  }
  if (type === "section_title") {
    return (
      <h2 className={`${styles.heading} ${styles.section_title}`}>
        {children}
      </h2>
    );
  }
  if (type === "title") {
    return <h2 className={`${styles.heading} ${styles.title}`}>{children}</h2>;
  }
  if (type === "title_center") {
    return (
      <h2 className={`${styles.heading} ${styles.title_center}`}>{children}</h2>
    );
  } else {
    return <h1 className={`${styles.heading} ${styles.main}`}>{children}</h1>;
  }
};
export default Heading;
