/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import tasks from './tasksData.js';

const handleUserInput = () => {
  const inputEl = document.getElementById('task');
  inputEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskObject = {
        description: event.target.value,
        completed: false,
        index: tasks.length,
      };
      // localStorage.setItem('tasks', JSON.stringify(tasks));
      tasks.push(taskObject);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      const li = document.createElement('li');
      li.id = `li${taskObject.index}`;

      const div = document.createElement('div');
      div.classList.add('liDiv');

      const input = document.createElement('input');
      input.type = 'checkbox';

      const p = document.createElement('p');
      p.textContent = taskObject.description;

      const ellipsis = document.createElement('i');
      ellipsis.id = `ellipsis${taskObject.index}`;
      const ellipsisClasses = ['fa-solid', 'fa-ellipsis-vertical'];
      ellipsis.classList.add(...ellipsisClasses);

      const trash = document.createElement('i');
      trash.id = `trash${taskObject.index}`;
      const trashClasses = ['fa-solid', 'fa-trash-can', 'disappear'];
      trash.classList.add(...trashClasses);

      div.append(input);
      div.append(p);
      li.append(div);

      li.append(ellipsis);
      li.append(trash);

      document.querySelector('ul').append(li);
      event.target.value = '';

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
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
        tasks.splice(taskObject.index, 1);
        for (let i = 0; i < tasks.length; i += 1) {
          tasks[i].index = i;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });

      input.addEventListener('click', () => {
        p.classList.toggle('lineThrough');
        li.classList.toggle('completed');
        if (tasks[taskObject.index].completed === false) {
          tasks[taskObject.index].completed = true;
        } else {
          tasks[taskObject.index].completed = false;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });

      event.preventDefault();
    }
  });
};

export default handleUserInput;