import { Container } from "../../../Container/Container.styled";
import { Button } from "../../../Button/Button";
import {
  InfoSection,
  InfoTitle,
  InfoImg,
  InfoDesc,
  InforImgSphere,
  InfoDescThumb,
} from "./Information.styled";
import infoOrdersMobile from "../../../../images/information-images/orders-mobile.avif";
import infoOrdersDesktop from "../../../../images/information-images/orders-desktop.avif";

export const Information = () => (
  <InfoSection>
    <InforImgSphere />
    <Container>
      <InfoDescThumb>
        <InfoTitle>Необходимо больше информации?</InfoTitle>
        <InfoImg
          srcSet={`${infoOrdersMobile} 260w, ${infoOrdersDesktop} 698w`}
          sizes="(min-width: 1200px) 698px, 260px"
          src={infoOrdersMobile}
        />
        <InfoDesc>
          Если Вы владелец онлайн-магазина или только начинаете свой путь в
          электронной коммерции и вам нужен уникальный дизайн онлайн магазина
          для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и
          короткий период времени, он поможет визуализировать ваш веб-проект.
        </InfoDesc>
        <Button title="оставить заявку" />
      </InfoDescThumb>
    </Container>
  </InfoSection>
);
