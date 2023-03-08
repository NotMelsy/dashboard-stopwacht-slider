const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false;

const secondstimer = document.getElementById("js--secondstimer");
const minutestimer = document.getElementById("js--minutestimer");

let timer;

startButton.onclick = function () {
    if (running === true) {
        return;
    }
    running = true;
    timer = setInterval(function () {
        seconds = seconds + 1;
        if (seconds === 60) {
            minutes = minutes = 1;
            minutestimer.innerText = minutes;
            seconds = 0;
        }
        secondstimer.innerText = seconds;
    }, 1000);
}

stopButton.onclick = function () {
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function () {
    clearInterval(timer)
    seconds = 0;
    minutes = 0;
    secondstimer.innerText = 0;
    minutestimer.innerText = 0;
    running = false;
}

