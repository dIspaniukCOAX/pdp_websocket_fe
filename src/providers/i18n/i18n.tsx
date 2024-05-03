import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import en from "@/assets/locale/en.json";
import uk from "@/assets/locale/uk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk }
  },
  lng: "uk",
  fallbackLng: "uk",
  interpolation: { escapeValue: false }
});
