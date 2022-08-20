import { addProject } from './projectLogic'

const showProjectFormButton = document.querySelector('button[data-function="showProjectForm"]');
showProjectFormButton.addEventListener('click', _showProjectForm);

function _showProjectForm() {
    const projectForm = document.querySelector('#projectForm');
    projectForm.parentNode.style.display = 'flex';
}

const addProjectButton = document.querySelector('button[data-function="addProject"]');
addProjectButton.addEventListener('click', _addProject);

function _addProject() {
    const projectName = document.querySelector('#projectName').value;
    console.log('projectName');
}

export { showProjectFormButton, addProjectButton }