const listInput = () => {
  const listInput = document.createElement('div');
  listInput.innerHTML += `
                         <input id="task" type='text' placeholder="Add to your list...">
                        `;
  listInput.classList.add('input-container');
  return listInput;
};

export default listInput;