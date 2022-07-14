import { Developments } from "./Sections/Developments/Developments";
import { MainStyled } from "./Main.styled";
import { Background } from "./Sections/Developments/Developments.styled";

export const Main = () => (
  <Background>
    <MainStyled>
      <Developments />
    </MainStyled>
  </Background>
);
