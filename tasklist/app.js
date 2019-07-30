const form = document.querySelector('#task-form');
const inputText = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearTask = document.querySelector('.clear-tasks');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearTask.addEventListener('click', clearAllTask);


// add a task
function addTask (e) {
  e.preventDefault();
  
  const task = document.createElement('li');
  task.className = 'collection-item';
  task.textContent = inputText.value;

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  task.appendChild(link);

  // console.log(task)
  taskList.appendChild(task);
  inputText.value = '';
}

// remove a task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// clear all task
function clearAllTask(e){
  // taskList.innerHTML = '';
  while(taskList.firstChild){
    taskList.firstChild.remove();
  }
}