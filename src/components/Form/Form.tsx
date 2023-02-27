import React, { useState, useRef } from "react";
import styles from "./Form.module.scss";
import TextInput from "./TextInput/TextInput";
import emailjs from "@emailjs/browser";

type Error = string | null;

type FormData = {
  [key: string]: { value: string; focus: boolean; error: Error };
};

const Form = () => {
  const emptyFormData = {
    name: { value: "", focus: false, error: null },
    email: { value: "", focus: false, error: null },
    message: { value: "", focus: false, error: null },
  };
  const [formData, setFormData] = useState<FormData>(emptyFormData);
  const [isSendingConfirmation, setIsSendingConfirmation] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const fieldRequirements: {
    [key: string]: { condition: (value: string) => boolean; error: Error }[];
  } = {
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
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(?:\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?)$/;
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
  const errors: string[] = [];

  const validateField = (fieldName: string) => {
    for (const requirement of fieldRequirements[fieldName]) {
      setFormData((prevState) => {
        return {
          ...prevState,
          [fieldName]: {
            ...prevState[fieldName],
            error: null,
          },
        };
      });
      const isValid = requirement.condition(formData[fieldName].value);
      if (!isValid && requirement.error) {
        errors.push(fieldName);
        setFormData((prevState) => {
          return {
            ...prevState,
            [fieldName]: {
              ...prevState[fieldName],
              error: requirement.error,
            },
          };
        });
        break;
      }
    }
  };

  const validateForm = (formData: FormData) => {
    const fieldNames = Object.keys(formData);
    fieldNames.forEach((name) => {
      validateField(name);
    });
  };
  const setFocus = (fieldName: string) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [fieldName]: { ...prevState[fieldName], focus: true },
      };
    });
  };

  const sendEmail = () => {
    form.current &&
      emailjs
        .sendForm(
          "service_rbxe5ao",
          "template_t6aly4p",
          form.current,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm(formData);
    if (errors.length > 0) {
      setFocus(errors[0]);
      return;
    }
    sendEmail();
    setFormData(emptyFormData);
    setIsSendingConfirmation(true);
    setTimeout(() => setIsSendingConfirmation(false), 5000);
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prevState) => {
      return {
        ...prevState,
        [target.name]: { ...prevState[target.name], value: target.value },
      };
    });
    if (formData[target.name].error) {
      validateForm(formData);
    }
  };

  const handleBlur = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prevState) => {
      return {
        ...prevState,
        [target.name]: { ...prevState[target.name], focus: false },
      };
    });
    if (formData[target.name].error) {
      validateForm(formData);
    }
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit}>
      <TextInput
        fieldName="name"
        value={formData.name.value}
        focus={formData.name.focus}
        onChange={handleChange}
        label="Name"
        error={formData.name.error}
        onBlur={handleBlur}
      />
      <TextInput
        fieldName="email"
        value={formData.email.value}
        focus={formData.email.focus}
        onChange={handleChange}
        label="E-mail"
        error={formData.email.error}
        onBlur={handleBlur}
      />
      <TextInput
        fieldName="message"
        value={formData.message.value}
        focus={formData.message.focus}
        onChange={handleChange}
        label="Message"
        textarea={true}
        error={formData.message.error}
        onBlur={handleBlur}
      />
      <input type="submit" value="Submit" className={styles.submit} />
      <p
        className={isSendingConfirmation ? styles.confirmation : styles.hidden}
      >
        Your message has been sent successfully!
      </p>
    </form>
  );
};

export default Form;
