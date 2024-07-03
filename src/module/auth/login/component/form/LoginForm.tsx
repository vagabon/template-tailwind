import { Input } from "ds/input/Input";
import { useForm } from "form/hook/useForm";
import { memo } from "react";
import * as yup from "yup";

export interface FormDto {}

interface AuthLoginDto extends FormDto {
  username: string;
  password: string;
}

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  password: yup.string().required("Required"),
});

export interface ILoginFormProps {}

export const LoginForm: React.FC<ILoginFormProps> = memo(() => {
  const handleSubmit = async (
    data: AuthLoginDto,
    errors: Record<keyof AuthLoginDto, string>
  ) => {
    console.log("formData", data);
    console.log("errors", errors);
  };

  const { formData, errors, formAction } = useForm<AuthLoginDto>(
    handleSubmit,
    {
      username: "",
      password: "",
    },
    validationSchema
  );

  return (
    <>
      formState: {JSON.stringify(formData)}
      <form className="space-y-4 md:space-y-6" action={formAction}>
        <div>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
        <Input
          name="username"
          schema={validationSchema}
          defaultError={errors["username"]}
          defaultValue={formData["username"]}
        />
        <Input
          type="password"
          name="password"
          schema={validationSchema}
          defaultError={errors["password"]}
          defaultValue={formData["password"]}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="text-primary w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </a>
        </p>
      </form>
    </>
  );
});
