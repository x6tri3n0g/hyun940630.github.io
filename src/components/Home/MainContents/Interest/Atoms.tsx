import styled from 'styled-components';

export const InterestWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 650px;
    z-index: 100;
`;

export const InterestBackground = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 88.33%;
    height: 350px;
    border-top-left-radius: 50px;
    background-color: #060f3a;
    z-index: 1;
`;

export const InterestContent = styled.div`
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    z-index: 10;
    h1 {
        display: flex;
        flex-direction: column;
        font-size: 32px;
        font-weight: 700;
        line-height: 60px;
        color: #f6f6f6;
        margin-bottom: 6px;
        z-index: 100;
        span {
            width: 3.12%;
            height: 1px;
            border: 1px solid #f6f6f6;
            z-index: 100;
        }
    }
    p {
        z-index: 100;
        width: 59%;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        color: #8193b2;
        margin-top: 30px;
    }
    div {
        background-color: #8193b2;
        height: 280px;
        margin-top: 20px;
    }
`;
