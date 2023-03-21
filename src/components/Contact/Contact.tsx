import React from "react";
import useTranslation from "../../hooks/useTranslation";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const t = useTranslation();
  const fieldRequirements: FieldRequirements = {
    name: [
      { condition: (value) => !!value.trim(), error: "Please enter your name" },
      {
        condition: (value) => value.length < 100,
        error: "Please enter a shorter name (100 characters max)",
      },
      {
        condition: (value) => {
          const validRegex = /^[\p{L}\-'\s]+$/u;
          return !!value.match(validRegex);
        },
        error: "Please use only letters, spaces, hyphens, or apostrophes",
      },
      {
        condition: (value) => value.length > 1,
        error: "The name should be at least 2 characters long",
      },
    ],
    email: [
      { condition: (value) => !!value.trim(), error: "This field is required" },
      {
        condition: (value) => {
          const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(?:\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?)$/;
          return !!value.match(validRegex);
        },
        error: "Please provide a valid e-mail address",
      },
    ],
    message: [
      { condition: (value) => !!value.trim(), error: "This field is required" },
      {
        condition: (value) => value.length < 1000,
        error: "Please enter a message that is 1000 characters or fewer",
      },
      {
        condition: (value) => {
          const validRegex =
            /^[\p{L}0-9\s!@#$%^&*()_~\-+={}[\]\\|:;"'<>,.?/]*$/;
          return !!value.match(validRegex) || value.trim().length > 0;
        },
        error:
          "Sorry, at least one character you entered is not allowed. Please check that you are not using any special or invalid characters.",
      },
    ],
  };
  const sendEmail = (formElement: HTMLFormElement) => {
    emailjs
      .sendForm(
        "service_rbxe5ao",
        "template_t6aly4p",
        formElement,
        "jQCRRYx-AQ_DokvBI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className={styles.contact} data-testid="contact">
      <div className={styles.container}>
        <Heading type="section_title">{t.contact.title}</Heading>
        <Card type="simple">
          <Form fieldRequirements={fieldRequirements} sendEmail={sendEmail} />
        </Card>
      </div>
    </section>
  );
};

export default Contact;
