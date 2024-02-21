import {key} from "./key.js";
import {
  headerOneDisplay,
  wordSound,
  pheonetic,
  nouns,
  synonyms
} from "./data-fill.js"

const form = document.querySelector("#search");

export const dictionaryFetch = () => {
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      urlFetch();
    })
  }
}

async function urlFetch() {
  try {
    const searchWord = document.querySelector("#search-word").value;
    const URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchWord}?key=${key}`;
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
  } catch (error) {
    console.error(`There has been an error ${error}`)
  }
}