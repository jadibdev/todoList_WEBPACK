import tasks from './tasksData.js';

const getTasks = () => {
  const ulContainer = document.createElement('div');
  ulContainer.classList.add('ul-container');
  const tasksUl = document.createElement('ul');
  let tasksTemplate = '';
  for (let i = 0; i < tasks.length; i += 1) {
    tasksTemplate += `
                <li>
                  <div>
                    <input type="checkbox">
                    ${tasks[i].description}
                  </div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </li>
            `;
  }
  tasksUl.innerHTML = tasksTemplate;
  ulContainer.append(tasksUl);
  return ulContainer;
};

export default getTasks;