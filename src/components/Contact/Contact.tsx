import React from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <Heading type="section_title">Contact me</Heading>
        <Card type="simple">
          <Form />
        </Card>
      </div>
    </section>
  );
};

export default Contact;
