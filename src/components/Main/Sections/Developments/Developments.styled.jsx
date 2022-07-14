import styled from "styled-components";
import backgroundImg from "../../../../images/background-mobile.jpg";

export const DevSection = styled.section`
  padding-top: 327px;
`;

export const Background = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 375px 546.97px;
  background-position: 0 28px;
`;

export const DevTitle = styled.h1`
  margin-bottom: 22px;
  font-weight: 800;
  font-size: 27px;
  line-height: 1.2;

  text-transform: uppercase;
`;

export const DevText = styled.p`
  margin-bottom: 34px;

  font-size: 16px;
  line-height: 1.4;
`;
