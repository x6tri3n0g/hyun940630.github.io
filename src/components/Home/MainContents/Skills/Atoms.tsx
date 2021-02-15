import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    width: 100%;
    height: 680px;
    border-top: 1px solid #0f1c57;
`;

export const SkillsContents = styled.div`
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    border-left: 1px solid #0f1c57;
    border-right: 1px solid #0f1c57;
`;

export const SkillsCategory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 100%;
    margin-right: 114px;
    div {
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
