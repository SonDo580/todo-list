const projects = [
    'Invade Mars',
    'Shark Taming',
    'Mega Mind',
]

const getProjects = () => {
    return projects;
}

const addProject = (project) => {
    projects.push(project);
}

export { getProjects, addProject }