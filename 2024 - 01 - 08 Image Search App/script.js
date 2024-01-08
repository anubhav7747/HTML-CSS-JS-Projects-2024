const accessKey = "m4i-iDVeVYUhLGrOYq9BeMGtHzpBuSTwbkLE3oINQ1M";

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".search-results");
const showMoreButtonElement = document.getElementById("show-more-button");


let inputData = "";
let page = 1;

searchImages = async () => {
    inputData = searchInputElement.value;
    // console.log(inputData);
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    // console.log(url);
    
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    if (page === 1) {
        searchResultsElement.innerHTML = "";
    }

    const results = data.results;
    // console.log(results);

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        
        // console.log(result);

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsElement.appendChild(imageWrapper);
        // console.log(searchResultsElement);
    })

    page++;

    if (page > 1) {
        showMoreButtonElement.style.display = "block";
    }

}


formSubmitted = (event) => {
    event.preventDefault();
    // console.log("Submitted");
    page = 1;
    searchImages();
}


formElement.addEventListener("submit", formSubmitted);

showMoreButtonElement.addEventListener("click", () => {
    searchImages();
});