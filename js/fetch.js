import {
  headerOneDisplay,
  wordSound,
  pheonetic,
  nouns,
  synonyms,
  verb,
  source,
} from "./data-fill.js"

const form = document.querySelector("#search");

export const dictionaryFetch = () => {
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      clearMain();
      urlFetch();
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
    console.log(data);
    
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