const storageInput = document.querySelector('#storage');
const list = document.querySelector('#taskList');
const button = document.querySelector('#button');
const storedTasks = JSON.parse(localStorage.getItem('tasks'));
let arrTasks = storedTasks || [];

if (storedTasks) {
  storedTasks.forEach(task => {
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

button.addEventListener('click', () => {
  if (!storageInput.value.trim()) {
    return;
  }
  arrTasks.push(storageInput.value);
  arrTasks.sort();
  storageInput.value = null;
  localStorage.setItem('tasks', JSON.stringify(arrTasks));
});
