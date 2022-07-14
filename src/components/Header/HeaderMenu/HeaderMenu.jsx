import { UlNav, HeaderNavLink } from "./HeaderMeny.styled";

export const navItems = ["Услуги", "Портфолио", "Этапы", "Дизайнеры"];

export const HeaderMenu = () => (
  <UlNav>
    {navItems.map((item) => (
      <li key={item}>
        <HeaderNavLink>{item}</HeaderNavLink>
      </li>
    ))}
  </UlNav>
);
