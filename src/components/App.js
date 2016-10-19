import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TodoContainer from './TodoContainer'
import './style.scss'

const App = () => (
    <div>
        <MuiThemeProvider>
            <TodoContainer></TodoContainer>
        </MuiThemeProvider>
    </div>
)

export default App