import { Logo } from "../Logo/Logo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { HeaderSyle, Nav } from "./Header.styled";
import { Container } from "../Container/Container.styled";

export const Header = () => {
  return (
    <HeaderSyle>
      <Container>
        <Nav>
          <Logo />
          <HeaderMenu />
        </Nav>
      </Container>
    </HeaderSyle>
  );
};
