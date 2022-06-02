import tasks from './tasksData.js';

const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
console.log('from local storage', localStorageTasks);

const ulContainer = document.createElement('div');
ulContainer.classList.add('ul-container');
const tasksUl = document.createElement('ul');
tasksUl.id = 'magic';
ulContainer.append(tasksUl);

const getTasks = () => {
  if (localStorageTasks) {
    for (let i = 0; i < localStorageTasks.length; i += 1) {
      const li = document.createElement('li');
      li.id = `li${localStorageTasks[i].index}`;
      tasksUl.append(li);

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
      ellipsis.id = `ellipsis${localStorageTasks[i].index}`;
      const ellipsisClasses = ['fa-solid', 'fa-ellipsis-vertical'];
      ellipsis.classList.add(...ellipsisClasses);
      li.append(ellipsis);

      const trash = document.createElement('i');
      trash.id = `trash${localStorageTasks[i].index}`;
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

      // eslint-disable-next-line no-loop-func
      trash.addEventListener('click', () => {
        li.remove();
        tasks.splice(tasks[localStorageTasks.index].index, 1);
        console.log(tasks);

        /* for (let i = 0; i < tasks.length; i += 1) {
          tasks[i].index = i;
        } */
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
    }
  }
  return ulContainer;
};

export default getTasks;