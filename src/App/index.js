import React, { Component } from 'react'

import CodeMirror from '../components/CodeMirror'

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'hello react.js',
      code: React.createRef.toString()
    }
  }
  hanldeClick() {
    this.setState({
      msg: 'change'
    })
  }
  render() {
    const { msg, code } = this.state
    return (
      <div>
        <span onClick={this.hanldeClick.bind(this)}>{msg}</span>
        <CodeMirror code={code} />
      </div>
    )
  }
}

export default App
