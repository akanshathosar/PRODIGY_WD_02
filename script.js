let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    if (isRunning) return;
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
    document.getElementById("message").textContent = "Running...";
}

function stop() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timerInterval);
    document.getElementById("message").textContent = "Stopped.";
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("message").textContent = "Reset.";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (!isRunning) return;
    const lapTime = timeToString(elapsedTime);
    const lapElement = document.createElement("div");
    lapElement.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapElement);
}
