import { Container } from "../../../Container/Container.styled";
import { HeroButton } from "../../../Button/Button.Styled";
import { HeroTitle, HeroSection, HeroText } from "./Hero.styled";

export const Hero = () => (
  <>
    <HeroSection>
      <Container>
        <HeroTitle>Разработка интернет-магазина с нуля за неделю</HeroTitle>
        <HeroText>
          Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета
          - от фирменного стиля до пользовательского интерфейса в сжатые сроки с
          командой Virtual Designers
        </HeroText>
        <HeroButton>Заказать</HeroButton>
      </Container>
    </HeroSection>
  </>
);
