import React from 'react';
import styled from 'styled-components';
import Root from 'routes';
import Home from 'pages/Home';
import TopNavigation from 'components/TopNavigation';

type activeType = {
    active: boolean;
};

const App = () => {
    return (
        <CustomContainer active>
            <TopNavigation />
            <Home />
        </CustomContainer>
    );
};

const CustomContainer = styled.div<activeType>`
    background: ${(props) => {
        return props.theme.color.main;
    }};

    color: ${(props) => {
        if (props.active) {
            return 'white';
        }
        return '#eee';
    }};
`;

export default App;
