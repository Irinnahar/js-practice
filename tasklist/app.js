const form = document.querySelector('#task-form');
const inputText = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearTask = document.querySelector('.clear-tasks');
const filterText = document.querySelector('#filter');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearTask.addEventListener('click', clearAllTask);
filterText.addEventListener('keyup', filterTask)

if(localStorage.getItem('tasks')){
  let listTask = JSON.parse(localStorage.getItem('tasks'));

  listTask.forEach(task => {
    createList(task)
  })
}

function createList(task) {
  const listItem = document.createElement('li');
  listItem.className = 'collection-item';
  listItem.textContent = task;

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  listItem.appendChild(link);
  taskList.appendChild(listItem)
}
// add a task
function addTask (e) {
  e.preventDefault();
  
  createList(inputText.value)

  storeTaskInLocalStorage(inputText.value);
  inputText.value = '';
}

function storeTaskInLocalStorage(task){
  let taskList;
  if(localStorage.getItem('tasks') === null) {
    taskList = [];
  } else {
    taskList = JSON.parse(localStorage.getItem('tasks'));
  }
  taskList.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskList))
}
// remove a task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      let selectTask = e.target.parentElement.parentElement.firstChild.textContent;
      let list = JSON.parse(localStorage.getItem('tasks'));

      list.forEach((task, index) => {
        if(selectTask.toLowerCase() === task.toLowerCase()){
          list.splice(index, 1);
          localStorage.setItem('tasks', JSON.stringify(list));
          e.target.parentElement.parentElement.remove();
        }
      })
    }
  }
}

// clear all task
function clearAllTask(e){
  // taskList.innerHTML = '';
  while(taskList.firstChild){
    taskList.firstChild.remove();
  }
  localStorage.clear()
}

// filter task
function filterTask(e){
  let text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}