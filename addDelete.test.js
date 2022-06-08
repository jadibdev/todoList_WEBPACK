/* eslint-disable no-unused-vars */
import tasks from './src/modules/tasksData.js';

describe('Testing add functionality', () => {
  test('Adds new task successully to tasks list', () => {
  /*
    ARRANGE
    -------
  */
    const event = {
      key: 'Enter',
      value: 'Code',
    };

    const ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-container');
    const tasksUl = document.createElement('ul');
    tasksUl.id = 'magic';
    ulContainer.append(tasksUl);

    const add = (event) => {
      if (event.key === 'Enter') {
        const taskObject = {
          description: event.value,
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

        tasksUl.append(li);

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
      }
    };

    /*
    ACT
    -------
  */
    add(event);

    /*
    ASSERT
    -------
  */
    expect(tasks[0]).toStrictEqual({ description: 'Code', completed: false, index: 0 });
  });

  test('Adds new task successully to local storage', () => {
  /*
    ARRANGE
    -------
  */
    const event = {
      key: 'Enter',
      value: 'Code',
    };

    const ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-container');
    const tasksUl = document.createElement('ul');
    tasksUl.id = 'magic';
    ulContainer.append(tasksUl);

    const add = (event) => {
      if (event.key === 'Enter') {
        const taskObject = {
          description: event.value,
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

        tasksUl.append(li);

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
      }
    };

    /*
    ACT
    -------
  */
    add(event);

    /*
    ASSERT
    -------
  */
    expect(JSON.parse(localStorage.getItem('tasks'))).toStrictEqual(tasks);
  });
});

describe('Testing remove functionality', () => {
  /*
  test to check remove functionality
  */
  test('Removes task successully from tasks list', () => {
  /*
    ARRANGE
    -------
  */
    const tasks = [
      {
        description: 'think',
        completed: false,
        index: 0,
      },
    ];

    const remove = (obj) => {
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    // li.remove();
      tasks.splice(obj.index, 1);
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-container');
    const tasksUl = document.createElement('ul');
    tasksUl.id = 'magic';
    ulContainer.append(tasksUl);

    const add = (event) => {
      if (event.key === 'Enter') {
        const taskObject = {
          description: event.value,
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

        tasksUl.append(li);

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

        trash.addEventListener('click', remove(taskObject));

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
      }
    };

    /*
    ACT
    -------
  */
    remove(tasks[0]);

    /*
    ASSERT
    -------
  */
    expect(tasks).toStrictEqual([]);
  });

  /*
  test to check remove functionality
  */
  test('Removes task successully from local storage', () => {
  /*
    ARRANGE
    -------
  */
    const tasks = [
      {
        description: 'think',
        completed: false,
        index: 0,
      },
    ];

    const remove = (obj) => {
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    // li.remove();
      tasks.splice(obj.index, 1);
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-container');
    const tasksUl = document.createElement('ul');
    tasksUl.id = 'magic';
    ulContainer.append(tasksUl);

    const add = (event) => {
      if (event.key === 'Enter') {
        const taskObject = {
          description: event.value,
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

        tasksUl.append(li);

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

        trash.addEventListener('click', remove(taskObject));

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
      }
    };

    /*
    ACT
    -------
  */
    remove(tasks[0]);

    /*
    ASSERT
    -------
  */
    expect(JSON.parse(localStorage.getItem('tasks'))).toStrictEqual(tasks);
  });
});

describe('Adds and removes only 1 li element', () => {
  test('Adds only 1 li to the dom', () => {
  /*
    ARRANGE
    -------
  */
    const event = {
      key: 'Enter',
      value: 'Code',
    };

    const ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-container');
    const tasksUl = document.createElement('ul');
    tasksUl.id = 'magic';
    ulContainer.append(tasksUl);

    const add = (event) => {
      if (event.key === 'Enter') {
        const taskObject = {
          description: event.value,
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

        tasksUl.append(li);

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
      }
    };

    /*
    ACT
    -------
  */
    add(event);
    let liFinal = '';
    liFinal += '<li id="li2"><div class="liDiv"><input type="checkbox"><p>Code</p></div><i id="ellipsis2" class="fa-solid fa-ellipsis-vertical"></i><i id="trash2" class="fa-solid fa-trash-can disappear"></i></li>';

    /*
    ASSERT
    -------
  */
    expect(tasksUl.innerHTML).toBe(liFinal);
  });

  test('Removes only 1 li element from dom', () => {
  /*
    ARRANGE
    -------
  */
    const tasks = [
      {
        description: 'think',
        completed: false,
        index: 0,
      },
    ];

    const ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-container');
    const tasksUl = document.createElement('ul');
    tasksUl.id = 'magic';
    ulContainer.append(tasksUl);

    const add = (event) => {
      if (event.key === 'Enter') {
        const taskObject = {
          description: event.value,
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

        tasksUl.append(li);

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

        const remove = (obj) => {
          // localStorage.setItem('tasks', JSON.stringify(tasks));
          li.remove();
          tasks.splice(obj.index, 1);
          for (let i = 0; i < tasks.length; i += 1) {
            tasks[i].index = i;
          }
          localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        trash.addEventListener('click', remove(taskObject));

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
        /*
    ACT
    -------
  */
        remove(tasks[0]);
      }
    };

    /*
    ASSERT
    -------
  */
    expect(tasksUl.innerHTML).toBe('');
  });
});