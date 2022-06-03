/* eslint-disable no-loop-func */
import './style.css';
import listContainer from './modules/listContainer.js';
import handleUserInput from './modules/handleUserInput.js';
import checkLocal from './modules/checkLocal.js';

const app = () => {
  const main = document.getElementById('main');
  main.append(listContainer());
};

app();
handleUserInput();
checkLocal();
