import './style.css'
import { renderProjects } from './project/projectDisplay'
import * as projectForm from './project/projectForm'
import { renderAllTasks, deleteTaskButtons } from './task/taskDisplay'

renderProjects();
renderAllTasks();