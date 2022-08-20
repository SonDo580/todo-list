import { getAllTasks } from "./taskLogic";

const unCompletedTasks = document.querySelector('.taskList[data-status="doing"]');
const completedTasks = document.querySelector('.taskList[data-status="completed"]');
const tasks = getAllTasks();


function renderAllTasks() {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done === false) {
            unCompletedTasks.innerHTML += renderTask(tasks[i], i);
        } else if (tasks[i].done === true) {
            completedTasks.innerHTML += renderTask(tasks[i], i);
        }
    }
}

function renderTask(task, taskIndex) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
<div class="text">
    <p class="title">${task.title}</p>
    <p>Due Date: <span class="duedate">${task.dueDate}</span></p>
</div>
`
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('buttons');

    const editTaskButton = document.createElement('button');
    editTaskButton.textContent = 'Edit';
    editTaskButton.classList.add('secondary');
    
    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.textContent = 'Delete';
    deleteTaskButton.classList.add('danger');
    deleteTaskButton.setAttribute('data-function', 'deleteTask');
    deleteTaskButton.setAttribute('data-index', taskIndex);
    deleteTaskButton.addEventListener('click', _removeTask);

    taskButtons.appendChild(editTaskButton);
    taskButtons.appendChild(deleteTaskButton);
    taskDiv.appendChild(taskButtons);

    return taskDiv;
}

function _removeTask() {
    alert('remove');
}

export { renderAllTasks }