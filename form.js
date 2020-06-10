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

function makeChecklist(array) {
  for(let i = 0; i < 8; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label')
    const listItemContainer1 = document.createElement('div');
    const col1= document.getElementById('col1')
    Object.assign(input, {
      type: "checkbox",
      name: array[i],
      value: array[i]
    })
    Object.assign(label, {
      for: array[i]
    })
    label.textContent = array[i];
    listItemContainer1.append(input);
    listItemContainer1.append(label);
    col1.append(listItemContainer1)
  }
  for (let i = 9; i < 18; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label')
    const listItemContainer2 = document.createElement('div');
    const col2 = document.getElementById('col2')
    Object.assign(input, {
      type: "checkbox",
      name: array[i],
      value: array[i]
    })
    Object.assign(label, {
      for: array[i]
    })
    label.textContent = array[i];
    listItemContainer2.append(input);
    listItemContainer2.append(label);
    col2.append(listItemContainer2)
  }
}

makeChecklist(freeListItems);

