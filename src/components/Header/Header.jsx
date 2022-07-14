import { Logo } from "../Logo/Logo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { ButtonStyled } from "../common/Button/Button.Styled";
import { BurgerButton } from "./BurgerButton/BurgerButton";
import { HeaderSyle, Nav } from "./Header.styled";
import { Container } from "../Container/Container.styled";

export const Header = () => (
  <HeaderSyle>
    <Container>
      <Nav>
        <Logo />
        <HeaderMenu />
        <ButtonStyled type="button">Заказать</ButtonStyled>
        <BurgerButton />
      </Nav>
    </Container>
  </HeaderSyle>
);
