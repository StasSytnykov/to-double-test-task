import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    width: 170px;
    height: 37.78px;
    background: #75e169;
    border-radius: 5px;
    border: 2px solid transparent;
    outline: none;

    font-weight: 700;
    font-size: 15px;
    line-height: 1.5px;
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
  }
`;
