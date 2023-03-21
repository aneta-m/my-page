import React from "react";
import styles from "./Image.module.scss";

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={styles.image_wrapper}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default Image;
