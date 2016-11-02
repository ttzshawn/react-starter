import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this._getTodoList = this._getTodoList.bind(this)
    this._addTodoItem = this._addTodoItem.bind(this)
    this.state = {
      list: [
        { id: 1, name: 'Shawn', status: 'Employed' },
        { id: 2, name: 'AShawn', status: 'Employed' },
        { id: 3, name: 'AAShawn', status: 'Employed' }
      ]
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newItem) {
      this._addTodoItem(nextProps.newItem)
    }
  }

  _addTodoItem(d) {
    this.setState({
      list: this.state.list.concat(
        { id: 1, name: d, status: 'Employed' }
      )
    })
  }

  _getTodoList() {
    return this.state.list.map((d, index) => {
      return (
        <TableRow key={index}>
          <TableHeaderColumn>{d.name}</TableHeaderColumn>
          <TableHeaderColumn>{d.status}</TableHeaderColumn>
        </TableRow>
      )
    })
  }

  render() {
    let list = this._getTodoList()

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list}
          </TableBody>
        </Table>
      </div>
    )
  }
}