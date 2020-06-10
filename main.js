const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const secondsText = document.getElementById('secondsText');
const minutesText = document.getElementById('minutesText')
// eslint-disable-next-line no-unused-vars
let startCounterId = null;
// eslint-disable-next-line no-unused-vars
let seconds = '59';
let minutes = 1;

startButton.addEventListener('click', hideStartButton);
pauseButton.addEventListener('click', hidePauseButton);


function hideStartButton() {
  startButton.classList.add('display-none');
  pauseButton.classList.remove('display-none');
  handleClickStartTime();
}

function hidePauseButton() {
  startButton.classList.remove('display-none');
  pauseButton.classList.add('display-none');
  handleClickPauseTime();
}

function handleClickStartTime() {
  startCounterId = setInterval(startCounter, 1000);
}

function startCounter() {

  if (seconds > 0) {
    seconds -= 1;
    secondsText.textContent = seconds;
  }

  if (seconds === 59) {
    minutesText.textContent = minutes;
    minutes -= 1
  }

  if (minutes === 1 && seconds === 0) {
    seconds = 60;
    minutes = 0;
    minutesText.textContent = minutes;
  }

  if (minutes === 0 && seconds === 0) {
    clearInterval(startCounterId);
    startButton.classList.remove('display-none');
    pauseButton.classList.add('display-none');
    seconds = '59';
    minutes = 1;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
  }
}

function handleClickPauseTime() {
  clearInterval(startCounterId);
}
