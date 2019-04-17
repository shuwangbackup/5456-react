import React, { Component } from 'react'

import * as codeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

class CodeMirror extends Component {
  constructor() {
    super()
    this.textarea = React.createRef()
  }
  componentDidMount() {
    const textarea = codeMirror.fromTextArea(this.textarea.current, {
      mode: 'javascript',
      theme: 'monokai',
      matchBrackets: true,
      lineNumbers: true,
      readOnly: true
    })
    textarea.setValue(this.props.code)
    textarea.setSize('auto', 'auto')
  }
  render() {
    return <textarea ref={this.textarea} />
  }
}

export default CodeMirror
