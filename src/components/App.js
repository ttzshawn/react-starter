import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TodoContainer from './todo/TodoContainer'
import DrawerContaiiner from './drawer/drawerContainer.js'
import './style.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.state = { drawerStatus: false }
  }

  toggleDrawer() {
    this.setState({ drawerStatus: !this.state.drawerStatus })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <DrawerContaiiner drawerStatus={this.state.drawerStatus}></DrawerContaiiner>
            <TodoContainer toggleDrawer={this.toggleDrawer}></TodoContainer>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}