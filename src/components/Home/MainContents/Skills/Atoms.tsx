import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    width: 100%;
    height: 680px;
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
    margin-right: 114px;
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
        ul {
            width: 100%;
            height: 400px;
            margin-top: 20px;
            li {
                color: #8193b2;
                margin-bottom: 6px;
                a {
                    font-weight: 500;
                    line-height: 2rem;
                    padding: 4px 0px;
                }
                a:hover {
                    color: #ffffff;
                }
            }
        }
    }
`;

export const SkillsCardWrapper = styled.span`
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    width: 100%;
    max-width: 1064px;
    height: 400px;
    z-index: 10;
    background-color: #060f3a;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;

    p {
        width: 804px;
        margin-top: 4px;
        padding-left: 40px;
        font-size: 1.143rem;
        color: #8193b2;
        line-height: 2rem;
    }
`;

export const SkillsTagWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 40px;

    li {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #8193b2;
        margin-right: 14px;
    }
`;
