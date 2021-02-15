import styled from 'styled-components';

export const WhoAmIWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 789px;
`;

export const LeftBlankBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 26.92vw;
    height: 789px;
    background-color: #060f3a;
`;

export const IAmWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 1280px;
    height: 789px;
    margin: 0 auto;
`;

export const MyImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 510px;
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
        width: 485px;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2rem;
        color: #8193b2;
    }
`;

export const WhoAmIFigureWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: -240px;
    width: 480px;
    height: 789px;
`;

export const WhoAmIFigureCircle = styled.div`
    z-index: -10;
    width: 480px;
    height: 480px;
    border-radius: 240px;
    background-color: #0f1c57;
    margin-top: -240px;
`;
export const WhoAmIFigureVerticalLine = styled.div`
    z-index: -20;
    width: 1px;
    height: 549px;
    margin: 0 auto;
    background-color: #0f1c57;
`;
