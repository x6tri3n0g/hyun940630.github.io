import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/GlobalStyles';
import { lightMode } from 'assets/styles/theme';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={lightMode}>
        <GlobalStyles />
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
