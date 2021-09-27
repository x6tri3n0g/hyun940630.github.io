import styled from 'styled-components';

export const TopNavigationWrapper = styled.header`
    // TODO: 일정 스크롤 이후 fixed와 background: white
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 8px 0px;
    background-color: #00000060;
    transition: 0.2s ease-in-out;
    z-index: 100;
`;

export const TopNavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Category = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 660px;
    width: 100%;

    a {
        img {
            width: 40px;
            height: 40px;
        }
    }
    li {
        a {
            color: #ffffff;
            padding: 16px 0px;
        }
        a:hover {
            color: gray;
        }
    }

    @media only screen and (max-width: 1024px) {
        li {
            display: none;
        }
    }
`;

export const SNSLinks = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
    width: 100%;

    li {
        a {
            color: #ffffff;
            padding: 4px;
            img {
                width: 24px;
                height: 24px;
            }
        }
        a:hover {
            color: gray;
        }
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
