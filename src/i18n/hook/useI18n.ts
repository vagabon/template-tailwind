import { ChangeEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { useI18nStore } from "./useI18nStore";

export const useI18n = () => {
  const { i18n } = useTranslation();
  const language = useI18nStore(useShallow((state) => state.language));
  const setLanguage = useI18nStore((state) => state.setLanguage);

  const initLanguage = useCallback((language: string) => {
    i18n?.changeLanguage(language);
  }, []);

  const handleChangeLanguage = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const newLanguage = event.target.value;
      setLanguage(newLanguage);
    },
    [i18n]
  );

  const translate = useCallback(
    (text: string) => {
      return i18n.t(text);
    },
    [i18n]
  );

  return { i18n, language, initLanguage, handleChangeLanguage, translate };
};
