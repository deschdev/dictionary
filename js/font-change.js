const selectFont = document.querySelector("#font-select");

export const fontFamilyChange = () => {
  const selectFont = document.querySelector("#font-select");
  const selectedFont = selectFont.value;
  switch (selectedFont) {
    case "sans-serif":
      document.body.style.fontFamily = "sans-serif";
      break;
    case "serif":
      document.body.style.fontFamily = "serif";
      break;
    case "mono":
      document.body.style.fontFamily = "monospace";
      break;
    default:
      console.log("This option is not available.");
      break;
  }
}

export const initFontFamilyChange = () => {
  selectFont.addEventListener('change', fontFamilyChange);
}