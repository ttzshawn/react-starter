import { AppContainer } from 'react-hot-loader';
import React from 'react'
import ReactDOM from 'react-dom'
import './components/style.scss'

import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
  <div>
    <App />
    <h1 className="title">Hello Worfweld13</h1>
  </div>,
  document.getElementById('main')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('main')
    );
  });
}