import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import IconList from "../IconList/IconList";
import styles from "./About.module.scss";
import useTranslation from "../../hooks/useTranslation";
import tsLogo from "../../assets/images/ts-logo.png";
import jsLogo from "../../assets/images/js-logo.png";
import rtlLogo from "../../assets/images/rtl-logo.png";
import jestLogo from "../../assets/images/jest-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";
import reduxLogo from "../../assets/images/redux-logo.png";
import scssLogo from "../../assets/images/scss-logo.png";

const About = () => {
  const t = useTranslation();
  const skills = [
    {
      imgSrc: htmlLogo,
      text: "HTML",
    },
    { imgSrc: jsLogo, text: "JavaScript" },
    {
      imgSrc: cssLogo,
      text: "CSS",
    },
    { imgSrc: tsLogo, text: "TypeScript" },
    { imgSrc: scssLogo, text: "SCSS" },
    {
      icon: (
        <i
          className="fa-brands fa-react"
          style={{ color: "rgb(97, 219, 251)" }}
        ></i>
      ),
      text: "React",
    },
    {
      icon: (
        <i
          className="fa-brands fa-git-alt"
          style={{ color: "rgb(241, 80, 47)" }}
        ></i>
      ),
      text: "git",
    },
    { imgSrc: reduxLogo, text: "Redux" },

    { imgSrc: jestLogo, text: "Jest" },

    { imgSrc: rtlLogo, text: "React Testing Library", align: "top" },
  ];
  return (
    <section id="about" className={styles.about} data-testid="about">
      <div className={styles.card_wrapper}>
        <Card>
          <Heading type="section_title">{t.about.title}</Heading>
          <section className={styles.text}>
            <p className={styles.paragraph}>{t.about.description.p_1}</p>
            <p className={styles.paragraph}>{t.about.description.p_2}</p>
            <p className={styles.paragraph}>{t.about.description.p_3}</p>
            <p className={styles.paragraph}>{t.about.description.p_4}</p>
          </section>
          <section className={styles.list}>
            <div className={styles.subheading}>
              <Heading type="title_center">{t.about.subtitle}</Heading>
            </div>
            <IconList list={skills} />
          </section>
        </Card>
      </div>
    </section>
  );
};

export default About;
