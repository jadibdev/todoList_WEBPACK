import './style.css';
import listContainer from './modules/listContainer.js';

const app = () => {
  const main = document.getElementById('main');
  main.append(listContainer());
};

app();

let inputEl = document.getElementById('task');
let taskObject = {};
inputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    console.log(event.target.value);
    taskObject['Description'] = event.target.value;
    event.preventDefault();
  }
});