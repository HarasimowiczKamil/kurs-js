import '../style/style.css';
import MainStorage from './MainStorage';
import TodoList from './TodoList';

const todo = new TodoList(
  document.getElementById('todo-list'),
  new MainStorage(),
);
todo.load();
