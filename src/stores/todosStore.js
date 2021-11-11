import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

// export function createTodosStore() {
//   const endpoint = "https://5bfe7fb5362b930013f65216.mockapi.io/api/v1/tasks"

//   function fetchAll() {
//     return (await axios.get(endpoint)).data;
//   }

//   return {
//     todos: [],
//     fetchAllTodos: async () => {
//       return await fetchAll();
//     },
//     fetchTodo: async (id) => {
//       return (await axios.get(endpoint + `/${id}`)).data
//     },
//     addTodo: async (name) => {
//       return (await axios.post(endpoint, {
//         id: uuidv4(),
//         title: name,
//         completed: false
//       })).data
//     },
//     updateTodo: async (id) => {
//       const currentTodo = (await axios.get(endpoint + `/${id}`)).data
//       return (await axios.put(endpoint + `/${id}`, {completed: !currentTodo.completed})).data
//     },
//     deleteTodo: async (id) => {
//       return (await axios.delete(endpoint + `/${id}`)).data
//     }
//   }
// }

const endpoint = "https://5bfe7fb5362b930013f65216.mockapi.io/api/v1/tasks";
export class TodosStore {
  todos = [];
  newTodo = '';

  constructor() {
    makeObservable(this, {
      todos: observable,
      newTodo: observable,
      fetchAll: action,
      fetchTodo: action,
      addTodo: action,
      updateTodo: action,
      deleteTodo: action,
      setNewTodoName: action
    })
  }

  setNewTodoName = (name) => {
    this.newTodo = name;
  }

  fetchAll = async () => {
    this.todos = (await axios.get(endpoint)).data;
  }

  fetchTodo = async (id) => {
    return (await axios.get(endpoint + `/${id}`)).data;
  }

  addTodo = async () => {
    const added = (await axios.post(endpoint, {
      id: uuidv4(),
      title: this.newTodo,
      completed: false
    })).data;
    await this.fetchAll();

    return added;
  }

  updateTodo = async (id, isCompleted) => {
    const updated = (await axios.put(endpoint + `/${id}`, {completed: isCompleted})).data;
    await this.fetchAll();

    return updated;
  }

  deleteTodo = async (id) => {
    const deleted = (await axios.delete(endpoint + `/${id}`)).data;
    await this.fetchAll();

    return deleted;
  }
}

// const todosStore = new TodosStore();
// export default todosStore;