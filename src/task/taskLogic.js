const taskList = [
    {
        title: 'Create artificial neuron links',
        project: 'Mega Mind',
        description: '',
        dueDate: '12-03-2023',
        note: '',
        done: false,
    },
    {
        title: 'Swim with baby white shark',
        project: 'Shark Taming',
        description: '',
        dueDate: '24-12-2024',
        note: '',
        done: false,
    },
    {
        title: 'Invent laser canon model A',
        project: 'Invade Mars',
        description: '',
        dueDate: '14-10-2022',
        note: '',
        done: true,
    },
    {
        title: 'Play football with baby white shark',
        project: 'Shark Taming',
        description: '',
        dueDate: '24-12-2022',
        note: '',
        done: false,
    },
    {
        title: 'Invent fighting robot model Z',
        project: 'Invade Mars',
        description: '',
        dueDate: '14-10-2022',
        note: '',
        done: true,
    },
];

const addTask = (task) => {
    taskList.push(task);
}

const getAllTasks = () => {
    return taskList;
}

const deleteTask = (index) => {
    taskList.splice(index, 1);
}

const createTask = (title, project, description, dueDate, note, done) => {
    return { title, project, description, dueDate, note, done };
}

export { addTask, getAllTasks, deleteTask, createTask }