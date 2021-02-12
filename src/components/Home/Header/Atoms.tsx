import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 660px;
    background-color: black;
    overflow-x: hidden;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        span {
            min-width: 48%;
            padding: 16px;
            h1 {
                font-size: 4rem;
                font-weight: bold;
                color: ${(props) => props.theme.colors.titleColor};
                line-height: 0.96;
                margin-bottom: 24px;
            }
            p {
                font-size: 1.5rem;
                color: #8193b2;
                line-height: 1.5;
            }
        }
    }
`;

export const HeaderAnimationContents = styled.span`
    width: 48%;
    height: 460px;
    background-color: gray;
`;
