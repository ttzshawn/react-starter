import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

export default class DrawerUndockedExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerStatus != this.props.drawerStatus) {
      this.setState({ open: !this.state.open })
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}
        >
        <AppBar title="Me"
                showMenuIconButton={false} />
        <MenuItem onTouchTap={this.handleClose}>Todo List</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Doc</MenuItem>
      </Drawer>
    )
  }
}