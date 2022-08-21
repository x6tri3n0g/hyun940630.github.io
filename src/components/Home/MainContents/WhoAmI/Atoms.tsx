import styled from 'styled-components';

import MY_FACE_IMG from 'assets/images/my_face.png';

export const WhoAmIWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 1000px;
    background-image: linear-gradient(
        to bottom,
        #02092a,
        #030e2f,
        #031235,
        #03153a,
        #041840,
        #051a43,
        #051b47,
        #061d4a,
        #071e4c,
        #071f4e,
        #082150,
        #092252
    );
`;

export const LeftBlankBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 26.92vw;
    height: 100%;
    background-color: #060f3a;
`;

export const IAmWrapper = styled.div`
    position: relative;
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
    width: 510px;
    height: 510px;
    aspect-ratio: 1;
    border-radius: 255px;
    background-color: #060f3a;
    z-index: 2;
    margin-right: 32px;
    position: relative;

    div {
        border-radius: 200px;
        background-color: #00000030;
    }
`;

export const Profile = styled.div<{ imageUrl: string }>`
    width: 400px;
    height: 400px;
    background: url(${'/my_face.png'}) center center no-repeat;
    background-size: 400px;
    transition: background 0.3s ease-out;
    overflow: hidden;

    :hover {
        background: url(${'/my_face.png'}) center center no-repeat;
        background-size: 500px;
        background-color: #ffffff30;
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
        width: 500px;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2.3rem;
        color: #8193b2;

        small {
            font-size: 0.8rem;
            font-weight: 400;
            color: #8193b2aa;
        }
    }
`;

export const WhoAmIFigureWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: -239px;
    width: 480px;
    height: 100%;
`;

export const WhoAmIFigureCircle = styled.div`
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 240px;
    background-color: #0f1c57;
    margin-top: -270px;
`;
export const WhoAmIFigureVerticalLine = styled.div`
    width: 1px;
    height: 100%;
    margin: 0 auto;
    background-color: #0f1c57;
`;
