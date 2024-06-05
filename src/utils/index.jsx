export {
  sizes,
  fonts,
  spaces,
  weights,
  zindex,
  contentW,
  colors,
} from "./constants";

//TODO: IMPORT RENDER TO STATIC MARKUP
import EN from "@assets/translations/en.translations.json";
import ES from "@assets/translations/es.translations.json";
import FR from "@assets/translations/fr.translations.json";

export const languages = [
  { name: "EN", code: "en", translation: EN },
  { name: "ES", code: "es", translation: ES },
  { name: "FR", code: "fr", translation: FR },
];
