import { addProject } from './projectLogic'

const showProjectFormButton = document.querySelector('button[data-function="showProjectForm"]');
showProjectFormButton.addEventListener('click', _showProjectForm);

function _showProjectForm() {
    const projectForm = document.querySelector('#projectForm');
    projectForm.parentNode.style.display = 'flex';
}

export {showProjectFormButton}