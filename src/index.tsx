import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import './assets/css/antd.less'
import { Web3ReactProvider } from '@web3-react/core'
import getLibrary from 'utils/getLibrary'

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <App />
    </Provider>
  </Web3ReactProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
