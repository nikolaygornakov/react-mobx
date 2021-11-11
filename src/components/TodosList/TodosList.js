import React, { Component } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { TodosStore } from '../../stores/todosStore';
import { observer } from 'mobx-react';

const todosStore = new TodosStore();

const TodosList = observer(
  class TodosList extends Component {
    componentDidMount() {
      todosStore.fetchAll();
    }

    render() {
      return (
        <div className="app-container">
          <AddTodo todosStore={todosStore}/>
    
          {todosStore.todos.map(t => {
            return <Todo key={t.id} todo={t} todosStore={todosStore} />
          })}
        </div>
      )
    }
  }
)

export default TodosList;