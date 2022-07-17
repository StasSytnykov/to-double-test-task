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

export const HeroButton = styled.button`
  display: block;
  width: 335px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: #75e169;

  margin: 0 auto;

  cursor: pointer;

  font-weight: 700;
  font-size: 15px;
  line-height: 1.75;
  text-transform: uppercase;
  color: #ffffff;

  line-height: 1.75;

  @media screen and (min-width: 768px) {
    margin: 0;
    border-radius: 5px;
    width: 270px;
    line-height: 1;

    &:hover,
    &:focus {
      border: 2px solid #67aefc;
    }
    &:active {
      background: #67aefc;
    }
  }
`;
