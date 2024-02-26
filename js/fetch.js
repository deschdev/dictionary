import {
  headerOneDisplay,
  wordSound,
  pheonetic,
  nouns,
  synonyms,
  verb,
  source,
} from "./data-fill.js"

const main = document.querySelector("main");
const form = document.querySelector("#search");
const searchWord = document.querySelector("#search-word");

export const dictionaryFetch = () => {
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (searchWord.value === "" ) {
        const cannotBeEmptyContainer = document.createElement("section");
        cannotBeEmptyContainer.className = "cannot-be-empty-container";
        cannotBeEmptyContainer.innerHTML = `
          <span>😖</span>
          <p>Whoops, can't be empty</p>
        `;
        main.innerHTML = '';
        main.appendChild(cannotBeEmptyContainer);
      } else {
        clearMain();
        urlFetch();
      }
    });
  }
}

async function urlFetch() {
  try {
    const searchWord = document.querySelector("#search-word").value;
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    
    headerOneDisplay(data);
    wordSound(data);
    pheonetic(data);
    nouns(data);
    synonyms(data);
    verb(data);
    source(data);
  } catch (error) {
    console.error(`There has been an error ${error}`)
  }
}

// clearing the main container when the user submits the form
const clearMain = () => {
  const main = document.querySelector("main");
  main.innerHTML = '';
}