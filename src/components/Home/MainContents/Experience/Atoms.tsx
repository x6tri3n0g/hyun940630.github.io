import styled from 'styled-components';
import EXPERIENCE_BACKGROUND from 'assets/images/experience_background.svg';

export const ExperienceWrapper = styled.div`
    position: relative;
    width: 100%;
    /* height: 1100px; */
    height: auto;
    background-color: #02092a;
`;

export const ExperienceBackground = styled.div`
    width: 100%;
    /* height: 870px; */
    background-image: url(${EXPERIENCE_BACKGROUND});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ExperienceCardWrapper = styled.div`
    /* position: absolute; */
    /* right: 0; */
    /* bottom: 0; */
    width: 83.33%;
    /* height: 836px; */
    height: auto;
    background-color: #060f3a;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    margin-bottom: 40px;

    :first-child {
        margin-top: 40px;
    }

    h2 {
        margin: 40px 108px;
        color: #f6f6f6;
    }
`;

export const ExperienceContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;

    img {
        width: 260px;
        /* height: auto; */
        padding: 16px;
        background-color: #ffffff;
        border-radius: 8px;
        margin-left: 108px;
    }

    span {
        display: flex;
        flex-direction: column;
        width: 804px;
        height: auto;
        margin-left: 108px;

        h1 {
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
            color: #8193b2;
            margin-top: 12px;
            margin-bottom: 12px;
        }

        h3 {
            font-weight: 600;
            color: #f6f6f6;

            :hover {
                font-weight: 800;
                color: #ffffff;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            li {
                margin-top: 4px;
                font-size: 1.143rem;
                color: #8193b2;
                line-height: 2rem;
                margin-bottom: 4px;
            }
        }
    }
`;
