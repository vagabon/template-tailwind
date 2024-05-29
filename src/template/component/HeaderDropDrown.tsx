import { memo, useCallback } from "react";
import { DropDown } from "../../ds/dropdown/DropDown";
import { SwitchLanguage } from "../../i18n/component/SwitchLanguage";
import { SwitchMode } from "../mode/SwitchMode";

export const HeaderDropDrown: React.FC = memo(() => {
  const getContent = useCallback(() => {
    return {
      mode: <SwitchMode />,
      language: <SwitchLanguage />,
    };
  }, []);
  return <DropDown isRelative={false} content={getContent()}></DropDown>;
});
