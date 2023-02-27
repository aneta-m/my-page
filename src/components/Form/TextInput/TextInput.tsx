import React, { useRef, useEffect } from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({
  fieldName,
  value,
  focus,
  onChange,
  onBlur,
  label,
  textarea,
  error,
}: {
  fieldName: string;
  value: string;
  focus: boolean;
  onBlur:
    | React.FocusEventHandler<HTMLInputElement>
    | React.FocusEventHandler<HTMLTextAreaElement>;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.ChangeEventHandler<HTMLTextAreaElement>;
  label?: string;
  textarea?: boolean;
  error: string | null;
}) => {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  useEffect(() => {
    if (focus && ref.current) {
      ref.current.focus();
    }
  }, [focus]);

  const formElement = textarea ? (
    <textarea
      name={fieldName}
      rows={7}
      value={value}
      onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
      className={styles.textarea}
      ref={ref as React.RefObject<HTMLTextAreaElement>}
      onBlur={onBlur as React.FocusEventHandler<HTMLTextAreaElement>}
    />
  ) : (
    <input
      name={fieldName}
      value={value}
      onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
      className={styles.input}
      ref={ref as React.RefObject<HTMLInputElement>}
      onBlur={onBlur as React.FocusEventHandler<HTMLInputElement>}
    />
  );
  const errorWarning = error ? (
    <p className={styles.error_warning}>{error}</p>
  ) : (
    <p className={styles.error_hidden}></p>
  );

  return (
    <div>
      {" "}
      {label ? (
        <label className={styles.label} htmlFor={fieldName}>
          {label} {formElement}
        </label>
      ) : (
        formElement
      )}
      {errorWarning}
    </div>
  );
};

export default TextInput;
