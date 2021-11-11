import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodosCounter from '../TodosCounter/TodosCounter';
import './AddTodo.scss';

const AddTodo = observer(
  class AddTodo extends Component {
    render () {
      return (
        <div className="add-todo-wrapper">
          <div className="add-todo">
            <div>
              <span>Add new todo: </span>
              <input type="text" id="add-todo-text" name="addTodo" value={this.props.todosStore.newTodo} onChange={event => this.props.todosStore.setNewTodoName(event.target.value)}/>
            </div>
            <div className="action-buttons">
              <button className="add-button" onClick={this.props.todosStore.addTodo}>Add</button>
            </div>
          </div>
          <TodosCounter
            total={this.props.todosStore.todos.length}
            completed={this.props.todosStore.todos.filter(t => t.completed).length}
            remaining={this.props.todosStore.todos.filter(t => !t.completed).length}
            showRemaining={true}
          />
        </div>
      )
    }
  }
)
export default AddTodo