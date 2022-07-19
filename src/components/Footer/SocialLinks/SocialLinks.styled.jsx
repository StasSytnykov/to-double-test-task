import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  margin-bottom: 40.5px;

  @media screen and (min-width: 1200px) {
    position: absolute;
  }
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
