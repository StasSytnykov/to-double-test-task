import styled from "styled-components";

export const LogoImg = styled.img`
  position: absolute;
  left: 12px;
  top: 9px;

  width: 136px;
  height: 35px;

  @media screen and (min-width: 768px) {
    left: 0;
    top: 25px;
    width: 200px;
    height: 45px;
  }

  @media screen and (min-width: 1200px) {
    top: 18px;
    width: 242px;
    height: 59px;
  }
`;
