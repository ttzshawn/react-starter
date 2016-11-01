import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  _getTodoList() {
    const data = [
      { id: 1, name: 'Shawn', status: 'Employed' },
      { id: 2, name: 'AShawn', status: 'Employed' },
      { id: 3, name: 'AAShawn', status: 'Employed' }
    ]

    return data.map((d) => {
      return (
        <TableRow key={d.id}>
          <TableHeaderColumn>{d.id}</TableHeaderColumn>
          <TableHeaderColumn>{d.name}</TableHeaderColumn>
          <TableHeaderColumn>{d.status}</TableHeaderColumn>
        </TableRow>
      )
    })
  }

  render() {
    let listTable = this._getTodoList()

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listTable}
          </TableBody>
        </Table>
      </div>
    )
  }
}