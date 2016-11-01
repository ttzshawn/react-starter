import React from 'react'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import TodoInput from './todoInput'
import TodoList from './todoList'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const style = {
      height: '800px',
      width: '90%',
      margin: '20px auto',
      textAlign: 'center',
      display: 'block',
      position: 'relative'
    }
    const Logged = (props) => (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton ><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )

    Logged.muiName = 'IconMenu'
    return (
      <div>
        <AppBar className="todo-container" onLeftIconButtonTouchTap={this.props.toggleDrawer}
          title='Todoer'
          iconElementRight={<Logged />} />
        <div>
          <Paper style={style} zDepth={2}>
            <TodoInput />
            <TodoList />
          </Paper>
        </div>
      </div>
    )
  }
}