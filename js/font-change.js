const selectFont = document.querySelector("#font-select");
const searchWord = document.querySelector("#search-word");

export const fontFamilyChange = () => {
  const selectedFont = selectFont.value;
  switch (selectedFont) {
    case "sans-serif":
      document.body.style.fontFamily = "sans-serif";
      selectFont.style.fontFamily = "sans-serif";
      searchWord.style.fontFamily = "sans-serif";
      break;
    case "serif":
      document.body.style.fontFamily = "serif";
      selectFont.style.fontFamily = "serif";
      searchWord.style.fontFamily = "serif";
      break;
    case "mono":
      document.body.style.fontFamily = "monospace";
      selectFont.style.fontFamily = "monospace";
      searchWord.style.fontFamily = "monospace";
      break;
    default:
      console.log("This option is not available.");
      break;
  }
}

export const initFontFamilyChange = () => {
  selectFont.addEventListener('change', fontFamilyChange);
}