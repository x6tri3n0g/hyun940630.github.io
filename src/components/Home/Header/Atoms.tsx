import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 600px;
    background-color: black;

    span {
        width: 50%;

        h1 {
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
        }

        p {
            max-width: 400px;
            font-size: 13px;
            font-weight: 300px;
            color: #ffffff;
            background-color: red;
        }
    }
`;
