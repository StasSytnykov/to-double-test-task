import { Hero } from "./Sections/Hero/Hero";
import { MainStyled } from "./Main.styled";
import { HeroBackground } from "./Sections/Hero/Hero.styled";
import { Container } from "../Container/Container.styled";

export const Main = () => (
  <HeroBackground>
    <Container>
      <MainStyled>
        <Hero />
      </MainStyled>
    </Container>
  </HeroBackground>
);
