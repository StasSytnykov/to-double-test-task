import { Hero } from "./Sections/Hero/Hero";
import { MainStyled } from "./Main.styled";
import { Services } from "./Sections/Services/Services";
import { Development } from "./Sections/Development/Development";
import { Exeamples } from "./Sections/Examples/Examples";
import { Information } from "./Sections/Information/Information";

export const Main = () => (
  <MainStyled>
    <Hero />
    <Services />
    <Development />
    <Exeamples />
    <Information />
  </MainStyled>
);
