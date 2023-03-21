import { useState } from "react";

type Error = string | null;
type FormData = {
  [key: string]: { value: string; focus: boolean; error: Error };
};
type FieldRequiremnts = {
  [key: string]: { condition: (value: string) => boolean; error: Error }[];
};

const useValidation = (fieldRequirements: FieldRequiremnts) => {
  const fieldNames = Object.keys(fieldRequirements) as Array<
    keyof WebsiteData["contact"]["form"]
  >;
  const emptyFormData = fieldNames.reduce((acc, fieldName) => {
    return { ...acc, [fieldName]: { value: "", focus: false, error: null } };
  }, {});
  const [formData, setFormData] = useState<FormData>(emptyFormData);
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
      const isError = !requirement.condition(formData[fieldName].value);
      if (isError) {
        setFormData((prevState) => {
          return {
            ...prevState,
            [fieldName]: {
              ...prevState[fieldName],
              error: requirement.error,
            },
          };
        });
        errors.push(fieldName);
        break;
      }
    }
  };

  const validateForm = () => {
    fieldNames.forEach((fieldName) => {
      validateField(fieldName);
    });
    return errors;
  };

  return { formData, setFormData, validateForm, emptyFormData, fieldNames };
};

export default useValidation;
