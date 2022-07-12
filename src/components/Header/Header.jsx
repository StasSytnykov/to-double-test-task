import { Logo } from "../Logo/Logo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { Button } from "../common/Button/Button";
import { BurgerButton } from "../common/Button/BurgerButton/BurgerButton";
import { HeaderSyle, Nav } from "./Header.styled";
import { Container } from "../Container/Container.styled";

export const Header = () => {
  return (
    <HeaderSyle>
      <Container>
        <Nav>
          <Logo />
          <HeaderMenu />
          <Button />
          <BurgerButton />
        </Nav>
      </Container>
    </HeaderSyle>
  );
};
