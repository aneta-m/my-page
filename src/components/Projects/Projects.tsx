import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Heading from "../Heading/Heading";
import Video from "../Video/Video";
import Image from "../Image/Image";
import useTranslation from "../../hooks/useTranslation";
import site from "../../assets/images/site.jpg";

const Projects = () => {
  const t = useTranslation();
  const projects: {
    title: string;
    text: string;
    list: string[];
    links: { name: string; url: string } | { name: string; url: string }[];
    media: JSX.Element;
  }[] = [
    {
      title: t.projects.project_1.title,
      text: t.projects.project_1.desc,
      list: [
        t.projects.project_1.list.item_1,
        t.projects.project_1.list.item_2,
        t.projects.project_1.list.item_3,
        t.projects.project_1.list.item_4,
      ],
      links: [
        { name: t.projects.project_1.button_1, url: "https://www.onet.pl" },
        { name: t.projects.project_1.button_2, url: "https://www.github.com" },
      ],
      media: (
        <Video
          sources={[
            { src: "/assets/videos/calculator.mp4", type: "video/mp4" },
            { src: "/assets/videos/calculator.wmv", type: "video/wmv" },
          ]}
        />
      ),
    },
    {
      title: t.projects.project_2.title,
      text: t.projects.project_2.desc,
      list: [
        t.projects.project_2.list.item_1,
        t.projects.project_2.list.item_2,
        t.projects.project_2.list.item_3,
        t.projects.project_2.list.item_4,
        t.projects.project_2.list.item_5,
      ],
      links: {
        name: t.projects.project_2.button_1,
        url: "https://www.github.com",
      },
      media: <Image src={site} alt="website screenshots different sizes" />,
    },
  ];
  return (
    <section
      id="projects"
      className={styles.projects_section}
      data-testid="projects"
    >
      <Heading type="section_title">{t.projects.title}</Heading>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            text={project.text}
            list={project.list}
            links={project.links}
            media={project.media}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
