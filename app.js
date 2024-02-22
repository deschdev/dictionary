import { dictionaryFetch } from "./js/fetch.js";
import { initFontFamilyChange, fontFamilyChange } from "./js/font-change.js"

const init = () => {
  fontFamilyChange();
  initFontFamilyChange();
  dictionaryFetch();
}

init();