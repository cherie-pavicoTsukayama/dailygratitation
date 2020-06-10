const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");


startButton.addEventListener('click', hideStartButton);
pauseButton.addEventListener('click', hidePauseButton);

function hideStartButton(){
  startButton.classList.add('display-none');
  pauseButton.classList.remove('display-none');
  handleClickStartTime();
}

function hidePauseButton() {
  startButton.classList.remove('display-none');
  pauseButton.classList.add('display-none');
}

const startCounterId = null;
const counter = 0;

handleClickStartTime() {
  // startCounterId = setInterval(startCounter, 1000);
}

startCounter() {
  counter =+ 1
  console.log(counter);
}

// handleClickPauseTime() {
//   this.setState({
//     button: 'fas fa-play'
//   });
//   clearInterval(this.startCounterId);
// }
