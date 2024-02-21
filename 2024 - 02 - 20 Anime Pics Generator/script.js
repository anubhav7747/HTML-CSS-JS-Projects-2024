const btnElement = document.getElementById('btn');
const resultElement = document.getElementById('result');
const imageElement = document.getElementById('image');
const imageNameElement = document.getElementById('name');


getImage = async () => {
    try {
        btnElement.disabled = true;
        btnElement.innerText = 'Loading...';
        imageNameElement.innerText = 'Updating...';
        imageElement.src = 'spinner.svg';
        
        const response = await fetch('https://api.catboys.com/img');
        const data = await response.json();
        // console.log(data);
        
        btnElement.disabled = false;
        btnElement.innerText = 'Get Anime';
        
        resultElement.style.display = 'block';
        imageElement.src = data.url;
        imageNameElement.innerText = data.artist;
    } catch (e) {
        console.log(e.message);
        btnElement.disabled = false;
        btnElement.innerText = 'Get Anime';
        imageNameElement.innerText = 'an error occurred';
    }
}


btnElement.addEventListener('click', getImage);