import React, { useState } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import { ThemeProvider } from 'styles/theme-components';
import Root from 'routes';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Root />
            </ThemeProvider>
        </>
    );
};

export default App;
