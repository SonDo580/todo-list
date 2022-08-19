const projects = [
    'Invade Mars',
    'Shark Taming',
    'Mega Mind',
]

const projectsUl = document.querySelector('#projects ul');

const allProjectsLi = document.createElement('li');
allProjectsLi.classList.add('active');
allProjectsLi.textContent = "All";

projectsUl.appendChild(allProjectsLi);

projects.forEach(project => {
    const projectLi = document.createElement('li');
    projectLi.textContent = project;
    projectsUl.appendChild(projectLi);
});

export default projectsUl;