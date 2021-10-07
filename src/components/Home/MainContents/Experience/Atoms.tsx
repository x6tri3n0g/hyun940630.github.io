import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: auto;
    background-image: linear-gradient(
        to right bottom,
        #02092a,
        #030f30,
        #021337,
        #03173e,
        #041a45,
        #081f4c,
        #0c2453,
        #10295a,
        #183063,
        #1f386b,
        #264074,
        #2d487d
    );
    border-top: 1px solid #0f1c57;
`;

export const ExperienceHeader = styled.div`
    width: 81%;
    margin-top: 40px;
    margin-bottom: 40px;

    h1 {
        font-size: 2.3rem;
        font-weight: 700;
        color: #f6f6f6;
        line-height: 4.286rem;
    }
    div {
        width: 128px;
        height: 1px;
        border: 1px solid #ffffff;
    }
`;

export const ExperienceCardWrapper = styled.div`
    width: 81%;
    height: auto;
    background-color: #060f3a;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 40px 0;
    margin-bottom: 40px;
    padding-left: 10%;
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
        width: 100%;
        height: auto;

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
