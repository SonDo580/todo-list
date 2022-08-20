import { addProject } from './projectLogic'
import { renderProject } from './projectDisplay';

const showProjectFormButton = document.querySelector('button[data-function="showProjectForm"]');
showProjectFormButton.addEventListener('click', _showProjectForm);

const addProjectButton = document.querySelector('button[data-function="addProject"]');
addProjectButton.addEventListener('click', _addProject);


const projectForm = document.querySelector('#projectForm');
function _showProjectForm() {
    projectForm.parentNode.style.display = 'flex';
}

function _hideProjectForm() {
    projectForm.parentNode.style.display = 'none';
}

function _addProject() {
    const projectName = document.querySelector('input#projectName').value;
    addProject(projectName);
    renderProject(projectName);
    _hideProjectForm();
}

export { showProjectFormButton, addProjectButton }