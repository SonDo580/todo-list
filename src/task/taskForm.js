import { getProjects } from "../project/projectLogic";

const showTaskFormButton = document.querySelector('button[data-function="showTaskForm"]');
showTaskFormButton.addEventListener('click', _showTaskForm);

const cancelTaskFormButton = document.querySelector('button[data-function="cancelTaskForm"]');
cancelTaskFormButton.addEventListener('click', _hideTaskForm);

const taskForm = document.querySelector('#taskForm');

const title = document.querySelector('#title');
const projectSelect = document.querySelector('#project');
const description = document.querySelector('#description');
const note = document.querySelector('#note');
const doingRadio = document.querySelector('#doing');
const completedRadio = document.querySelector('#completed');

function _showTaskForm() {
    taskForm.parentNode.style.display = 'flex';
}

function _hideTaskForm() {
    taskForm.parentNode.style.display = 'none';
}

function _showProjects() {
    getProjects().forEach(project => _showProject(project));
}

function _showProject(project) {
    const option = document.createElement('option');
    option.value = project;
    
}

export { showTaskFormButton, cancelTaskFormButton }