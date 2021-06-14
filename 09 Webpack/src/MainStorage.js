const storageKey = 'todo';

export default class MainStorage {
  static unique() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }

  // eslint-disable-next-line class-methods-use-this
  getList() {
    return Promise.resolve(
      JSON.parse(localStorage.getItem(storageKey)) || [],
    );
  }

  async addItem(params) {
    const item = { ...params };
    const list = await this.getList();

    item.id = MainStorage.unique();
    list.push(item);

    localStorage.setItem(storageKey, JSON.stringify(list));

    return item;
  }

  async updateItem(item) {
    const list = await this.getList();
    const originalItem = list.find((el) => el.id === item.id);

    originalItem.title = item.title;
    originalItem.completed = item.completed;

    localStorage.setItem(storageKey, JSON.stringify(list));
    return originalItem;
  }

  async removeItem(item) {
    const list = await this.getList();
    const index = list.findIndex((el) => el.id === item.id);

    list.splice(index, 1);

    localStorage.setItem(storageKey, JSON.stringify(list));
  }
}
