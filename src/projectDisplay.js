import { getProjects } from './projectLogic'

const projectsUl = document.querySelector('#projects ul');

const renderProjects = () => {
    _renderProject('All');
    getProjects().forEach(project => _renderProject(project));
}

const _renderProject = (project) => {
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
}

export { renderProjects }