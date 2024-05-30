import { memo, useCallback } from "react";
import { Button } from "../../ds/button/Button";
import { DropDown } from "../../ds/dropdown/DropDown";
import { SwitchLanguage } from "../../i18n/component/SwitchLanguage";
import { LogoutIcon } from "../../icon/LogoutIcon";
import { SwitchMode } from "../mode/SwitchMode";

export const HeaderDropDrown: React.FC = memo(() => {
  const getContent = useCallback(() => {
    return {
      mode: <SwitchMode className="w-full focus:ring-0 justify-center" />,
      language: <SwitchLanguage className="w-full mx-4" />,
      logout: <Button text="LOGOUT" icon={<LogoutIcon />} />,
    };
  }, []);
  return <DropDown content={getContent()}></DropDown>;
});
