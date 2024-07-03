import { memo } from "react";
import { DropDown } from "../../ds/dropdown/DropDown";
import { SwitchLanguage } from "../../i18n/component/SwitchLanguage";
import { SwitchMode } from "../../template/mode/SwitchMode";

const HomePage: React.FC = memo(() => {
  return (
    <>
      <SwitchMode />
      <SwitchLanguage />
      <DropDown content={{ id: <></> }} />
      <h1 className="text-3xl font-bold underline text-black">
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world! Hello world! Hello world! Hello
        world! Hello world! Hello world! Hello world! Hello world!
      </h1>
      test
    </>
  );
});

export default HomePage;
