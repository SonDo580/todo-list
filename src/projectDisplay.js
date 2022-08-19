import { getProjects, addProject } from './projectLogic'

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
    projectsUl.appendChild(projectLi);
}

export { renderProjects }