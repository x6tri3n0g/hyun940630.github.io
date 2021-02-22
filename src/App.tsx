import React, { useState, useEffect } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
// import { light, dark } from 'styles/theme';
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
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={themeMode}>
                <Root toggleTheme={toggleTheme} />
            </ThemeProvider>
        </>
    );
};

export default App;
