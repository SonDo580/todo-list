import { addProject } from './projectLogic'
import { renderProject } from './projectDisplay';

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
    renderProject(projectName);
}

export { showProjectFormButton, addProjectButton }