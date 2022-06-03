/* eslint-disable no-loop-func */
import tasks from './tasksData.js';

const checkLocal = () => {
  const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
  if (localStorageTasks) {
    for (let i = 0; i < localStorageTasks.length; i += 1) {
      const li = document.createElement('li');
      li.id = Math.random() * 10;
      document.getElementById('magic').append(li);

      const div = document.createElement('div');
      div.classList.add('liDiv');
      li.append(div);

      const input = document.createElement('input');
      input.type = 'checkbox';
      div.append(input);

      const p = document.createElement('p');
      p.textContent = localStorageTasks[i].description;
      div.append(p);

      const ellipsis = document.createElement('i');
      ellipsis.id = Math.random() * 10;
      const ellipsisClasses = ['fa-solid', 'fa-ellipsis-vertical'];
      ellipsis.classList.add(...ellipsisClasses);
      li.append(ellipsis);

      const trash = document.createElement('i');
      trash.id = Math.random() * 10;
      const trashClasses = ['fa-solid', 'fa-trash-can', 'disappear'];
      trash.classList.add(...trashClasses);
      li.append(trash);

      ellipsis.addEventListener('click', () => {
        li.contentEditable = true;
        li.style.backgroundColor = 'yellow';
        ellipsis.classList.add('disappear');
        trash.classList.remove('disappear');
      });

      li.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          li.contentEditable = false;
          li.style.backgroundColor = 'white';
          trash.classList.add('disappear');
          ellipsis.classList.remove('disappear');
        }
      });

      trash.addEventListener('click', () => {
        // localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
        tasks.splice(tasks[i].index, 1);
        for (let i = 0; i < tasks.length; i += 1) {
          tasks[i].index = i;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });

      input.addEventListener('click', () => {
        p.classList.toggle('lineThrough');
        li.classList.toggle('completed');
        if (tasks[tasks[i].index].completed === false) {
          tasks[tasks[i].index].completed = true;
        } else {
          tasks[tasks[i].index].completed = false;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
    }
  }
};

export default checkLocal;