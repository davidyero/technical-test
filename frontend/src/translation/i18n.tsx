import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import loginEN from "./en/login.json";
import loginES from "./es/login.json";
import homeEN from "./en/home.json";
import homeES from "./es/home.json";

const resources = {
  en: {
    translation: {
      ...loginEN,
      ...homeEN,
    },
  },
  es: {
    translation: {
      ...loginES,
      ...homeES,
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
