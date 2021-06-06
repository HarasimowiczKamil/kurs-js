const base = 'https://jsonplaceholder.typicode.com/todos';

class RestStorage {
  getList() {
    return fetch(base)
      .then((response) => response.json());
  }

  async addItem(item) {
    return fetch(base, {
      method: 'POST',
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then(entity => {
        item.id = entity.id;
        return item;
      });
  }

  async updateItem(item) {
    return fetch(`${base}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
    })
      .then((response) => response.json());
  }

  async removeItem(item) {
    return fetch(`${base}/${item.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json());
  }
}
