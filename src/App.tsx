import React, { useState } from 'react';
import Home from 'pages/Home';

const App: React.FC = () => {
    // const [mode, setMode] = useState('light');

    const mode = 'light';
    // const toggleMode = () => {
    //     if (mode === 'light') {
    //         setMode('dark');
    //     } else {
    //         setMode('light');
    //     }
    // };

    return <Home mode={mode} />;
};

export default App;
