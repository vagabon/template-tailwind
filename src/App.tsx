import Header from "./template/header/Header";

import { useEffect } from "react";
import "./App.css";
import { SwitchLanguage } from "./i18n/component/SwitchLanguage";
import { useI18n } from "./i18n/hook/useI18n";
import { SwitchMode } from "./template/mode/SwitchMode";

import { ADrawer } from "template/ADrawer";
import { HeaderDrawer } from "template/header/component/HeaderDrawer";
import { Resize } from "template/resize/Resize";
import { useResize } from "template/resize/hook/useResize";

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
            <div className="mx-auto max-w-screen-lg px-3">
              <SwitchMode />
              <SwitchLanguage />
              <ADrawer />
              <h1 className="text-3xl font-bold underline ">
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world! Hello world!
                Hello world! Hello world! Hello world! Hello world!
              </h1>
              test
            </div>
          </div>
        </section>
        <Resize />
      </main>
    </section>
  );
}

export default App;
