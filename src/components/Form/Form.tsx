import React, { useState, useRef } from "react";
import styles from "./Form.module.scss";
import TextInput from "./TextInput/TextInput";
import useValidation from "../../hooks/useValidation";
import useTranslation from "../../hooks/useTranslation";

const Form = ({
  fieldRequirements,
  sendEmail,
}: {
  fieldRequirements: FieldRequirements;
  sendEmail: (formElement: HTMLFormElement) => void;
}) => {
  const t = useTranslation();

  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { formData, setFormData, validateForm, emptyFormData, fieldNames } =
    useValidation(fieldRequirements);

  const setFocus = (fieldName: string) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [fieldName]: { ...prevState[fieldName], focus: true },
      };
    });
  };

  const displaySendingConfirmation = () => {
    setIsMessageSent(true);
    setTimeout(() => setIsMessageSent(false), 5000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setFocus(errors[0]);
      return;
    }
    form.current && sendEmail(form.current);
    setFormData(emptyFormData);
    displaySendingConfirmation();
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
      validateForm();
    }
  };

  const handleBlur = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    formData[target.name].focus &&
      setFormData((prevState) => {
        return {
          ...prevState,
          [target.name]: { ...prevState[target.name], focus: false },
        };
      });
    if (formData[target.name].error) {
      validateForm();
    }
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit}>
      {fieldNames.map((fieldName) => {
        const field = formData[fieldName];
        return (
          <TextInput
            fieldName={fieldName}
            value={field.value}
            focus={field.focus || undefined}
            onChange={handleChange}
            label={t.contact.form[fieldName]}
            error={field.error}
            onBlur={handleBlur}
            textarea={fieldName === "message" ? true : false}
            key={fieldName}
          />
        );
      })}
      <input
        type="submit"
        value={t.contact.form.submit}
        className={styles.submit}
      />
      <p className={isMessageSent ? styles.confirmation : styles.hidden}>
        {isMessageSent ? "Your message has been sent successfully!" : ""}
      </p>
    </form>
  );
};

export default Form;
