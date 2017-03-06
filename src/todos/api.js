// @flow
import uuid from 'node-uuid';

export type TodoItem = {
  id: string,
  name: string,
  assignee: string,
  done: boolean
}

type Db = {
  todos: { [key: string]: TodoItem }
}

const fakeDatabase: Db = {
  todos: {
    'af5463a3-73e9-4a6c-8dce-b1281606f8b8': {
      id: 'af5463a3-73e9-4a6c-8dce-b1281606f8b8', name: 'Go to gym', assignee: 'John', done: false
    },
    '38c1c4bb-7c84-4b97-8464-343a3c7f4312': {
      id: '38c1c4bb-7c84-4b97-8464-343a3c7f4312', name: 'Do the laundry', assignee: 'Mark', done: true
    }
  }
};

const delay = ms => {
  return new Promise((resolve, reject) => setTimeout(() => {
    if (Math.random() > 1.0) {
      reject('Boom!');
    } else {
      resolve();
    }
  }, ms));
}

export const getTodos = () =>
  delay(500).then(() =>
    Object.keys(fakeDatabase.todos).map(key => fakeDatabase.todos[key]));

export const getTodo = (id: string) =>
  delay(500).then(() =>
    fakeDatabase.todos[id]);

export const toggleTodo = (id: string) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos[id];
    todo.done = !todo.done;
    return todo;
  });

export const editTodo = (todo: TodoItem) =>
  delay(500).then(() =>
    fakeDatabase.todos[todo.id] = { ...todo });

export const addTodo = (todo: TodoItem) => {
  const id: string = uuid.v4();
  const newTodo = { ...todo, id };
  return delay(500).then(() => {
    fakeDatabase.todos[newTodo.id] = newTodo;
    return newTodo;
  })
};

export const deleteTodo = (id: string) =>
  delay(500).then(() => {
    const todoToRemove = fakeDatabase.todos[id];
    delete fakeDatabase.todos[id];
    return todoToRemove;
  });
