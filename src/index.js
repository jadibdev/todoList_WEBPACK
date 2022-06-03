/* eslint-disable no-loop-func */
import './style.css';
import listContainer from './modules/listContainer.js';
import handleUserInput from './modules/handleUserInput.js';
import checkLocal from './modules/checkLocal.js';
import tasks from './modules/tasksData';

console.log('tasks data:', tasks);
console.log('localstorage data', JSON.parse(localStorage.getItem('tasks')));
const app = () => {
  const main = document.getElementById('main');
  main.append(listContainer());
};

app();
checkLocal();
handleUserInput();
