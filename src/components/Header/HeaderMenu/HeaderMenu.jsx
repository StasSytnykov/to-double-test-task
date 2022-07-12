import { UlNav } from "./HeaderMeny.styled";

const navItems = ["Услуги", "Портфолио", "Этапы", "Дизайнеры"];

export const HeaderMenu = () => {
  return (
    <UlNav>
      {navItems.map((item) => (
        <li key={item}>
          <a href="">{item}</a>
        </li>
      ))}
    </UlNav>
  );
};
