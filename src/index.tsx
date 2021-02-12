import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import { ThemeProvider } from 'styles/theme-components';

import App from './App';

ReactDOM.render(
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>,
    document.getElementById('root'),
);
