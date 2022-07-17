import { Hero } from "./Sections/Hero/Hero";
import { MainStyled } from "./Main.styled";
import { Services } from "./Sections/Services/Services";
import { Development } from "./Sections/Development/Development";

export const Main = () => (
  <MainStyled>
    <Hero />
    <Services />
    <Development />
  </MainStyled>
);
