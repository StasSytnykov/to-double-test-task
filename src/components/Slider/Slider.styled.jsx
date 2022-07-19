import styled from "styled-components";

export const PrevArrow = styled.button`
  position: absolute;
  top: 640px;
  left: 54px;

  border: 2px solid #67aefc;
  padding: 18px 27px 18px 21px;
  border-radius: 15px;
  background: inherit;
  outline: none;

  @media screen and (min-width: 768px) {
    left: 300px;
    width: 64px;
  }
  @media screen and (min-width: 1200px) {
    cursor: pointer;

    left: 500px;
    width: 64px;
    &:hover {
      background: #67aefc;
    }
  }

  @media screen and (min-width: 1920px) {
    left: 30%;
    width: 60px;
    top: 473px;
  }
`;

export const NextArrow = styled.button`
  position: absolute;
  top: 640px;
  right: 54px;

  border: 2px solid #67aefc;
  padding: 18px 21px 18px 27px;
  border-radius: 15px;
  background: inherit;

  @media screen and (min-width: 768px) {
    right: 300px;
    width: 64px;
  }

  @media screen and (min-width: 1200px) {
    cursor: pointer;

    right: 500px;
    width: 64px;
    &:hover {
      background: #67aefc;
    }
  }

  @media screen and (min-width: 1920px) {
    width: 60px;
    top: 473px;
    right: 60%;
  }
`;

export const SvgArrow = styled.svg`
  stroke: #000000;

  ${NextArrow}:hover & {
    stroke: #ffffff;
  }
  ${PrevArrow}:hover & {
    stroke: #ffffff;
  }
`;

export const ExamplesPrevArrow = styled(PrevArrow)`
  top: 840px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ExamplesNextArrow = styled(NextArrow)`
  top: 840px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
