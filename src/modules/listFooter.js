import tasks from './tasksData.js';

const listFooter = () => {
  const listFooter = document.createElement('div');
  const clearButton = document.createElement('button');
  clearButton.id = 'clearButton';
  clearButton.textContent = 'Clear All Completed';
  listFooter.classList.add('list-footer');
  listFooter.append(clearButton);

  clearButton.addEventListener('click', () => {
    // let completedItemsTotal = 0;
    const completed = document.querySelectorAll('.completed');
    completed.forEach((item) => {
      item.remove();
      // completedItemsTotal += 1;
    });

    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].completed === true) {
        tasks.splice(tasks[i].index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  });

  return listFooter;
};

export default listFooter;