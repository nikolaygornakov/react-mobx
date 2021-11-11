import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './Todo.scss';

const Todo = observer(
  class Todo extends Component {
    render() {
      return this.props.todo && (
        <div className="wrapper">
          <div className="todo">
            <input type="checkbox" id="completed" name="completed" onChange={() => this.props.todosStore.updateTodo(this.props.todo.id, !this.props.todo.completed)} checked={this.props.todo.completed} />
            <div className="info">
              <h1>{this.props.todo.title}</h1>
              <div className="more-data">
                <span className="creator">Creator: {this.props.todo.creator || 'XXXX'}</span>
                <span>Created: {this.props.todo.created || 'XXXXXX'}</span>
              </div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="delete-button" onClick={() => this.props.todosStore.deleteTodo(this.props.todo.id)}>Delete</button>
          </div>
        </div>
      )
    }
  }
)

export default Todo;