import {
  ChangeEvent,
  MouseEvent,
  useActionState,
  useCallback,
  useState,
} from "react";
import { useFormStatus } from "react-dom";
import { AnyObject, ObjectSchema, ValidationError } from "yup";

interface FormProps<T> {
  touched: Record<keyof T, boolean>;
  errors: Record<keyof T, string>;
  formData: T;
  formAction: () => void;
  pending: boolean;
  formState: T;
  submitCount: number;
  register: (name: keyof T) => {
    name: keyof T;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
    value: T[keyof T];
  };
  reset: (
    name: keyof T,
    defaultValue?: T[keyof T] | string
  ) => (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const useForm = <T>(
  handleSubmit: (data: T, errors: Record<keyof T, string>) => void,
  initialState: Awaited<T>,
  validationSchema?: ObjectSchema<AnyObject>
): FormProps<T> => {
  /* @ts-expect-error wait for React 19 to correct the ActionState */
  const [formState, formAction] = useActionState<T>(onSubmit, initialState);
  const { pending } = useFormStatus();
  const [submitCount, setSubmitCount] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>
  );
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  );

  const validate = async (data: T) => {
    let errors = {};
    try {
      await validationSchema?.validate(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof ValidationError) {
        const newErrors: Record<string, string> = {};
        err.inner.forEach((error) => {
          if (error.path) newErrors[error.path] = error.message;
        });
        errors = newErrors;
      }
    }
    return errors as Record<keyof T, string>;
  };

  async function onSubmit(_: T, data: FormData): Promise<T> {
    setSubmitCount((count) => count + 1);
    const fieldValues = Object.fromEntries(data) as T;
    const errors = await validate(fieldValues);
    console.log(fieldValues, errors);
    setErrors(errors);
    setFormData(fieldValues as Awaited<T>);
    if (Object.entries(errors).length === 0) {
      await handleSubmit(fieldValues, errors);
    }
    return fieldValues;
  }

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  }, []);

  const handleBlur = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      if (validationSchema) {
        // creating a schema only for the blurred field
        const fieldSchema = validationSchema.pick([name]);
        fieldSchema
          .validate({ [name]: value })
          .then()
          .catch();
      }
      //setTouched((prev) => ({ ...prev, [name]: true }));
    },
    [validationSchema]
  );

  const reset = useCallback(
    (name: keyof T, defaultValue: T[keyof T] | string = "") =>
      (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setFormData((prev) => ({ ...prev, [name]: defaultValue }));
      },
    []
  );

  const register = useCallback(
    (name: keyof T) => ({
      name,
      onChange: handleChange,
      onBlur: handleBlur,
      value: formData[name],
    }),
    [handleChange, handleBlur, formData]
  );

  return {
    formState,
    formData,
    touched,
    errors,
    formAction,
    pending,
    submitCount,
    register,
    reset,
  };
};
