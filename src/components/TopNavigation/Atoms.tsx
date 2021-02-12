import styled from 'styled-components';

export const TopNavigationWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 8px 0px;
    background-color: #ffffff00;
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

    li {
        a {
            color: #ffffff;
            padding: 16px 0px;
            img {
                width: 40px;
                height: 40px;
            }
        }
        a:hover {
            color: gray;
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
`;
