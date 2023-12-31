const btnElement = document.getElementById('btn');
const birthdayElement = document.getElementById('birthday');
const resultElement = document.getElementById('result');


calculateAge = () => {
    // console.log('clicked');
    const birthdayValue = birthdayElement.value;
    // console.log(birthdayValue);

    if (birthdayValue === "")
        alert('Please enter a valid birthday');
    else {
        const age = getAge(birthdayValue);
        // console.log(age);
        resultElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

getAge = (birthdayValue) => {
    const currDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    // console.log(birthdayDate.getFullYear());

    let age = currDate.getFullYear() - birthdayDate.getFullYear();
    // console.log(age);

    const month = currDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currDate.getDate() < birthdayDate.getDate()) ) {
        age--;
    }

    return age;
}


btnElement.addEventListener('click', calculateAge);