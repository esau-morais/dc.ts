import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Styles
import { ThemeProvider } from 'styled-components';
// import { lightTheme } from './styles/themes/light';
import { darkTheme } from './styles/themes/dark';
import Global from './styles/global';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Global />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
