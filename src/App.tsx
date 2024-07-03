import Header from "./template/header/Header";

import { useEffect } from "react";
import "./App.css";
import { useI18n } from "./i18n/hook/useI18n";

import { HeaderDrawer } from "template/header/component/HeaderDrawer";
import { Resize } from "template/resize/Resize";
import { useResize } from "template/resize/hook/useResize";

import { AppConf } from "conf/AppConf";
import { AuthRouter } from "module/auth/AuthRouter";
import HomePage from "module/home/HomePage";
import { Route, Routes } from "react-router-dom";
import "./i18n/i18n";

function App() {
  const { language, initLanguage } = useI18n();
  const { large } = useResize();

  useEffect(() => initLanguage(language), [language, initLanguage]);

  return (
    <section className="flex flex-col min-h-screen h-screen">
      <Header />
      <main
        className="relative height-full overflow-auto text-black dark:text-white bg-white dark:bg-slate-950"
        style={{ height: "200vh" }}
      >
        <section className="flex">
          <HeaderDrawer />
          {large && <div className="min-w-80">&nbsp;</div>}
          <div className="flex-1 ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/auth/*"
                element={
                  <AuthRouter
                    googleClientId={AppConf.GOOGLE_CLIENT_ID as string}
                    facebookClientId={AppConf.FACEBOOK_CLIENT_ID as string}
                    googleCaptchaId={AppConf.GOOGLE_CAPTCHA_ID as string}
                  />
                }
              />
            </Routes>
          </div>
        </section>
        <Resize />
      </main>
    </section>
  );
}

export default App;
