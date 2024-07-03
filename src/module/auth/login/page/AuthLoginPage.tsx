import { Page } from "ds/page/Page";
import { LoginForm } from "../component/form/LoginForm";

export interface IAuthLoginPageProps {
  googleClientId: string;
  facebookClientId: string;
  googleCaptchaId: string;
}

const AuthLoginPage: React.FC<IAuthLoginPageProps> = () => {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </Page>
  );
};
export default AuthLoginPage;
