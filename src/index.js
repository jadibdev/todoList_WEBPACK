import './style.css';
import listContainer from './modules/listContainer.js';

const app = () => {
  const main = document.getElementById('main');
  main.append(listContainer());
};

app();