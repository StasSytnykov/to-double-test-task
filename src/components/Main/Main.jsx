import { Developments } from "./Sections/Developments/Developments";
import { MainStyled } from "./Main.styled";
import { Background } from "./Sections/Developments/Developments.styled";
import { Container } from "../Container/Container.styled";

export const Main = () => (
  <Background>
    <Container>
      <MainStyled>
        <Developments />
      </MainStyled>
    </Container>
  </Background>
);
