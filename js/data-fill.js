export const headerOneDisplay = (data) => {
  let headerOne = document.querySelector(".word-display h1");
  headerOne.innerText = data[0].meta.id.replace(/[^a-zA-Z]/g, '');
}

export const wordSound = (data) => {
  let soundButton = document.querySelector(".word-display button");
  if (soundButton) {
    soundButton.addEventListener("click", () => {
      // Extract sound information
      const soundInfo = data[0]?.hwi?.prs[0]?.sound;
      if (soundInfo) {
        // Extract relevant properties
        const { audio } = soundInfo;

        // Construct audio reference URL
        const languageCode = 'en'; // Language code for English
        const countryCode = 'us'; // Country code for United States
        const format = 'mp3'; // Preferred audio format
        const subdirectory = audio.startsWith('bix') ? 'bix' :
                             audio.startsWith('gg') ? 'gg' :
                             audio.match(/^\d/) ? 'number' :
                             audio[0];
        const baseUrl = `https://media.merriam-webster.com/audio/prons/${languageCode}/${countryCode}/${format}/${subdirectory}/${audio}.${format}`;

        // Create Audio object and play the sound
        const audioElement = new Audio(baseUrl);
        audioElement.play()
          .catch(error => {
            console.error('Error playing audio:', error);
          });
      } else {
        console.error('No sound information found for that word.');
      }
    });
  }
};

export const pheonetic = (data) => {
  let pheoneticSpelling = document.querySelector(".phoenetic span");
  pheoneticSpelling.innerText = data[0]?.hwi?.prs[0]?.mw;
}

export const nouns = (data) => {
  // noun 1
  let nounOne = document.querySelector(".noun-definition-one p");
  nounOne.innerText = data[0]?.shortdef[0];

  // noun 2
  let nounTwo = document.querySelector(".noun-definition-two p");
  nounTwo.innerText = data[0]?.shortdef[1];

  // noun 3
  let nounThree = document.querySelector(".noun-definition-three p");
  nounThree.innerText = data[0]?.shortdef[2];
}

export const synonyms = (data) => {
  let synonymWords = document.querySelector(".synonyms-container span");
  synonymWords.innerText = data[0].syns[0];
}