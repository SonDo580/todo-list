import { showEditTaskForm } from "./taskForm";
import { getAllTasks, deleteTask } from "./taskLogic";

const unCompletedTasks = document.querySelector('.taskList[data-status="doing"]');
const completedTasks = document.querySelector('.taskList[data-status="completed"]');
const tasks = getAllTasks();


function renderAllTasks() {
    unCompletedTasks.innerHTML = `<h3>Doing</h3>`;
    completedTasks.innerHTML = `<h3>Completed</h3>`;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done === false) {
            unCompletedTasks.appendChild(_renderTask(tasks[i], i));
        } else if (tasks[i].done === true) {
            completedTasks.appendChild(_renderTask(tasks[i], i));
        }
    }
}

function renderProjectTasks(projectName) {
    unCompletedTasks.innerHTML = `<h3>Doing</h3>`;
    completedTasks.innerHTML = `<h3>Completed</h3>`;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].project === projectName) {
            if (tasks[i].done === false) {
                unCompletedTasks.appendChild(_renderTask(tasks[i], i));
            } else if (tasks[i].done === true) {
                completedTasks.appendChild(_renderTask(tasks[i], i));
            }
        }
    }
}

function _renderTask(task, taskIndex) {
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
    editTaskButton.setAttribute('data-index', taskIndex);
    editTaskButton.addEventListener('click', _editTask);
    
    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.textContent = 'Delete';
    deleteTaskButton.classList.add('danger');
    deleteTaskButton.setAttribute('data-index', taskIndex);
    deleteTaskButton.addEventListener('click', _removeTask);

    taskButtons.appendChild(editTaskButton);
    taskButtons.appendChild(deleteTaskButton);
    taskDiv.appendChild(taskButtons);

    return taskDiv;
}

function _removeTask(event) {
    const indexDelete = event.target.getAttribute('data-index');
    if(confirm('Delete this task?')) {
        deleteTask(indexDelete);
        renderAllTasks();
    } else {
        return;
    }
}

function _editTask(event) {
    const indexEdit = event.target.getAttribute('data-index');
    showEditTaskForm(indexEdit);
}

export { renderAllTasks, renderProjectTasks }