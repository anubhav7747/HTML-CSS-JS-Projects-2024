const buttons = document.querySelectorAll('button');

const resultElement = document.getElementById('result');

const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');


let userCount = 0, computerCount = 0;


buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        resultFunction(button.id, computerPlay());
        userScoreElement.innerText = userCount;
        computerScoreElement.innerText = computerCount;
    });
});


computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};


resultFunction = (user, computer) => {
    if (computer === user) {
        resultElement.innerHTML = `It is a tie!`;
    } else {
        if ( (computer === "rock" && user === "scissors") || (computer === "scissors" && user === "paper") || (user === "rock" && computer === "paper")) {
            resultElement.innerHTML = `You lose! ${computer} beats ${user}.`;
            computerCount++;
        } else {
            resultElement.innerHTML = `You win! ${user} beats ${computer}.`;
            userCount++;
        }
    }
};