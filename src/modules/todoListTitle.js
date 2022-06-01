const todoListTitle = () => {
  const todoListTitle = document.createElement('div');
  todoListTitle.innerHTML += `
                              <p>Today's to dos</p>
                              <i class="fa-solid fa-arrows-rotate"></i>
                              `;
  todoListTitle.classList.add('list-title');
  return todoListTitle;
};

export default todoListTitle;