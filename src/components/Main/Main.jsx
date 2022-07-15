import { Hero } from "./Sections/Hero/Hero";
import { MainStyled } from "./Main.styled";
import { Services } from "./Sections/Services/Services";

export const Main = () => (
  <MainStyled>
    <Hero />
    <Services />
  </MainStyled>
);
