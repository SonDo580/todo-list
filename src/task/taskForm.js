import { getProjects } from "../project/projectLogic";
import { renderAllTasks } from "./taskDisplay";
import { createTask, addTask } from "./taskLogic";

const showTaskFormButton = document.querySelector('button[data-function="showTaskForm"]');
showTaskFormButton.addEventListener('click', _showTaskForm);

const cancelTaskFormButton = document.querySelector('button[data-function="cancelTaskForm"]');
cancelTaskFormButton.addEventListener('click', _hideTaskForm);

const addTaskButton = document.querySelector('button[data-function="addTask"]');
addTaskButton.addEventListener('click', _addNewTask);

const taskForm = document.querySelector('#taskForm');
const taskFormHeading = taskForm.querySelector('h2');

const title = document.querySelector('#title');
const projectSelect = document.querySelector('#project');
const dueDate = document.querySelector('#dueDate');
const description = document.querySelector('#description');
const note = document.querySelector('#note');
const doingRadio = document.querySelector('#doing');
const completedRadio = document.querySelector('#completed');

function _showTaskForm() {
    taskFormHeading.textContent = 'Add New Task';
    _showProjects();
    addTaskButton.style.display = 'inline-block';
    taskForm.parentNode.style.display = 'flex';
}

function _hideTaskForm() {
    taskForm.parentNode.style.display = 'none';
    _resetInput();
}

function _addNewTask() {
    if (title.value === '' || dueDate.value === '') {
        alert('Title and Due Date cannot be empty!');
        return;
    }

    let dueDateValue = dueDate.value.split('-').reverse().join('-');
    let done = !doingRadio.checked;

    const newTask = createTask(title.value, projectSelect.value, dueDateValue, description.value, note.value, done);
    addTask(newTask);
    _hideTaskForm();
    renderAllTasks();
}

function _showProjects() {
    projectSelect.textContent = '';
    getProjects().forEach(project => _showProject(project));
}

function _showProject(project) {
    const option = document.createElement('option');
    option.value = project;
    option.textContent = project;
    projectSelect.appendChild(option);
}

function _resetInput() {
    title.value = '';
    dueDate.value = '';
    description.value = '';
    note.value = '';
    doingRadio.checked = true;
    completedRadio.checked = false;
}

function showEditTaskForm(task) {
    taskFormHeading.textContent = 'Edit Task';
    _showProjects();

    title.value = task.title;
    projectSelect.value = task.project;
    dueDate.value = task.dueDate.split('-').reverse().join('-');
    description.value = task.description; 
    note.value = task.note;
    task.done ? completedRadio.checked = true : doingRadio.checked = true;
    
    taskForm.parentNode.style.display = 'flex';
}

export { showTaskFormButton, cancelTaskFormButton, addTaskButton, showEditTaskForm }