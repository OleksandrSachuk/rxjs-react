import { Subject } from 'rxjs/index';

const createTodo = new Subject();
const currentInput = new Subject();
const updateTodo = new Subject();
const deleteTodo = new Subject();

export {
  createTodo,
  currentInput,
  updateTodo,
  deleteTodo,
}