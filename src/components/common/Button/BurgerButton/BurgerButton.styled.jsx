import styled from "styled-components";

export const BurgerButtonStyled = styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
