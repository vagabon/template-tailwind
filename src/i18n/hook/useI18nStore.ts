import { create } from "zustand";

const getDefaultLanguage = () => {
  let navigatorLanguage = navigator?.language?.split("-")?.[0] ?? "en";
  if (navigatorLanguage !== "fr" && navigatorLanguage !== "en") {
    navigatorLanguage = "en";
  }
  return localStorage.getItem("i18nextLng") ?? navigatorLanguage;
};

export interface II18nStoreProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const useI18nStore = create<II18nStoreProps>((set) => ({
  language: getDefaultLanguage(),
  setLanguage: (newLanguage) =>
    set((state) => ({
      ...state,
      language: newLanguage,
    })),
}));
