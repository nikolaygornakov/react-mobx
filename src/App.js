import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todo from './Todo'
import axios from 'axios'

function App() {
  const endpoint = "https://5bfe7fb5362b930013f65216.mockapi.io/api/v1/tasks"

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const fetchAllTodos = async () => {
    const fetched = await axios.get(endpoint);
    setTodos(fetched.data);
  }

  const addTodo = async () => {
    const data = {
      id: uuidv4(),
      title: newTodo,
      completed: false
    }
    await axios.post(endpoint, data);
    await fetchAllTodos();
  }

  const updateTodo = async (todo) => {
    await axios.put(endpoint + `/${todo.id}`, {completed: !todo.completed});
    await fetchAllTodos();
  }

  const deleteTodo = async (todo) => {
    await axios.delete(endpoint + `/${todo.id}`);
    await fetchAllTodos();
  }

  return (
    <div className="App">
      <div className="main-todo-header">
        <div>
          <input type="text" id="add-todo-text" name="addTodo" value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
          <button className="add-button" onClick={addTodo}>Add</button>
        </div>
        <div>
          <span>{todos.filter(t => t.completed).length}/{todos.length} completed</span>
        </div>
      </div>

      {todos.map(t => {
        return <Todo key={t.id} todo={t} onDelete={deleteTodo} onUpdate={updateTodo}/>
      })}
    </div>
  )
}

export default App;
