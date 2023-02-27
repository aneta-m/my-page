import React from "react";
import styles from "./Header.module.scss";
import photo from "../../assets/images/photo.png";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Header = () => {
  return (
    <section className={styles.header} id="header">
      <div className={styles.flex_container}>
        <div className={styles.text}>
          <Heading type="main">Aneta Miatkowska</Heading>
          <Heading type="subheading">Front end developer</Heading>
          <div className={styles.buttons}>
            <Button onClick={() => console.log("send")}>Contact me</Button>
            <Button onClick={() => console.log("get cv")} color="light">
              Get my CV
            </Button>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <img alt="Aneta" src={photo} className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Header;
