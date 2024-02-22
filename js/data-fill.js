const main = document.querySelector("main");

// word header
export const headerOneDisplay = (data) => {
  if (data[0]?.word) {
    const wordDisplayContainer = document.createElement("div");
    wordDisplayContainer.className = "word-display";  
    wordDisplayContainer.innerHTML = `
      <h1>${data[0]?.word}</h1>
      <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="75" height="75"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm368 0c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"/></svg></button>
    `;
    main.appendChild(wordDisplayContainer);
  }
}

// word sound
export const wordSound = (data) => {
  const soundButton = document.querySelector(".word-display button");
  // remove the play button from the DOM if there is no sound in the json api
  if (!data[0]?.phonetics.find(pron => pron.audio)) {
    soundButton.classList.add("hide");
  }
  if (soundButton) {
    soundButton.addEventListener("click", () => {
      // Extract the first pronunciation object
      const pronunciation = data[0]?.phonetics.find(pron => pron.audio);

      if (pronunciation) {
        // Construct the audio URL
        const audioUrl = pronunciation.audio;

        // Create Audio object and play the sound
        const audioElement = new Audio(audioUrl);
        audioElement.play()
          .catch(error => {
            console.error('Error playing audio:', error);
          });
      } else {
        console.error('No audio information found for that word.');
      }
    });
  }
};

// pheonetic spelling
export const pheonetic = (data) => {
  if (data[0]?.pheonetic) {
    const pheoneticContainer = document.createElement("div");
    pheoneticContainer.className = "phoenetic";
    pheoneticContainer.innerHTML = `
      <span>${data[0]?.phonetic}</span>
    `;
    main.appendChild(pheoneticContainer);
  }
}

// nouns
export const nouns = (data) => {
  if (data[0]?.meanings[0]?.definitions.length) {
    const nounsContainer = document.createElement("div");
    nounsContainer.className = "definition-container noun";

    const definitionsHTML = data[0]?.meanings[0]?.definitions.map((definition, index) => {
      return `
        <li class="noun-definition">
          <p>${definition.definition}</p>
        </li>
      `;
      }).join("");

    nounsContainer.innerHTML = `
      <div class="adj-noun-verb">
        <h2>noun</h2>
      </div>
      <h2 class="meaning">Meaning</h2>
      <ul>
        ${definitionsHTML}
      </ul>
    `;

    main.appendChild(nounsContainer);
  }
}

// synonyms
export const synonyms = (data) => {
  if (data[0]?.meanings[0]?.synonyms && data[0]?.meanings[0]?.synonyms.length) {
    const synonymsContainer = document.createElement("div");
    synonymsContainer.className = "synonyms-container";
    synonymsContainer.innerHTML = `
      <h2>Synonyms</h2>
      <span>${data[0]?.meanings[0]?.synonyms.join(", ")}</span>
    `;
    main.appendChild(synonymsContainer);
  }
}

// verbs 
export const verb = (data) => {
  if (data[0]?.meanings[1]?.definitions.length) {
    const verbContainer = document.createElement("div");
    verbContainer.className = "definition-container verb";

    const definitionsHTML = data[0]?.meanings[1]?.definitions.map((definition, index) => {
      return `
        <li class="verb-definition-${index + 1}">
          <p>${definition.definition}</p>
        </li>
      `;
    }).join("");

    verbContainer.innerHTML = `
      <div class="adj-noun-verb">
        <h2>verb</h2>
      </div>
      <h2 class="meaning">Meaning</h2>
      <ul>
        ${definitionsHTML}
      </ul>
    `;

    main.appendChild(verbContainer);
  }
}

// source
export const source = (data) => {
  if (data[0]?.sourceUrls && data[0]?.sourceUrls.length) {
    const sourceContainer = document.createElement("div");
    sourceContainer.className = "source-container"
    sourceContainer.innerHTML = `
      <span>Source</span>
      <a href="${data[0]?.sourceUrls[0]}" target="_blank">${data[0]?.sourceUrls[0]}</a>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/></svg>
    `;
    main.appendChild(sourceContainer);
  } 
}