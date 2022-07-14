import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: none;
  background: #75e169;
  border-radius: 5px;
  border: 2px solid transparent;
  outline: none;

  font-weight: 700;
  font-size: 15px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #ffffff;

  &:hover,
  &:focus {
    border: 2px solid #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
  &:active {
    color: #67aefc;
    background: #ffffff;
    border: 2px solid #ffffff;
  }

  @media screen and (min-width: 768px) {
    display: block;
    margin-left: auto;

    width: 130px;
    height: 35px;
  }

  @media screen and (min-width: 1200px) {
    width: 170px;
    height: 37.78px;
  }
`;

export const DevButton = styled(ButtonStyled)`
  display: block;
  width: 335px;
  height: 60px;
  border-radius: 10px;
  border: none;

  line-height: 1.75;
`;
