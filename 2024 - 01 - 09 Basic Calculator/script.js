const buttonsElement = document.querySelectorAll("button");

const inputFieldElement = document.getElementById("result");

// console.log(buttonsElement);


for (let i = 0; i < buttonsElement.length; i++) {
    buttonsElement[i].addEventListener("click", () => {
        // console.log(buttonsElement[i].textContent);
        
        const buttonValue = buttonsElement[i].textContent;
    
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}


clearResult = () => {
    inputFieldElement.value = "";
}


calculateResult = () => {
    inputFieldElement.value = eval(inputFieldElement.value);
}


appendValue = (buttonValue) => {
    inputFieldElement.value += buttonValue;
}