import React from 'react';
import styled from 'styled-components';
import Root from 'routes';

type activeType = {
    active: boolean;
};

const App = () => {
    return (
        <CustomContainer active>
            <Root />
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
