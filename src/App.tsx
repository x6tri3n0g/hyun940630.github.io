import React, { useState } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import { light, dark } from 'styles/theme';
import { ThemeProvider } from 'styles/theme-components';
import Root from 'routes';

interface ThemeModeProps {
    e: string;
}

const App: React.FC = () => {
    const [themeMode, setThemeMode] = useState('light');
    const theme = themeMode === 'light' ? light : dark;

    const toggleTheme = ({ e }: ThemeModeProps) => {
        console.log(e);
        setThemeMode(themeMode === 'light' ? 'dart' : 'light');
    };

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Root toggleTheme={toggleTheme} />
            </ThemeProvider>
        </>
    );
};

export default App;
