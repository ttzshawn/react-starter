import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from './MyAwesomeReactComponent'

const App = () => (
    <div>
        <MuiThemeProvider>
            <MyAwesomeReactComponent />
        </MuiThemeProvider>
        <div>test</div>
    </div>
)

export default App