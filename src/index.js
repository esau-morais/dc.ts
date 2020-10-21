import React from 'react';
import ReactDOM from 'react-dom';
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
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
