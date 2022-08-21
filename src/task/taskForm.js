const showTaskFormButton = document.querySelector('button[data-function="showTaskForm"]');
showTaskFormButton.addEventListener('click', _showTaskForm);

const cancelTaskFormButton = document.querySelector('button[data-function="cancelTaskForm"]');
cancelTaskFormButton.addEventListener('click', _hideTaskForm);

const taskForm = document.querySelector('#taskForm');

function _showTaskForm() {
    taskForm.parentNode.style.display = 'flex';
}

function _hideTaskForm() {
    taskForm.parentNode.style.display = 'none';
}

export { showTaskFormButton, cancelTaskFormButton }