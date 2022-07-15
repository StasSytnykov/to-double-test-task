import { HeroButton } from "../../../common/Button/Button.Styled";
import { HeroTitle, HeroSection, HeroText } from "./Hero.styled";

export const Hero = () => (
  <>
    <HeroSection>
      <HeroTitle>Разработка интернет-магазина с нуля за неделю</HeroTitle>
      <HeroText>
        Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета -
        от фирменного стиля до пользовательского интерфейса в сжатые сроки с
        командой Virtual Designers
      </HeroText>
      <HeroButton>Заказать</HeroButton>
    </HeroSection>
  </>
);
