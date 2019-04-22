import React, { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 123,
      todos: [{ id: 1, content: 'look' }, { id: 2, content: 'eat' }]
    }
  }
  todoHandle(todo) {
    this.setState({
      todos: [{ id: 3, content: 'listen' }]
    })
  }
  render() {
    return (
      <div>
        <div>
          <span>{this.state.msg}</span>
        </div>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id} onClick={this.todoHandle.bind(this, todo)}>
                {todo.content}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
