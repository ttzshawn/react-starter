import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

const style = {
  height: '800px',
  width: '90%',
  margin: '20px auto',
  textAlign: 'center',
  display: 'block',
  position: 'relative'
}

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={2}>
      <TextField
        hintText="Hint Text"
        />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>


  </div>
)

export default PaperExampleSimple