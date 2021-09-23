import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
    width: 100%;
    /* height: 1100px; */
    height: auto;
    background-color: #02092a;
    border-top: 1px solid #0f1c57;
`;

export const ExperienceHeader = styled.div`
    width: 104px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 390px;

    h1 {
        font-size: 2.3rem;
        font-weight: 700;
        color: #f6f6f6;
        line-height: 4.286rem;
    }
    div {
        width: 100%;
        height: 1px;
        border: 1px solid #ffffff;
    }
`;

export const ExperienceBackground = styled.div`
    width: 100%;
    background-color: #02092a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ExperienceCardWrapper = styled.div`
    width: 81%;
    height: auto;
    background-color: #060f3a;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 40px 60px;
    margin-bottom: 40px;
`;

export const ExperienceCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;

    img {
        width: 260px;
        height: auto;
        padding: 16px;
        background-color: #ffffff;
        border-radius: 8px;
        margin-right: 60px;
    }

    div {
        h2 {
            color: #ffffff;
        }
        h3 {
            color: #f6f6f6;
        }
    }
`;

export const ExperienceContent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px;

    span {
        display: flex;
        flex-direction: column;
        width: 820px;
        height: auto;

        h3 {
            font-size: 20px;
            font-weight: 600;
            color: #f6f6f6;
            margin-top: 60px;

            :hover {
                font-weight: 800;
                color: gray;
            }
        }
        span {
            font-size: 12px;
            color: #f6f6f6;
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            li {
                margin-top: 4px;
                font-size: 1.143rem;
                color: #a1a3c2;
                line-height: 2rem;
                margin-bottom: 4px;
            }
        }

        > img {
            width: 820px;
            height: auto;
            margin-left: 40px;
            margin-bottom: 20px;
        }

        div {
            display: flex;
            flex-direction: row;
            width: 820px;
            height: auto;
            margin-left: 40px;
            margin-bottom: 20px;

            > img {
                display: flex;
                width: 32%;
                margin-right: 1%;
            }
        }
    }
`;
