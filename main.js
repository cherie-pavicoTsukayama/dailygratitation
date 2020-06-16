const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const secondsText = document.getElementById('secondsText');
const minutesText = document.getElementById('minutesText')
const restartTimer = document.getElementById('restartTimer');
const resetGratitaion = document.getElementById('resetGratitaion');
const listContainer = document.getElementById('listContainer');
const meditaionItemsContainer = document.getElementById('meditationItemsContainer');
const noItemsSelectedModalCloseButton = document.getElementById('closeModal')
const noCheckMarkModal = document.getElementById('noCheckMarkModal');
const twoMinButton = document.getElementById('twoMin');
const fiveMinButton = document.getElementById('fiveMin');
let checkedItems = [];

// eslint-disable-next-line no-unused-vars
let startCounterId = null;
// eslint-disable-next-line no-unused-vars
let seconds = 60;
let minutes = 2;

startButton.addEventListener('click', handleClickStartTime);
pauseButton.addEventListener('click', hidePauseButton);
restartTimer.addEventListener('click', restartTimerButton);
resetGratitaion.addEventListener('click', resetGratitationButton);
noItemsSelectedModalCloseButton.addEventListener('click', handleNoItemsSelectedCloseModal);
twoMinButton.addEventListener('click', handleClickTwoMinButton);
fiveMinButton.addEventListener('click', handleClickFiveMinButton);

function handleNoItemsSelectedCloseModal() {
  noCheckMarkModal.classList.add('fade-out');
  noCheckMarkModal.classList.remove('fade-in')
  setTimeout(() => {
    noCheckMarkModal.classList.add('display-none')
    noCheckMarkModal.classList.remove('fade-out')
  },
    900);
}

function handleClickTwoMinButton() {
  minutesText.textContent = 2;
  minutes = 2;
}

function handleClickFiveMinButton() {
  minutesText.textContent = 5;
  minutes = 5;
}

function hideStartButton() {
  startButton.classList.add('display-none');
  pauseButton.classList.remove('display-none');
}

function hidePauseButton() {
  startButton.classList.remove('display-none');
  pauseButton.classList.add('display-none');
  handleClickPauseTime();
}

function handleClickStartTime(event) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].checked) {
      checkedItems.push(list[i].value);
    }
  }
  if (checkedItems.length !== 0) {
    hideStartButton();
    startCounterId = setInterval(startCounter, 1000);
    listContainer.classList.add('fade-out')
    setTimeout(() => {
      listContainer.classList.add('display-none')

      switchOutList(checkedItems);
    },
      900);
  } else {
    noCheckMarkModal.classList.add('fade-in');
    noCheckMarkModal.classList.remove('display-none');
  }

}

function startCounter() {
  if (minutes === 2 || minutes === 5) {
    minutes -= 1;
    minutesText.textContent = minutes;
  }

  if (seconds > 0) {
    seconds -= 1;
    const secString = seconds.toString()
    console.log(secString.length)
     return (secString.length > 1) ? (secondsText.textContent = seconds)
       : (secondsText.textContent = '0' + seconds)
    }


  if (seconds === 59) {
    minutesText.textContent = minutes;
    minutes -= 1
  }

  if (minutes > 0 && seconds === 0) {
    seconds = 59;
    minutes -= 1;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
  }

  if (minutes === 0 && seconds === 0) {
    clearInterval(startCounterId);
    startButton.classList.remove('display-none');
    pauseButton.classList.add('display-none');
    seconds = 0;
    minutes = 0;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
  }

}

function handleClickPauseTime() {
  clearInterval(startCounterId);
}

function restartTimerButton() {
  clearInterval(startCounterId);
  startButton.classList.remove('display-none');
  pauseButton.classList.add('display-none');
  seconds = 60;
  minutes = 2;
  minutesText.textContent = minutes;
  secondsText.textContent = '00';
}

function resetGratitationButton() {
  console.log('clicked')
  clearInterval(startCounterId);
  startButton.classList.remove('display-none');
  pauseButton.classList.add('display-none');
  seconds = '00';
  minutes = 2;
  minutesText.textContent = minutes;
  secondsText.textContent = seconds;
  meditaionItemsContainer.classList.add('display-none');
  checkedItems = [];
  listContainer.setAttribute('class', 'd-flex flex-wrap form-container-styling shadow fade-in')
  if (meditaionItemsContainer.hasChildNodes()) {
    meditaionItemsContainer.innerHTML = "";
  }
}


const freeListItems = [
  "My health",
  "My job",
  "Ramrock School Supplies",
  "My clients",
  "My personal trainer",
  "My garden",
  "My home",
  "My doctor",
  "My car",
  "The grocery store clerk",
  "My best friend",
  "The beautiful weather",
  "Family time",
  "My vacations",
  "My coach",
  "The kids' school",
  "Clean drinking water",
  "Other things",
]

makeChecklist(freeListItems);

function makeChecklist(array) {
  for (let i = 0; i < 8; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label')
    const listItemContainer1 = document.createElement('li');
    const col1 = document.getElementById('col1')
    Object.assign(input, {
      class: "checkbox",
      type: "checkbox",
      name: array[i],
      value: array[i]
    })
    Object.assign(label, {
      for: array[i]
    })
    input.classList.add('checkbox');
    label.textContent = array[i];
    listItemContainer1.append(input);
    listItemContainer1.append(label);
    col1.append(listItemContainer1)
  }
  for (let i = 9; i < array.length; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label')
    const listItemContainer2 = document.createElement('li');
    const col2 = document.getElementById('col2')
    Object.assign(input, {
      type: "checkbox",
      name: array[i],
      value: array[i]
    })
    Object.assign(label, {
      for: array[i]
    })
    input.classList.add('checkbox');
    label.textContent = array[i];
    listItemContainer2.append(input);
    listItemContainer2.append(label);
    col2.append(listItemContainer2)
  }
}

function checkboxLimit(checkgroup, limit) {
  for (var i = 0; i < checkgroup.length; i++) {
    checkgroup[i].onclick = function () {
      var checkedcount = 0
      for (var i = 0; i < checkgroup.length; i++)
        checkedcount += (checkgroup[i].checked) ? 1 : 0
      if (checkedcount > limit) {
        this.checked = false
      }
    }
  }
}
const list = document.getElementsByClassName('checkbox');
checkboxLimit(list, 10);

function switchOutList(checklist) {
  if (meditaionItemsContainer.childElementCount > 0) {
      return;
    } else {
      meditaionItemsContainer.classList.remove('display-none');
      for (let i = 0; i < checklist.length; i++) {
        const meditaionItem = document.createElement('div');
        meditaionItemsContainer.setAttribute('class', 'form-container-styling shadow d-flex flex-wrap fade-in justify-content-center');
        meditaionItem.setAttribute('class', 'meditation-item shadow');
        meditaionItem.textContent = checklist[i];
        meditaionItemsContainer.append(meditaionItem);
      }
    }

}
