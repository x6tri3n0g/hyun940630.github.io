import styled from 'styled-components';

export const TextLink = styled.a.attrs({
  target: '_blank',
})`
  font-size: 14px;
  padding: 2px 6px;
  background-color: #ffffff30;
  border-radius: 2px;
  margin-left: 16px;

  :hover {
    color: gray;
    font-weight: bold;
  }
`;
