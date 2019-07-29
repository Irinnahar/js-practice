const form = document.querySelector('#task-form');
const inputText = document.querySelector('#task');
const taskList = document.querySelector('.collection');

form.addEventListener('submit', addTask);

function addTask (e) {
  e.preventDefault();
  
  const task = document.createElement('li');
  task.className = 'collection-item';
  task.textContent = inputText.value;

  taskList.appendChild(task);
  inputText.value = '';
}