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
        li {
        }
    }
    div {
        img {
            width: 522px;
            height: 476px;
        }
        span {
            h1 {
            }
            p {
            }
        }
    }
`;
