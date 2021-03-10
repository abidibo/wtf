import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import { App } from './App'
import GlobalStyle from './Theme/GlobalStyles'

/**
 * Render app to #app element
 */
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('app'))
