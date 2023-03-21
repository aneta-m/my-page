import React from "react";
import styles from "./Header.module.scss";
import photo from "../../assets/images/photo.png";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import useTranslation from "../../hooks/useTranslation";

const Header = ({ onClick }: { onClick: (sectionId: string) => void }) => {
  const t = useTranslation();
  return (
    <section className={styles.header} id="header">
      <div className={styles.flex_container}>
        <div className={styles.text}>
          <Heading type="main">Aneta Miatkowska</Heading>
          <Heading type="subheading">Front end developer</Heading>
          <div className={styles.buttons}>
            <Button onClick={() => onClick("contact")}>
              {t.header.contact_button}
            </Button>
            <Button link="https://www.onet.pl" color="light">
              {t.header.cv_button}
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
