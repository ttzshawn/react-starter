import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import './todo.scss'

export default class PaperExampleSimple extends React.Component {
  constructor(props) {
    super(props)

    this._handleChange = this._handleChange.bind(this)
    this._handleAdd = this._handleAdd.bind(this)
    this.state = {
      inputValue: ''
    }
  }

  _handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  _handleAdd() {
    alert(this.state.inputValue)
  }

  render() {
    return (
      <div className="todo-panel-container">
        <TextField onChange={this._handleChange} value={this.state.inputValue} hintText="Please type your plan here" />
        <RaisedButton label="Add" onTouchTap={this._handleAdd} primary={true} className="todo-input" />
      </div>
    )
  }
}