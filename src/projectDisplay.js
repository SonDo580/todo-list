import { getProjects, addProject } from './projectLogic'

const projectsUl = document.querySelector('#projects ul');

const renderProjects = () => {
    const allProjectsLi = document.createElement('li');
    allProjectsLi.classList.add('active');
    allProjectsLi.textContent = "All";
    
    projectsUl.appendChild(allProjectsLi);
    
    getProjects().forEach(project => {
        const projectLi = document.createElement('li');
        projectLi.textContent = project;
        projectsUl.appendChild(projectLi);
    });
}

export default projectsUl;