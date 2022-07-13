import styled from "styled-components";

export const HeaderSyle = styled.header`
  display: flex;
  align-items: center;

  background-color: #67aefc;
  height: 49px;

  @media screen and (min-width: 768px) {
    height: 95px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
