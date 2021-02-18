import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 148px;

    ul {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 514px;
        li {
            font-size: 12px;
            font-weight: 400;
            color: #8193b2;
        }
        span {
            width: 0.5px;
            height: 12px;
            border: 0.5px solid #f6f6f6;
        }
    }
`;
