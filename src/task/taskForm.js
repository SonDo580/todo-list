const showTaskFormButton = document.querySelector('button[data-function="showTaskForm"]');
showTaskFormButton.addEventListener('click', _showTaskForm);

const taskForm = document.querySelector('#taskForm');

function _showTaskForm() {
    taskForm.parentNode.style.display = 'flex';
}

export { showTaskFormButton }