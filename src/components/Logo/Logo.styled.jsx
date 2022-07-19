import styled from "styled-components";

export const LogoImg = styled.img`
  position: absolute;
  left: 12px;
  top: 9px;

  width: 136px;
  height: 35px;

  @media screen and (min-width: 768px) {
    position: static;
    width: 200px;
    height: 45px;
  }

  @media screen and (min-width: 1200px) {
    width: 242px;
    height: 59px;
  }
`;

export const LogoFooter = styled.img`
  width: 280px;
  height: 66px;

  margin-bottom: 26px;
`;
