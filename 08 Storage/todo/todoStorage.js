class TodoStorage {
  static #unique() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }

  getList() {
    return Promise.resolve(
      JSON.parse(localStorage.getItem('todo') || '[]')
    );
  }

  async addItem(item) {
    /** @var {object[]} list */
    const list = await this.getList();
    item.id = TodoStorage.#unique();
    list.push(item);
    localStorage.setItem('todo', JSON.stringify(list));
    return item;
  }

  async updateItem(item) {
    const list = await this.getList();
    const originalItem = list.find((el) => el.id === item.id);

    originalItem.title = item.title;
    originalItem.completed = item.completed;

    localStorage.setItem('todo', JSON.stringify(list));

    return originalItem;
  }

  async removeItem(item) {
    const list = await this.getList();
    const index = list.findIndex((el) => el.id === item.id);

    list.splice(index, index + 1);

    localStorage.setItem('todo', JSON.stringify(list));
  }
}
