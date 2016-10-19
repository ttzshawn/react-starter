import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './header'
import TodoContainer from './TodoContainer'
import './style.scss'

const App = () => (
    <div>
        <MuiThemeProvider>
            <Header />
        </MuiThemeProvider>
        <TodoContainer></TodoContainer>
    </div>
)

export default App