import { memo } from "react";
import { useI18n } from "../hook/useI18n";

export interface ILanguageProps {
  show?: boolean;
}

export const SwitchLanguage: React.FC<ILanguageProps> = memo(
  ({ show = true }) => {
    const { language, handleChangeLanguage } = useI18n();

    return (
      <>
        {show && (
          <form className="max-w-sm mx-auto min-w-14">
            <select
              id="countries_disabled"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
