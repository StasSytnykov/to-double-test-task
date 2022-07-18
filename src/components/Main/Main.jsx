import { Hero } from "./Sections/Hero/Hero";
import { MainStyled } from "./Main.styled";
import { Services } from "./Sections/Services/Services";
import { Development } from "./Sections/Development/Development";
import { Exeamples } from "./Sections/Examples/Examples";

export const Main = () => (
  <MainStyled>
    <Hero />
    <Services />
    <Development />
    <Exeamples />
  </MainStyled>
);
