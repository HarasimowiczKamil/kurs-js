class TodoList {
  constructor(root) {
    this.root = root;
    this.list = root.querySelector('ul');
    this.input = root.querySelector('input');
    this.saveButton = root.querySelector('button');

    this.bindEvents();
  }

  bindEvents() {
    this.saveButton.addEventListener('click', () => this.saveNote());
    this.input.addEventListener('keyup', this.onInputKeyUp.bind(this));
    this.input.focus();

    this.list.addEventListener('click', this.onListClick.bind(this));
    // this.list.addEventListener('click', (event) => this.onListClick(event));

    // drag and drop
    this.list.addEventListener('dragstart', (event) => {
      console.log('dragstart', event);
      event.target.classList.add('moved');
    });
    this.list.addEventListener('dragend', (event) => {
      console.log('dragend', event);
      const draggedEl = this.list.querySelector('li.moved');
      event.target.classList.remove('moved');
    });
    this.list.addEventListener('dragleave', (event) => {
      console.log('dragleave', event);
    });
    this.list.addEventListener('dragover', (event) => {
      console.log('dragover', event.layerX, event.layerY, event);
      console.log('event.target', event.target);
      const draggedEl = this.list.querySelector('li.moved');
      event.dataTransfer.dropEffect = 'move';
      this.list.insertBefore(draggedEl, event.target);
    });
  }

  /**
   * @param {Event} event
   */
  onListClick(event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.parentNode.remove();
    } else {
      this.markAsResolved(event.target);
    }
  }

  onInputKeyUp(event) {
    console.log('this', this);
    if (event.keyCode === 13) {
      this.saveNote()
    }
  }

  addNote(note) {
    if (!note) {
      return;
    }
    const listNode = document.createElement('li');
    const trash = document.createElement('button');
    trash.innerText = '🗑️';

    listNode.draggable = true;
    listNode.appendChild(document.createTextNode(note));
    listNode.appendChild(document.createTextNode(' '));
    listNode.appendChild(trash);
    this.list.appendChild(listNode);
    console.log('add note', note);
  }

  cleanInput() {
    this.input.value = '';
  }

  saveNote() {
    this.addNote(this.input.value);
    this.cleanInput();
  }

  markAsResolved(todoElement) {
    todoElement.classList.toggle('checked');
  }
}


const todo = new TodoList(document.querySelector('#todo-list'));
console.log(todo);
console.log('end');

todo.addNote('1. hello');
todo.addNote('2. other note');
todo.addNote('3. other note');
todo.addNote('4. other note');
todo.addNote('5. other note');
todo.addNote('6. other note');
