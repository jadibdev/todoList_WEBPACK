const listInput = () => {
  const listInput = document.createElement('div');
  listInput.innerHTML += `
                         <input required id="task" type="text" placeholder="Add to your list...">
                        `;
  listInput.classList.add('input-container');
  return listInput;
};

export default listInput;