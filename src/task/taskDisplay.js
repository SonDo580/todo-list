import { getAllTasks } from "./taskLogic";

const unCompletedTasks = document.querySelector('.taskList[data-status="doing"]');
const completedTasks = document.querySelector('.taskList[data-status="completed"]');
const tasks = getAllTasks();

function renderTasks() {
    tasks.forEach(task => {
        if (task.done === false) {
            unCompletedTasks.appendChild(renderTask(task));
        } else if (task.done === true) {
            completedTasks.appendChild(renderTask(task));
        }
    })
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

export { renderTasks }