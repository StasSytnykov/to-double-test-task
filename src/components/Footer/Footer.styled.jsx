import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 46px 0 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  background: #67aefc;

  @media screen and (min-width: 1200px) {
    display: block;
    padding: 101px 0 79px 0;
  }

  @media screen and (min-width: 1200px) {
    display: block;
    padding: 101px 0 79px 0;
  }
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 1200px) {
    width: 1160px;
    position: relative;
  }
`;

export const FooterList = styled.ul`
  margin: 0 0 65px 0;

  @media screen and (min-width: 1200px) {
    margin: 22px 0 0px 124px;
    display: inline-block;
  }
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

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const FooterSvg = styled.svg`
  margin-right: 18px;
`;

export const FooterLink = styled.a`
  font-size: 16px;
  line-height: 1.4;
  color: #ffffff;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const FooterMail = styled(FooterLink)`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    position: absolute;
    top: 20px;
    left: 804px;
  }
`;

export const FooterInfoText = styled(FooterText)`
  margin-top: 23.4px;
  font-size: 14px;
  width: 260px;

  @media screen and (min-width: 1200px) {
    margin-top: 134px;
    width: 100%;
    font-size: 18px;
    line-height: 1.75;
  }
`;
