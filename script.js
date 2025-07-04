let time = 0;
let running = false;
let interval;
let laps = [];

function start() {
    if (!running) {
        interval = setInterval(updateTime, 10);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(interval);
        running = false;
    }
}

function reset() {
    clearInterval(interval);
    running = false;
    time = 0;
    laps = [];
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (running) {
        laps.push(formatTime(time));
        updateLaps();
    }
}

function updateTime() {
    time++;
    document.getElementById('display').textContent = formatTime(time);
}

function formatTime(time) {
    let minutes = Math.floor(time / 6000);
    let seconds = Math.floor((time % 6000) / 100);
    let centiseconds = time % 100;
    return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
    laps.forEach((lap, index) => {
        const li = document.createElement('li');
        li.textContent = `Lap ${index + 1}: ${lap}`;
        lapsList.appendChild(li);
    });
}