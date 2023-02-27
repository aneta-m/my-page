import React from "react";
import DetailsLayout from "../DetailsLayout/DetailsLayout";
import Heading from "../Heading/Heading";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
  title,
  text,
  list,
  links,
  media,
}: {
  title: string;
  text: string;
  list: string[];
  links: { name: string; url: string } | { name: string; url: string }[];
  media: JSX.Element;
}) => {
  return (
    <article className={styles.card}>
      <Heading type="title">{title}</Heading>
      <div className={styles.flex}>
        <DetailsLayout text={text} list={list} links={links} />
        <div className={styles.media_container}>{media}</div>
      </div>
    </article>
  );
};

export default ProjectCard;
