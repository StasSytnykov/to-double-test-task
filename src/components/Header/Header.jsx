import { Logo } from "../Logo/Logo";
import { Nav } from "./Header.styled";

const navItems = ["Услуги", "Портфолио", "Этапы", "Дизайнеры"];

export const Header = () => {
  return (
    <Nav>
      <Logo />
    </Nav>
  );
};
