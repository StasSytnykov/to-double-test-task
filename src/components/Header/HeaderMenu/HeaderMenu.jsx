import { UlNav, HeaderNavLink } from "./HeaderMeny.styled";

export const navItems = ["услуги", "портфолио", "этапы", "дизайнеры"];

export const HeaderMenu = () => (
  <UlNav>
    {navItems.map((item) => (
      <li key={item}>
        <HeaderNavLink>{item}</HeaderNavLink>
      </li>
    ))}
  </UlNav>
);
