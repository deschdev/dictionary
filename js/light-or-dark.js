const fontSelect = document.querySelector("#font-select");
const checkbox = document.querySelector("#dark-or-light");
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const wordSearch = document.querySelector("#search-word");

const applyStyles = (darkMode) => {
  const bodyBackgroundColor = darkMode ? "#050505" : "";
  const bodyColor = darkMode ? "#FFFFFF" : "";
  const inputBackgroundColor = darkMode ? "#1F1F1F" : "";
  const inputColor = darkMode ? "#FFFFFF" : "";

  document.body.style.backgroundColor = bodyBackgroundColor;
  document.body.style.color = bodyColor;
  wordSearch.style.backgroundColor = inputBackgroundColor;
  wordSearch.style.color = inputColor;
  fontSelect.style.color = bodyColor;
};

export const darkOrLight = () => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      moonIcon.classList.remove("hide");
      sunIcon.classList.add("hide");
    } else {
      sunIcon.classList.remove("hide");
      moonIcon.classList.add("hide");
    }
    applyStyles(checkbox.checked);
  });
};
