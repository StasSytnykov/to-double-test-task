import styled from "styled-components";

export const UlNav = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 130px;
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  @media screen and (min-width: 1200px) {
    right: 200px;
  }
`;

export const UlNavMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 42px 0 0 0;

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
  line-height: 1.59;
  text-transform: uppercase;
  border-bottom: ${(props) => (props.current ? "2px solid #ffffff" : "none")};
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    text-transform: capitalize;
    margin-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    text-transform: capitalize;
    margin-right: 30px;
  }
`;
