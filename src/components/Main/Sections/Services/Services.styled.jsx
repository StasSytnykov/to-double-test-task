import styled from "styled-components";
import backgroundEllipseFour from "../../../../images/background-images/services/services-ellipse-4.avif";
import backgroundEllipseFive from "../../../../images/background-images/services/services-ellipse-5.avif";
import backgroundBag from "../../../../images/background-images/services/services-bag.avif";

export const ServicesSection = styled.section`
  padding-top: 16px;
  padding-bottom: 30px;
  background: #daecff;

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
    padding-top: 120px;

    background-image: url(${backgroundBag});
    background-position: 1642px 463px;
    background-repeat: no-repeat;
  }
`;

export const ServicesTitle = styled.h2`
  margin-bottom: 17px;

  font-weight: 800;
  font-size: 32px;
  line-height: 1.25;

  text-align: center;

  color: #111111;
`;

export const ServicesItem = styled.li`
  cursor: pointer;

  position: relative;

  padding: 14px 0 17px 57px;

  text-align: start;

  background: #ffffff;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    max-width: 1169px;
    padding: 14px 0 15px 96px;
  }
`;

export const ServicesText = styled.h3`
  width: 237px;
  font-size: 17px;
  font-weight: ${(props) => (props.isShowDesc ? "800" : "400")};
  line-height: ${(props) => (props.isShowDesc ? "1.58" : "1.75")};
  color: #111111;

  &::before {
    position: absolute;
    top: 23px;
    left: 24px;

    content: "";
    display: inline-block;

    width: 15px;
    height: 15px;
    background-image: ${(props) =>
      props.isShowDesc
        ? `url(${backgroundEllipseFive})`
        : `url(${backgroundEllipseFour})`};
    @media screen and (min-width: 768px) {
      top: 18px;
      left: 44px;
      width: 24px;
      height: 24px;
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;

    width: 100%;
    font-weight: ${(props) => (props.isShowDesc ? "700" : "400")};
    line-height: ${(props) => (props.isShowDesc ? "1.25" : "1.75")};
  }
`;

export const ServicesDescriptionText = styled(ServicesText)`
  margin-top: 19px;
  position: relative;

  &::before {
    background-image: none;
    position: absolute;
    content: "";
    border-left: 1px solid #000000;
    display: inline-block;
    height: 100%;
    top: 0;
    left: -25px;
    @media screen and (min-width: 768px) {
      left: -40px;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 1004px;
  }
`;

export const ServicesSvg = styled.svg`
  position: absolute;
  top: 24px;
  right: 25px;
  transition: transform 150ms linear;
  transform: ${(props) =>
    props.isRotateArrow ? "rotate(180deg)" : "rotate(0deg)"};
  @media screen and (min-width: 768px) {
    top: 15px;
    right: 39px;
  }
`;
