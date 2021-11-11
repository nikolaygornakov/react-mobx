import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './TodosCounter.scss'

const TodosCounter = observer(
  class TodosCounter extends Component {
    render() {
      return (
        <div class="counter">
          <span>{this.props.completed}/{this.props.total} completed</span>
          {this.props.showRemaining && <span>{this.props.remaining} remaining</span>}
        </div>
      )
    }
  }
)

export default TodosCounter;