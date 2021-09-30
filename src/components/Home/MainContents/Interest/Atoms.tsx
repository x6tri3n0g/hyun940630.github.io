import styled from 'styled-components';

export const InterestWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 60px;
    z-index: 100;
    border-bottom: 1px solid #060f3a;
`;

export const InterestBackground = styled.div`
    width: 88.33%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: #060f3a;
    padding: 80px;
    margin: 0 auto;
    z-index: -1;
`;

export const InterestContent = styled.div`
    width: 100%;
    height: 100%;
    z-index: 10;
    border-right: 1px solid #060f3a;

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
        z-index: 99;
        width: 59%;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        color: #8193b2;
        margin-top: 40px;
        letter-spacing: 3px;
    }

    ul {
        margin-top: 40px;
        li {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 3px;
            color: #ffffff;
        }
    }
`;

export const InterestGallery = styled.div`
    background-color: #8193b2;
    width: 100%;
    height: 380px;
    margin-top: 20px;
`;
