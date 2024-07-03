import { TrueButton } from "ds/button/TrueButton";
import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { AnyObject, ObjectSchema } from "yup";

export interface IInputProps {
  type?: string;
  name: string;
  schema: ObjectSchema<AnyObject>;
  defaultValue: string;
  defaultError: string;
}

export const Input: React.FC<IInputProps> = memo(
  ({ type = "text", name, schema, defaultValue, defaultError }) => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState(defaultError);
    const [key, setKey] = useState("");

    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
      console.log(name, defaultError);
      setError(defaultError);
    }, [name, defaultError]);

    const reset = useCallback(() => {
      setValue("");
      setKey("reset");
    }, []);

    const validate = useCallback(
      (name: string, value: string) => {
        const fieldSchema = schema?.pick([name]);
        fieldSchema
          ?.validate({ [name]: value })
          .then(() => setError(""))
          .catch((err) => setError(err.message));
      },
      [schema]
    );

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValue(value);
        validate(name, value);
      },
      [validate]
    );

    const handleBlur = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValue(value);
        validate(name, value);
        setKey("newkey");
      },
      [validate]
    );

    return (
      <div className="relative">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {name}
        </label>
        <input
          type={type}
          name={name}
          key={key}
          placeholder="name@company.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={value}
        />
        {/**<button onClick={reset}>
          <Closeicon />
        </button>**/}
        {value !== "" && (
          <TrueButton
            onClick={reset}
            className="text-gray-500 absolute end-1 bottom-2.5 focus:outline-none rounded-lg"
          />
        )}
        {error && (
          <div className="error-message text-red-600 p-1 text-sm">{error}</div>
        )}
      </div>
    );
  }
);
