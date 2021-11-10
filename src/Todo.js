import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
  render() {
    return this.props.todo && (
      <div className="wrapper">
        <div className="todo">
          <input type="checkbox" id="completed" name="completed" onChange={() => this.props.onUpdate(this.props.todo)} checked={this.props.todo.completed} />
          <div className="info">
            <h1>{this.props.todo.title}</h1>
            <div className="more-data">
              <span className="creator">Creator: {this.props.todo.creator || 'XXXX'}</span>
              <span>Created: {this.props.todo.created || 'XXXXXX'}</span>
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <button className="delete-button" onClick={() => this.props.onDelete(this.props.todo)}>Delete</button>
        </div>
      </div>
    )
  }
}