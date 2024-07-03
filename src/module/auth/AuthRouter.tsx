import { NotFoundPage } from "module/not-found/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AuthLoginPage from "./login/page/AuthLoginPage";

export interface IAuthRouterProps {
  googleClientId: string;
  facebookClientId: string;
  googleCaptchaId: string;
}

export const AuthRouter: React.FC<IAuthRouterProps> = ({
  googleClientId,
  facebookClientId,
  googleCaptchaId,
  ...rest
}) => {
  return (
    <Routes>
      <Route>
        <Route
          path="/signin"
          element={
            <AuthLoginPage
              googleClientId={googleClientId}
              facebookClientId={facebookClientId}
              googleCaptchaId={googleCaptchaId}
              {...rest}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};
