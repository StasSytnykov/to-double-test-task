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

const data = [
  {
    title: "Дизайн портала",
    description:
      "Дизайн портала — это оформление контента, совокупность всехграфических элементов на веб-странице. Основная задачадизайна — познакомить пользователя со страницей. Продуманныйдизайн создает нужное впечатление о компании.",
  },
  {
    title: "Дизайн адаптивной мобильной версии",
    description:
      "Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана.",
  },
  {
    title: "Дизайн десктопной версии",
    description:
      "Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.",
  },
  {
    title: "Пользовательский интерфейс",
    description:
      "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя.",
  },
  {
    title: "Микро UX",
    description:
      "Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. ",
  },
];

export const Services = () => {
  const [action, setAction] = useState("");

  const toggleDesc = (event) => {
    setAction(event.currentTarget.children[0].outerText);

    if (event.currentTarget.children.length === 3) {
      setAction("");
    }
  };

  return (
    <ServicesSection>
      <Container>
        <ServicesTitle>
          Что входит в услугу по созданию дизайна интернет-магазина?
        </ServicesTitle>
        <ul>
          {data.map(({ title, description }) => (
            <ServicesItem onClick={toggleDesc} key={title}>
              {title === action ? (
                <>
                  <ServicesText isShowDesc={true}>{title}</ServicesText>
                  <ServicesDescriptionText>
                    {description}
                  </ServicesDescriptionText>
                </>
              ) : (
                <ServicesText isShowDesc={false}>{title}</ServicesText>
              )}

              {title === action ? (
                <ServicesSvg isRotateArrow={true} width={24} height={13}>
                  <use href={sprite + "#arrow-bottom"}></use>
                </ServicesSvg>
              ) : (
                <ServicesSvg isRotateArrow={false} width={24} height={13}>
                  <use href={sprite + "#arrow-bottom"}></use>
                </ServicesSvg>
              )}
            </ServicesItem>
          ))}
        </ul>
      </Container>
    </ServicesSection>
  );
};
