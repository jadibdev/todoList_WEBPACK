import './style.css';
import listContainer from './modules/listContainer.js';
import handleUserInput from './modules/handleUserInput.js';
// import tasks from './modules/tasksData.js';

const app = () => {
  const main = document.getElementById('main');
  main.append(listContainer());
};

app();
handleUserInput();
