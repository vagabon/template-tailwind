import Header from "./template/header/Header";

import { useEffect } from "react";
import "./App.css";
import { SwitchLanguage } from "./i18n/component/SwitchLanguage";
import { useI18n } from "./i18n/hook/useI18n";
import { SwitchMode } from "./template/mode/SwitchMode";

import { DropDown } from "./ds/dropdown/DropDown";
import "./i18n/i18n";

function App() {
  const { language, initLanguage } = useI18n();

  useEffect(() => initLanguage(language), [language]);

  return (
    <section className="flex flex-col min-h-screen h-screen">
      <Header />
      <main
        className="relative height-full overflow-auto"
        style={{ height: "200vh" }}
      >
        <div className="overflow-auto">
          <h1 className="text-3xl font-bold underline text-black">
            <SwitchMode />
            <SwitchLanguage />
            <DropDown content={{ id: <></> }} />
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
      </main>
    </section>
  );
}

export default App;
