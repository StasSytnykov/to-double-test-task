import styled from "styled-components";

export const FlipCard = styled.div`
  background: transparent;
  border-radius: 15px;
  perspective: 1000px;
  cursor: pointer;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FlipCardBack = styled.div`
  @media screen and (min-width: 768px) {
    height: 280px;
    width: 354px;
  }
  @media screen and (min-width: 1200px) {
    height: 447px;
    width: 563px;
  }

  background: #67aefc;
  border-radius: 15px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
