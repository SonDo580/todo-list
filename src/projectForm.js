import { addProject } from './projectLogic'
import { renderProject } from './projectDisplay';

const showProjectFormButton = document.querySelector('button[data-function="showProjectForm"]');
showProjectFormButton.addEventListener('click', _showProjectForm);

const addProjectButton = document.querySelector('button[data-function="addProject"]');
addProjectButton.addEventListener('click', _addProject);

const cancelProjectFormButton = document.querySelector('button[data-function="cancelProjectForm"]');
cancelProjectFormButton.addEventListener('click', _hideProjectForm);


const projectForm = document.querySelector('#projectForm');
const projectInput = document.querySelector('input#projectName');

function _showProjectForm() {
    projectForm.parentNode.style.display = 'flex';
}

function _hideProjectForm() {
    projectInput.value = '';
    projectForm.parentNode.style.display = 'none';
}

function _addProject() {
    const projectName = projectInput.value;
    if (projectName.toLowerCase() === 'all') {
        alert('You must not use "All" for project name!');
        return;
    }

    addProject(projectName);
    renderProject(projectName);
    _hideProjectForm();
}

export { showProjectFormButton, addProjectButton, cancelProjectFormButton }