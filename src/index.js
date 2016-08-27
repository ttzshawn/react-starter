import React from 'react'
import ReactDOM from 'react-dom'
import './components/style.scss'

import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class Index extends React.Component {
    render() {
        return (
            <div>
                <App />
                <h1 className="title">Hello World</h1>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('main'))