import { useState } from "react";
import { Container } from "../../../Container/Container.styled";
import {
  ServicesSection,
  ServicesTitle,
  ServicesText,
  ServicesSvg,
  ServicesItem,
  ServicesDescriptionText,
} from "./Services.styled";
import sprite from "../../../../images/sprite.svg";

const services = [
  "Дизайн портала",
  "Дизайн адаптивной мобильной версии",
  "Дизайн десктопной версии",
  "Пользовательский интерфейс",
  "Микро UX",
];

export const Services = () => {
  const [designPortal, setDesignPortal] = useState("");
  const [designMobile, setDesignMobile] = useState("");
  const [designDesktop, setDesigDesktop] = useState("");
  const [UI, setUI] = useState("");
  const [microUX, setMicroUX] = useState("");

  const toggleDesc = (event) => {
    if (event.currentTarget.children[0].outerText === services[0]) {
      setDesignPortal(event.currentTarget.children[0].outerText);
    }
    if (event.currentTarget.children[0].outerText === services[1]) {
      setDesignMobile(event.currentTarget.children[0].outerText);
    }
    if (event.currentTarget.children[0].outerText === services[2]) {
      setDesigDesktop(event.currentTarget.children[0].outerText);
    }
    if (event.currentTarget.children[0].outerText === services[3]) {
      setUI(event.currentTarget.children[0].outerText);
    }
    if (event.currentTarget.children[0].outerText === services[4]) {
      setMicroUX(event.currentTarget.children[0].outerText);
    }
    if (event.currentTarget.children.length === 3) {
      setDesignPortal("");
      setDesignMobile("");
      setDesigDesktop("");
      setUI("");
      setMicroUX("");
    }
  };

  return (
    <ServicesSection>
      <Container>
        <ServicesTitle>
          Что входит в услугу по созданию дизайна интернет-магазина?
        </ServicesTitle>
        <ul>
          {services.map((item) => (
            <ServicesItem onClick={toggleDesc} key={item}>
              <ServicesText>{item}</ServicesText>
              {designPortal === item ? (
                <ServicesDescriptionText>
                  Дизайн портала — это оформление контента, совокупность всех
                  графических элементов на веб-странице. Основная задача дизайна
                  — познакомить пользователя со страницей. Продуманный дизайн
                  создает нужное впечатление о компании.
                </ServicesDescriptionText>
              ) : null}
              {designMobile === item ? (
                <ServicesDescriptionText>
                  Дизайн портала — это оформление контента, совокупность всех
                  графических элементов на веб-странице. Основная задача дизайна
                  — познакомить пользователя со страницей. Продуманный дизайн
                  создает нужное впечатление о компании.
                </ServicesDescriptionText>
              ) : null}
              {designDesktop === item ? (
                <ServicesDescriptionText>
                  Десктопную версию сайта просматривают пользователи со
                  стационарных компьютеров. Основная цель: посерфить, углубиться
                  в детали, получить больше информации, сравнить, выбрать,
                  прицениться.
                </ServicesDescriptionText>
              ) : null}
              {UI === item ? (
                <ServicesDescriptionText>
                  Цель дизайна пользовательского интерфейса - сделать
                  взаимодействие максимально простым и эффективным, насколько
                  это возможно, с точки зрения достижения целей пользователя.
                </ServicesDescriptionText>
              ) : null}
              {microUX === item ? (
                <ServicesDescriptionText>
                  Микро-анимация может изменить восприятие продукта,
                  пользовательское поведение и повысить конверсию. Небольшие,
                  преимущественно функциональные анимации поддерживают
                  пользователя: обеспечивают визуальную обратную связь и более
                  понятно отражают происходящие изменения.
                </ServicesDescriptionText>
              ) : null}
              <ServicesSvg width={24} height={13}>
                <use href={sprite + "#arrow-bottom"}></use>
              </ServicesSvg>
            </ServicesItem>
          ))}
        </ul>
      </Container>
    </ServicesSection>
  );
};
