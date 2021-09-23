import styled from 'styled-components';

interface PageLayoutProps {
    mode: string;
}

export const PageLayout = styled.div<PageLayoutProps>`
    width: 100vw;
    height: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    background-color: ${(props) => {
        if (props.mode === 'light') {
            return '#FFFFFF';
        } else {
            return '#02092A';
        }
    }};

    color: ${(props) => {
        if (props.mode === 'light') {
            return '#16162B';
        } else {
            return '#F6F6F6';
        }
    }};
`;

export const TextLink = styled.a.attrs({
    target: '_blank',
})`
    text-decoration: underline;

    :hover {
        color: gray;
        font-weight: bold;
    }
`;
