const btnStart = document.querySelector('[data-time="start"]');
const btnStop = document.querySelector('[data-time="stop"]');
const btnReset = document.querySelector('[data-time="reset"]');
const counter = document.querySelector('[data-time="counter"]');

let timer,
    hr = 0,
    min = 0,
    seg = 0;

counter.innerHTML = '00:00:00';

function startTime() {
    timer = setInterval(() => {
        if (seg < 59) {
            seg++;
            if (seg < 10) {
                seg = '0' + seg;
            }
        } else if (seg === 59 && min < 59) {
            min++;
            if (min < 10) {
                min = '0' + min;
            }
            seg = 0;
        } else if (min === 59) {
            hr++;
            if (hr < 10) {
                hr = '0' + hr;
            }
            min = 0;
        }
        counter.innerHTML = `${hr}:${min}:${seg}`;
    }, 1000);

    btnStart.setAttribute('disabled', '');
}

function stopTime() {
    clearInterval(timer);

    btnStart.removeAttribute('disabled');
}

function resetTime() {
    counter.innerHTML = '00:00:00';
    seg = 0;
    hr = 0;
    min = 0;

    stopTime();
}

btnStart.addEventListener("click", startTime);
btnStop.addEventListener("click", stopTime);
btnReset.addEventListener("click", resetTime);