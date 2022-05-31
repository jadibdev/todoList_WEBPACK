const listFooter = () => {
  const listFooter = document.createElement('div');
  listFooter.innerHTML = '<p>Clear all completed</p>';
  listFooter.classList.add('list-footer');
  return listFooter;
};

export default listFooter;