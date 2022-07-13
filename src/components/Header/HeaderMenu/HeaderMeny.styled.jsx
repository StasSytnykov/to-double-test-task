import styled from "styled-components";

export const UlNav = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const UlNavMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 42px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LiNav = styled.li`
  &:not(:last-child) {
    margin-bottom: 43px;
  }
`;

export const HeaderNavLink = styled.span`
  font-weight: 800;
  font-size: 17px;
  line-height: 1.59px;
  text-transform: uppercase;
  border-bottom: ${(props) => (props.current ? "2px solid #ffffff" : "none")};
  color: #ffffff;
`;
