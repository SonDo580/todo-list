const taskList = [
    {
        title: 'Create artificial neuron links',
        project: 'Mega Mind',
        description: 'Random description',
        dueDate: '12-03-2023',
        note: '',
        done: false,
    },
    {
        title: 'Swim with baby white shark',
        project: 'Shark Taming',
        description: 'Random description',
        dueDate: '24-12-2024',
        note: '',
        done: false,
    },
    {
        title: 'Invent laser canon model A',
        project: 'Invade Mars',
        description: 'Random description',
        dueDate: '14-10-2022',
        note: '',
        done: true,
    },
    {
        title: 'Play football with baby white shark',
        project: 'Shark Taming',
        description: 'Random description',
        dueDate: '24-12-2022',
        note: '',
        done: false,
    },
    {
        title: 'Invent fighting robot model Z',
        project: 'Invade Mars',
        description: 'Random description',
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

export { addTask, getAllTasks, deleteTask }