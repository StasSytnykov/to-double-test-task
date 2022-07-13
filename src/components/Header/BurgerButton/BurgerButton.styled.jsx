import styled from "styled-components";

export const BurgerButtonStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  background-color: inherit;

  &:hover,
  &:focus {
    cursor: poiner;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
