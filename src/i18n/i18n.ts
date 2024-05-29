import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { JSONObject } from "../dto/api/ApiDto";

import AUTH from "../locale/fr/auth.json";
import COMMON from "../locale/fr/common.json";
import ERRORS from "../locale/fr/error.json";

import AUTH_EN from "../locale/en/auth.json";
import COMMON_EN from "../locale/en/common.json";
import ERRORS_EN from "../locale/en/error.json";

const resources = {
  fr: {
    all: COMMON,
    ERRORS,
    COMMON,
    AUTH,
  },
  en: {
    all: COMMON_EN,
    COMMON: COMMON_EN,
    ERRORS: ERRORS_EN,
    AUTH: AUTH_EN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<JSONObject>({
    resources,
    supportedLngs: ["fr", "en"],
    defaultNS: "all",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
