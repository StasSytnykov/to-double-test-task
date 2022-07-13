import styled from "styled-components";

export const LogoImg = styled.img`
  position: absolute;
  left: 12px;
  top: 9px;

  width: 136px;
  height: 35px;

  @media screen and (min-width: 768px) {
    position: static;
    width: 242px;
    height: 59px;
  }
`;
