import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Logo from "../Logo/Logo";
import Heading from "../Heading/Heading";
import Video from "../Video/Video";

const Projects = () => {
  const projects: {
    title: string;
    text: string;
    list: string[];
    links: { name: string; url: string } | { name: string; url: string }[];
    media: JSX.Element;
  }[] = [
    {
      title: "Visual Calculator",
      text: "A calculator designed for kids, which visually demonstrates the basic mathematical operations of addition, subtraction, multiplication, and division using the representation of apples. It offers a fun and interactive way for children to learn and understand basic arithmetic concepts.",
      list: [
        "developed with React and TypeScript",
        "styled with SCSS modules",
        "tested with Jest and React Testing Library",
        "responsive",
      ],
      links: [
        { name: "Play with App", url: "https://www.onet.pl" },
        { name: "Get code", url: "https://www.github.com" },
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
      title: "This website",
      text: "A portfolio website designed as a responsive Single Page Website with all the content displayed in a scrollable format. The site includes sections for About, Projects, and Contact, where you can get in touch with me. The website is multi-lingual, allowing for switching between English and Polish language. ",
      list: [
        "developed with React and TypeScript",
        "use of Context API for switching between different languages",
        "styled with SCSS modules",
        "tested with Jest and React Testing Library",
        "responsive",
      ],
      links: { name: "Get code", url: "https://www.github.com" },
      media: <Logo />,
    },
  ];
  return (
    <section id="projects" className={styles.projects_section}>
      <Heading type="section_title">Projects</Heading>
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
