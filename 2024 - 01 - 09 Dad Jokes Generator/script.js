const jokeElement = document.getElementById('joke');

const btnElement = document.getElementById('btn');


const apiKey = "r7xHvkwMFFz7QBEVfyrJqA==JcyAoiMNrE4AqqeW";


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
    // error: function errorOccurred()
};


const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke () {
    try {
        // console.log('btnClicked');
        // console.log(apiKey);
        
        jokeElement.innerText = "Updating...";
        btnElement.disabled = true;
        btnElement.innerText = "Loading...";
        
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
        
        // console.log(data[0].joke);
        jokeElement.innerText = data[0].joke;
    } catch(error) {
        // console.log(error);
        jokeElement.innerText = "An error happened, try again later.";
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
    }
};


btnElement.addEventListener('click', getJoke);