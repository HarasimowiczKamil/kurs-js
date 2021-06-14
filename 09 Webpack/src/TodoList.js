import debug from 'debug';

const logger = debug('bdr:todo');
const logError = debug('bdr:todo:error');

export default class TodoList {
  constructor(root, storage) {
    this.root = root;
    this.storage = storage;
    this.list = root.querySelector('ul');
    this.input = root.querySelector('input');
    this.button = root.querySelector('button');

    this.bindEvent();
  }

  addNote(item) {
    if (!item || !item.title) {
      throw new Error('Tytuł musi być uzupełniony');
    }

    const listNode = document.createElement('li');
    const removeButton = document.createElement('buton');
    removeButton.innerText = '🗑️';

    listNode.dataset.item = JSON.stringify(item);
    listNode.appendChild(document.createTextNode(item.title));
    listNode.appendChild(removeButton);

    if (item.completed) {
      listNode.classList.add('checked');
    }

    this.list.appendChild(listNode);
  }

  async saveNote() {
    const item = await this.storage.addItem({
      title: this.input.value,
      completed: false,
    });

    logger('new item', item);

    try {
      this.addNote(item);
      this.hideError();
    } catch (exception) {
      logError(exception);
      // eslint-disable-next-line no-console
      console.error(exception);
      this.showError(exception.message);
    }
    this.input.value = '';
  }

  bindEvent() {
    this.button.addEventListener('click', () => this.saveNote());
    this.input.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.saveNote();
      }
    });
    this.list.addEventListener('click', (event) => {
      logger(event);
      const { target } = event;

      if (target instanceof HTMLLIElement) {
        this.markAsResolved(target);
      } else {
        this.removeElement(target.parentElement);
      }
    });

    this.input.focus();
  }

  async removeElement(element) {
    const item = JSON.parse(element.dataset.item);
    await this.storage.removeItem(item);

    logger('remove', item);

    element.remove();
  }

  async load() {
    const list = await this.storage.getList();
    logger('load', list);
    list.forEach((item) => this.addNote(item));
  }

  async markAsResolved(listNode) {
    const item = JSON.parse(listNode.dataset.item);
    item.completed = !item.completed;

    await this.storage.updateItem(item);

    logger('update item', item);

    // eslint-disable-next-line no-param-reassign
    listNode.dataset.item = JSON.stringify(item);
    listNode.classList.toggle('checked');
  }

  showError(message) {
    const [msgContent] = this.root.getElementsByClassName('error');
    msgContent.textContent = message;
    msgContent.style.display = 'block';
  }

  hideError() {
    const [msgContent] = this.root.getElementsByClassName('error');
    msgContent.style.display = 'none';
  }
}
