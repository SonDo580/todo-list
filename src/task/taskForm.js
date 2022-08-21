import { getProjects } from "../project/projectLogic";

const showTaskFormButton = document.querySelector('button[data-function="showTaskForm"]');
showTaskFormButton.addEventListener('click', _showTaskForm);

const cancelTaskFormButton = document.querySelector('button[data-function="cancelTaskForm"]');
cancelTaskFormButton.addEventListener('click', _hideTaskForm);

const addTaskButton = document.querySelector('button[data-function="addTask"]');
addTaskButton.addEventListener('click', _createTask);

const taskForm = document.querySelector('#taskForm');

const title = document.querySelector('#title');
const projectSelect = document.querySelector('#project');
const dueDate = document.querySelector('#dueDate');
const description = document.querySelector('#description');
const note = document.querySelector('#note');
const doingRadio = document.querySelector('#doing');
const completedRadio = document.querySelector('#completed');

function _showTaskForm() {
    _showProjects();
    taskForm.parentNode.style.display = 'flex';
}

function _hideTaskForm() {
    taskForm.parentNode.style.display = 'none';
    _resetInput();
}

function _createTask() {
    if (title.value === '' || dueDate.value === '') {
        alert('Title and Due Date cannot be empty!');
    }

    let dueDateValue = dueDate.value.split('-').reverse().join('-');
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

export { showTaskFormButton, cancelTaskFormButton, addTaskButton }