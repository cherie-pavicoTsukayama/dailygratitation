const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
// eslint-disable-next-line no-unused-vars
let startCounterId = null;
// eslint-disable-next-line no-unused-vars
let counter = 30;

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
  if (counter > 0) {
    counter -= 1;
    console.log(counter)
  }

}

function handleClickPauseTime() {
  clearInterval(startCounterId);
}
