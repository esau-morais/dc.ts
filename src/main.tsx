// Redux
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import App from './App'
import store from './redux/store'
// Styles
import Global from './styles/global'
import { darkTheme } from './styles/themes/dark'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Global />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
