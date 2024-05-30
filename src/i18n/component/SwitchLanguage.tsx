import clsx from "clsx";
import { memo } from "react";
import { useI18n } from "../hook/useI18n";

export interface ILanguageProps {
  className?: string;
  selectClassName?: string;
  show?: boolean;
}

export const SwitchLanguage: React.FC<ILanguageProps> = memo(
  ({ className, selectClassName, show = true }) => {
    const { language, handleChangeLanguage } = useI18n();

    return (
      <>
        {show && (
          <form className={clsx("max-w-sm mx-auto min-w-14", className)}>
            <select
              id="countries_disabled"
              className={clsx(
                "border text-sm rounded-lg block w-full p-1.5 input-simple",
                selectClassName
              )}
              value={language}
              onChange={handleChangeLanguage}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </form>
        )}
      </>
    );
  }
);
