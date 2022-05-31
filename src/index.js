import _ from 'lodash';
import './style.css'

const tasks = [
  {
    description: 'initialize repo',
    completed: false,
    index: 0
  },
  {
    description: 'set up webpack',
    completed: false,
    index: 0
  },
  {
    description: 'structure todo list',
    completed: false,
    index: 0
  }
]

const getTasks = () => {
  const ulContainer = document.createElement('div')
  let tasksUl = document.createElement('ul')
  let tasksTemplate = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksTemplate += `
                <li>${tasks[i].description}</li>
            `
  }
  tasksUl.innerHTML = tasksTemplate
  ulContainer.append(tasksUl);
  return ulContainer;
}

const app = () => {
  const main = document.getElementById('main')
  main.append(getTasks())
}

document.body.appendChild(app());