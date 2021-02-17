import styled from 'styled-components';
import EXPERIENCE_BACKGROUND from 'assets/images/experience_background.svg';

export const ExperienceWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 1100px;
    background-color: #02092a;
`;

export const ExperienceBackground = styled.div`
    width: 100%;
    height: 470px;
    background-image: url(${EXPERIENCE_BACKGROUND});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ExperienceCardWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 83.33%;
    height: 836px;
    background-color: #060f3a;
    border-top-left-radius: 50px;
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 60px 108px;
        li {
            font-size: 24px;
            color: #8193b2;
            padding: 18px 10px;
            margin-right: 14px;
        }
        li:hover {
            color: #f6f6f6;
            border-bottom: 1px solid #f6f6f6;
        }
    }
`;

export const ExperienceContent = styled.div`
    display: flex;
    flex-direction: row;
    img {
        width: 522px;
        height: 476px;
        background-color: #8193b2;
        border-radius: 8px;
        margin-left: 108px;
        margin-right: 128px;
    }
    span {
        width: 460px;
        h1 {
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            color: #f6f6f6;
            margin-bottom: 24px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            color: #8193b2;
        }
    }
`;
