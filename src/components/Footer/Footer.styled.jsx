import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 46px 0 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  background: #67aefc;

  // @media screen and (min-width: )
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterList = styled.ul`
  margin-bottom: 65px;
`;

export const FooterItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.4;

  color: #ffffff;
  text-align: center;
`;

export const FooterSvg = styled.svg`
  margin-right: 18px;
`;

export const FooterLink = styled.a`
  font-size: 16px;
  line-height: 1.4;
  color: #ffffff;
`;

export const FooterInfoText = styled(FooterText)`
  margin-top: 23.4px;
  font-size: 14px;
  width: 260px;
`;
