import React, { useState, useEffect } from 'react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { lightTheme, darkTheme } from 'styles/theme';
// import theme from 'styles/theme';
import { ThemeProvider } from 'styles/theme-components';
import Root from 'routes';

const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme);
        } else {
            window.localStorage.setItem('theme', 'light');
        }
    });

    return [theme, toggleTheme];
};

const App: React.FC = () => {
    // const [theme, toggleTheme] = useDarkMode();
    // const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dart');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Root />
        </ThemeProvider>
    );
};

export default App;
