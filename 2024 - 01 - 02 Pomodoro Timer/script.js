const timerElement = document.getElementById("timer");
const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');
const resetElement = document.getElementById('reset');


let interval, timeLeft = 1500;

updateTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerElement.innerHTML = formattedTime;
}

startTimer = () => {
    // console.log("startTimer");
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!");
            timeLeft = 1500;
        }
    }, 1000);
}

stopTimer = () => {
    // console.log("stopTimer");
    clearInterval(interval);
}

resetTimer = () => {
    // console.log("resetTimer");
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);