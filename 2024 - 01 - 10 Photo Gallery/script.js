const accessKey = "3qQfAqTYbC__zgXXKq-cGYw8cl_u1tGCfQC5BMZdiH8";

const getPhotoElement = document.getElementById('getPhoto');

const inputElement = document.getElementById('input');

const errorMessageElement = document.getElementById('errorMessage');

const galleryElement = document.getElementById('gallery');


getPhotos = async () => {
    // console.log(inputElement.value);
    // console.log('buttonClicked');
    
    const inputValue = inputElement.value;
    
    if (inputElement.value > 10 || inputElement.value < 1) {
        errorMessageElement.style.display = 'block';
        galleryElement.style.display = 'none';
        return
    } 
    // else {
    //     errorMessageElement.style.display = 'none';
    //     galleryElement.style.display = 'block';
    // }

    images = "";
    
    try {
        getPhotoElement.style.display = "none";

        const loading = `<img src="loading.svg"></img>`;
        galleryElement.innerHTML = loading;

        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
                    Math.random() * 1000
                )}&client_id=${accessKey}`
            ).then(
                (response) => 
                    response.json().then((data)=> {
                        // console.log(data);
                        if (data) {
                            data.forEach((pic) => {
                                // console.log(pic.urls.small);

                                images += `<img src=${pic.urls.small} alt="image" />`;

                                galleryElement.style.display = "block";
                                galleryElement.innerHTML = images;

                                getPhotoElement.style.display = "block";
                                
                                errorMessageElement.style.display = 'none';
                            })
                        }
                    }
                )
            );
    } catch (error) {
        errorMessageElement.style.display = 'block';
        errorMessageElement.innerText = "An error happened, try again later";

        getPhotoElement.style.display = 'block';
        galleryElement.style.display = 'none';
    }
};


getPhotoElement.addEventListener('click', getPhotos);

// console.log(accessKey);