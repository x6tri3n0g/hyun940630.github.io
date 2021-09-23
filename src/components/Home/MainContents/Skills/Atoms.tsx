import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    width: 100%;
    /* height: 680px; */
    height: auto;
    border-top: 1px solid #0f1c57;
`;

export const SkillsContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    border-left: 1px solid #0f1c57;
    border-right: 1px solid #0f1c57;
`;

export const SkillsCategory = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 100%;
    margin-right: 94px;
    div {
        height: 400px;
        h1 {
            font-size: 2.3rem;
            font-weight: 700;
            color: #f6f6f6;
            line-height: 4.286rem;
        }
        div {
            width: 66%;
            height: 1px;
            border: 1px solid #ffffff;
        }
    }
`;

export const SkillSliderWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    flex-direction: column;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SkillsCardWrapper = styled.span`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* max-width: 1064px; */
    /* height: 552px; */
    height: auto;
    z-index: 10;
    background-color: #060f3a;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    /* margin-right: 40px; */
    margin-bottom: 40px;

    p {
        padding-left: 40px;
        padding-right: 40px;
        width: 804px;
        margin-top: 4px;
        font-size: 1.143rem;
        color: #8193b2;
        line-height: 2rem;
        ul {
            li {
                :first-child {
                    color: #ffffff;
                }

                line-height: 2rem;
                margin-bottom: 4px;
            }
        }
    }
`;

export const SkillsTagWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 40px 0 20px;

    h2 {
        color: #ffffff;
        margin-right: 24px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #8193b260;
        margin-right: 14px;
        overflow: hidden;

        img {
            width: 60px;
            height: auto;
        }
    }
`;
