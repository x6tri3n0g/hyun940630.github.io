import styled from 'styled-components';

export const WhoAmIWrapper = styled.div`
    width: 100%;
    height: 789px;
    /* background-color: #060f3a; */
`;

export const LeftBlankBlock = styled.div`
    position: absolute;
    top: 1080px;
    left: 0;
    width: 26.92vw;
    height: 789px;
    background-color: #060f3a;
`;

export const IAmWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 1280px;
    height: 100%;
    margin: 0 auto;
`;

export const MyImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 510px; */
    height: 510px;
    aspect-ratio: 1;
    border-radius: 255px;
    background-color: #060f3a;
    z-index: 2;
    /* margin-left: -15.39%; */
    margin-right: 32px;
    span {
        width: 400px;
        height: 400px;
        border-radius: 200px;
        background-color: #00000075;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const MYDes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h2 {
        font-size: 32px;
        font-weight: normal;
        color: #f6f6f6;
    }
    div {
        width: 50px;
        height: 1px;
        border: 1px solid #f6f6f6;
        margin: 10px 0px 24px 0px;
    }
    h1 {
        font-size: 4rem;
        font-weight: 700;
        color: #f6f6f6;
        line-height: 5.5rem;
        margin-bottom: 30px;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2rem;
        color: #8193b2;
    }
`;
