import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: 858px;
    margin: 0 auto;
`;

export const PortfolioHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
        font-size: 32px;
        font-weight: 700;
        line-height: 60px;
        color: #f6f6f6;
        border-bottom: 1px solid #f6f6f6;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 460px;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: 400;
            color: #8193b2;
            width: 60px;
            height: 60px;
            border: 1px solid #8193b2;
            border-radius: 50%;
        }
        li:hover {
            color: #ffffff;
            font-weight: 700;
            background-color: #2d3dcf;
            border: 1px solid #2d3dcf;
        }
    }
`;

export const PoltfolioArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;

    div {
        width: 50%;
        h2 {
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            color: #f6f6f6;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            color: #8193b2;
            margin-top: 12px;
            padding-bottom: 48px;
        }
        p:first-child(1) {
        }
        ul {
            li {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                margin-top: 24px;
                img {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background-color: #2d3dcf;
                }
                a {
                    font-size: 16px;
                    font-weight: 500;
                    color: #f6f6f6;
                    margin-left: 10px;
                }
            }
        }
    }

    img {
        width: 50%;
        height: 100%;
        background-color: #8193b2;
        border-radius: 10px;
    }
`;
