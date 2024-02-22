import { dictionaryFetch } from "./js/fetch.js";
import { initFontFamilyChange } from "./js/font-change.js"
import { darkOrLight } from "./js/light-or-dark.js";

const init = () => {
  darkOrLight();
  initFontFamilyChange();
  dictionaryFetch();
}

init();