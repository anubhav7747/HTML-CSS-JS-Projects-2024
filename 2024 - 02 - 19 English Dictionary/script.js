const searchQueryElement = document.getElementById('searchQuery');
const instructionElement = document.getElementById('instruction');
const searchResultElement = document.getElementById('searchResult');
const titleElement = document.getElementById('title');
const meansElement = document.getElementById('means');
const audioElement = document.getElementById('audio');


fetchAPI = async (word) => {
    // console.log(word);

    try {
        instructionElement.style.display = "block";
        searchResultElement.style.display = "none";
        instructionElement.innerText = `Searching the meaning for "${word}"`;

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
        const result = await fetch(url).then((res) => res.json());
        // console.log(result);

        if (result.title) {
            instructionElement.style.display = 'none';
            searchResultElement.style.display = 'block';
            titleElement.innerText = word;
            meansElement.innerText = "N/A";
            audioElement.style.display = 'none';
        } else {   
            instructionElement.style.display = 'none';
            searchResultElement.style.display = 'block';
            audioElement.style.display = 'inline-flex';
            titleElement.innerText = result[0].word;
            meansElement.innerText = result[0].meanings[0].definitions[0].definition;
            audioElement.src = result[0].phonetics[0].audio;
        }
    } catch (e) {
        console.log(e);
        instructionElement.innerText = "Sorry pal, we couldn't find definitions for the word you were looking for. Try again later.";
    }
}


searchQueryElement.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});