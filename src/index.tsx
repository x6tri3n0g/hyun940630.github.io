import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from 'assets/styles/GlobalStyles';
import {lightMode} from 'assets/styles/theme';
import App from './App';
import './globalStyle.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <ThemeProvider theme={lightMode}>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root'),
);
