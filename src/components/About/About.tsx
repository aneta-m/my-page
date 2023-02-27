import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import IconList from "../IconList/IconList";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.card_wrapper}>
        <Card>
          <Heading type="section_title">About</Heading>
          <section className={styles.text}>
            <p className={styles.paragraph}>
              I am a driven front-end developer with a solid foundation in
              React, TypeScript, JavaScript, HTML and CSS.
            </p>
            <p className={styles.paragraph}>
              My goal is to write clean, readable code that complies with
              current recommendations and is verified with tests.
            </p>
            <p className={styles.paragraph}>
              With passion both for self-improvement and programming I am always
              eager to learn and grow as a developer.
            </p>
          </section>
          <section className={styles.list}>
            <div className={styles.subheading}>
              <Heading type="title_center">
                Proficient Tools and Technologies:
              </Heading>
            </div>
            <IconList />
          </section>
        </Card>
      </div>
    </section>
  );
};

export default About;

{
  /* <p className={styles.paragraph}>
            , consistently delivering high-quality results.
          </p> */
}

{
  /* <p className={styles.text}>
              I enjoy building applications that are both visually appealing and
              user-friendly. I pay close attention to detail to ensure that my
              projects are functioning smoothly.
            </p> */
}
{
  /* <p>
              My background in finance gives me a unique perspective and allows
              me to bring a strong understanding of financial concepts to any
              related projects.
            </p> */
}
// I bring a strong work ethic to every project I work on.
