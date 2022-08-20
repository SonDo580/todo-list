import { addProject } from './projectLogic'

const showProjectFormButton = document.querySelector('button[data-function="showProjectForm"]');
showProjectFormButton.addEventListener('click', _showProjectForm);

const addProjectButton = document.querySelector('button[data-function="addProject"]');
addProjectButton.addEventListener('click', _addProject);

function _showProjectForm() {
    const projectForm = document.querySelector('#projectForm');
    projectForm.parentNode.style.display = 'flex';
}

function _addProject() {
    const projectName = document.querySelector('input#projectName').value;
    addProject(projectName);
}

export { showProjectFormButton, addProjectButton }