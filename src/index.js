const storageInput = document.querySelector('#storage');
const list = document.querySelector('#taskList');
const button = document.querySelector('#button');

window.addEventListener('storageModified', () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (!storedTasks){
    return;
  }
  list.innerHTML = '';
  storedTasks.forEach(text => {
    const task = document.createElement('li');
    task.textContent = text;
    list.appendChild(task);
  });
});

window.addEventListener('load', () => {
  const storageModifiedEvent = new CustomEvent('storageModified');
  window.dispatchEvent(storageModifiedEvent);
});

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
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  let tasks = storedTasks || [];
  tasks.push(storageInput.value);
  tasks.sort();
  storageInput.value = null;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  const storageModifiedEvent = new CustomEvent('storageModified');
  window.dispatchEvent(storageModifiedEvent);
});
