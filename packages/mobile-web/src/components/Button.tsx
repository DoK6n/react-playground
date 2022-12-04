import styled from '@emotion/styled';

const Button = styled.button`
  padding: 0.4rem;
  color: gainsboro;
  border-radius: 6px;
  background-color: slategray;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px rgb(0 0 0 / 30%);
  }
  &:active {
    background-color: #708090e5;
  }
`;

export default Button;
