import React, { useState } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import { ThemeProvider } from 'styles/theme-components';
import Root from 'routes';

const App: React.FC = () => {
    // const [themeMode, setThemeMode] = useState('light');
    // const theme = themeMode === 'light' ? light : dark;

    // const toggleTheme = ({ e }) => {
    //     console.log(e);
    //     setThemeMode(themeMode === 'light' ? 'dart' : 'light');
    // };

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
