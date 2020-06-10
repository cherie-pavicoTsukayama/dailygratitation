

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
  for(let i = 0; i < 8; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label')
    const listItemContainer1 = document.createElement('li');
    const col1= document.getElementById('col1')
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
  // console.log(list);
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
checkboxLimit(list, 3);
