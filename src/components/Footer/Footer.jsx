import { FooterLogo } from "../Logo/Logo";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import sprite from "../../images/sprite.svg";
import {
  StyledFooter,
  FooterList,
  FooterItem,
  FooterText,
  FooterLink,
  FooterSvg,
  FooterInfoText,
  FooterMail,
  FooterContainer,
} from "./Footer.styled";

export const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <FooterLogo />
      <FooterList>
        <FooterItem>
          <FooterSvg width={28} height={29}>
            <use href={sprite + "#viber"}></use>
          </FooterSvg>
          <FooterText>
            Валерия
            <FooterLink href="tel:+380505859409">+380505859409</FooterLink>
          </FooterText>
        </FooterItem>
        <FooterItem>
          <FooterSvg width={28} height={29}>
            <use href={sprite + "#viber"}></use>
          </FooterSvg>
          <FooterText>
            Анна&nbsp; &nbsp; &nbsp; &nbsp;
            <FooterLink href="tel:+380505859409">+380505859409</FooterLink>
          </FooterText>
        </FooterItem>
        <FooterItem>
          <FooterSvg width={28} height={29}>
            <use href={sprite + "#viber"}></use>
          </FooterSvg>
          <FooterText>
            Валерия
            <FooterLink href="tel:+380505859409">+380505859409</FooterLink>
          </FooterText>
        </FooterItem>
      </FooterList>
      <SocialLinks />
      <FooterMail href="mailto:hr@d-vs.com">hr@d-vs.com</FooterMail>
      <FooterInfoText>Developers 2018-2021 All rights reserved</FooterInfoText>
    </FooterContainer>
  </StyledFooter>
);
