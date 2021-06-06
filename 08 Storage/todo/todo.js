class TodoList {

  constructor(root, storage) {
    this.storage = storage;
    this.root = root;
    this.list = root.querySelector('ul');
    this.input = root.querySelector('input');
    this.saveButton = root.querySelector('button');

    this.bindEvents();
    this.load();
  }

  bindEvents() {
    this.saveButton.addEventListener('click', () => this.saveNote());
    this.input.addEventListener('keyup', this.onInputKeyUp.bind(this));
    this.input.focus();

    this.list.addEventListener('click', this.onListClick.bind(this));
    // this.list.addEventListener('click', (event) => this.onListClick(event));

  }

  /**
   * @param {Event} event
   */
  onListClick(event) {
    if (event.target.tagName === 'BUTTON') {
      this.removeElement(event.target.parentNode);
    } else {
      this.markAsResolved(event.target);
    }
  }

  onInputKeyUp(event) {
    if (event.keyCode === 13) {
      this.saveNote();
    }
  }

  addNote(item) {
    if (!item) {
      return;
    }
    const listNode = document.createElement('li');
    const trash = document.createElement('button');
    trash.innerText = '🗑️';

    listNode.draggable = true;
    listNode.dataset.item = JSON.stringify(item);
    listNode.appendChild(document.createTextNode(item.title));
    listNode.appendChild(document.createTextNode(' '));
    listNode.appendChild(trash);
    this.list.appendChild(listNode);

    if (item.completed) {
      listNode.classList.add('checked');
    }
  }

  cleanInput() {
    this.input.value = '';
  }

  async saveNote() {
    const title = this.input.value;

    const item = await this.storage.addItem({
      title,
      completed: false,
    });
    console.log('add data', item);

    this.addNote(item);
    this.cleanInput();
  }

  async markAsResolved(todoElement) {
    let item = JSON.parse(todoElement.dataset.item);
    item.completed = !item.completed;
    item = await this.storage.updateItem(item);
    console.log('update data', item);

    todoElement.dataset.item = JSON.stringify(item);
    todoElement.classList.toggle('checked');
  }

  async removeElement(todoElement) {
    const item = JSON.parse(todoElement.dataset.item);
    await this.storage.removeItem(item);
    console.log('remove data', item);
    todoElement.remove();
  }

  async load() {
    const list = await this.storage.getList();
    console.log('Load data', list);
    list.forEach((item) => this.addNote(item));
  }
}

// INIT SCRIPT

const todo = new TodoList(
  document.querySelector('#todo-list'),
  new TodoStorage()
  // new RestStorage()
);
console.log(todo);
