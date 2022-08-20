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

function renderTask(task) {
    return `
<div class="task">
    <div class="text">
        <p class="title">${task.title}</p>
        <p>Due Date: <span class="duedate">${task.dueDate}</span></p>
    </div>
    <div class="buttons">
        <button class="secondary">Edit</button>
        <button class="danger">Delete</button>
    </div>
</div>
`
}

export { renderAllTasks }