const getTasks = () => {
  const ulContainer = document.createElement('div');
  ulContainer.classList.add('ul-container');
  const tasksUl = document.createElement('ul');
  tasksUl.id = 'magic';
  ulContainer.append(tasksUl);

  return ulContainer;
};

export default getTasks;