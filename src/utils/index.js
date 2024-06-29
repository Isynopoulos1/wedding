import { renderToStaticMarkup } from "react-dom/server";

import EN from "@assets/translations/en.translations.json";
import ES from "@assets/translations/es.translations.json";
import FR from "@assets/translations/fr.translations.json";

export {
  colors,
  contentW,
  fonts,
  formW,
  sizes,
  spaces,
  weights,
  zindex,
} from "./constants";

export const languages = [
  { name: "EN", code: "en", translation: EN },
  { name: "ES", code: "es", translation: ES },
  { name: "FR", code: "fr", translation: FR },
];
export const activateTranslations = addtranslate =>
  languages.map(({ translation, code }) => addtranslate(translation, code));

export const initialize = () => ({
  languages: languages.map(({ name, code }) => ({ name, code })),
  translation: EN,
  options: { renderToStaticMarkup },
});
