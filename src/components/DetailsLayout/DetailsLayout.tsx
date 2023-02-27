import React from "react";
import BulletList from "../BulletList/BulletList";
import styles from "./DetailsLayout.module.scss";
import Button from "../Button/Button";

const DetailsLayout = ({
  text,
  list,
  links,
}: {
  text: string;
  list: string[];
  links: { name: string; url: string } | { name: string; url: string }[];
}) => {
  return (
    <section>
      <p className={styles.text}>{text}</p>
      <BulletList list={list} />
      <div className={styles.buttons}>
        {Array.isArray(links) ? (
          links.map((link, index) => (
            <Button
              link={link.url}
              color={index === 1 ? "light" : "dark"}
              key={index}
            >
              {link.name}
            </Button>
          ))
        ) : (
          <Button link={links.url}>{links.name}</Button>
        )}
      </div>
    </section>
  );
};

export default DetailsLayout;
