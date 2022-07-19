import logo from "../../images/logo.png";
import { LogoImg, LogoFooter } from "./Logo.styled";

export const Logo = () => {
  return <LogoImg src={logo} alt="logo" />;
};

export const FooterLogo = () => {
  return <LogoFooter src={logo} alt="logo" />;
};
