import styled from 'styled-components';
import HEADER_BACKGROUND_IMG from 'assets/images/header_background.svg';

export const HeaderWrapper = styled.header`
    z-index: 10;
    width: 100vw;
    height: 1080px;
    overflow-x: hidden;
    background-color: #02092a;
    background-image: url(${HEADER_BACKGROUND_IMG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        span {
            display: flex;
            flex-direction: column;
            /* flex: 1; */
            width: 589px;
            padding: 16px;
            h1 {
                font-size: 4rem;
                font-weight: bold;
                color: #ffffff;
                line-height: 5.571rem;
                margin-bottom: 30px;
            }
            p {
                font-size: 1.5rem;
                color: #8193b2;
                line-height: 2.5rem;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        div {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
        }
    }
`;
