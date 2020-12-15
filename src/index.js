const storageInput = document.querySelector('.storage');
const list = document.getElementById('taskList');
const button = document.querySelector('.button');
const storedTasks = localStorage.getItem('tasks');

if (storedTasks) {
  const oldList = JSON.parse(storedTasks);
  oldList.forEach(task => {
    const oldTask = document.createElement('li');
    oldTask.textContent = task;
    list.appendChild(oldTask);
  });
}

storageInput.addEventListener('keyup', event => {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
});

function isEpmty(value) {
  if (value == 0) {
    alert('Enter a valid value!');
    return false;
  }
  return true;
}
function sortList() {
  const listArr = Array.from(document.querySelectorAll('li'));
  const sortedList = listArr.map(value => value.textContent).sort();
  sortedList.forEach((text, index) => {
    listArr[index].textContent = text;
  });
  localStorage.setItem('tasks', JSON.stringify(sortedList));
}

button.addEventListener('click', () => {
  if (!isEpmty(storageInput.value)) {
    return;
  }
  const newTask = document.createElement('li');
  newTask.textContent = storageInput.value;
  list.appendChild(newTask);
  storageInput.value = null;
  sortList();
});
