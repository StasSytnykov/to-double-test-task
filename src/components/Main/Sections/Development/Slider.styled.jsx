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
    left: 500px;
    width: 64px;
  }

  @media screen and (min-width: 1920px) {
    width: 60px;
    top: 473px;
    left: 501px;
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
    right: 500px;
    width: 64px;
  }

  @media screen and (min-width: 1920px) {
    width: 60px;
    top: 473px;
    right: 784px;
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
