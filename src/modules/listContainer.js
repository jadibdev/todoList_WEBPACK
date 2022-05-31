import getTasks from './getTasks.js';
import todoListTitle from './todoListTitle.js';
import listInput from './listInput.js';
import listFooter from './listFooter.js';

const listContainer = () => {
  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  listContainer.append(todoListTitle());
  listContainer.append(listInput());
  listContainer.append(getTasks());
  listContainer.append(listFooter());
  return listContainer;
};

export default listContainer;