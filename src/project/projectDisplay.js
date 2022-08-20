import { getProjects } from './projectLogic'

const projectsUl = document.querySelector('#projects ul');
const currentProjectSpan = document.querySelector('main span.projectName');

function renderProjects() {
    renderProject('All');
    getProjects().forEach(project => renderProject(project));
}

function renderProject(project) {
    const projectLi = document.createElement('li');
    projectLi.textContent = project;

    if (project === "All") {
        projectLi.classList.add('active');
    }

    projectLi.addEventListener('click', _activate);

    projectsUl.appendChild(projectLi);
}

function _activate(event) {
    const currentProjectLi = event.target;

    const projectLiList = document.querySelectorAll('#projects ul li');
    for (const projectLi of projectLiList) {
        if (projectLi.classList.contains('active')) {
            if (projectLi.isEqualNode(currentProjectLi)) {
                return;
            } else {
                projectLi.classList.remove('active');
                break;
            }
        }
    }

    currentProjectLi.classList.add('active');
    currentProjectSpan.textContent = currentProjectLi.textContent;
}

export { renderProjects, renderProject }