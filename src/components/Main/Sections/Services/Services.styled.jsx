import styled from "styled-components";
import backgroundEllipseFour from "../../../../images/background-images/services/services-ellipse-4.avif";
import backgroundEllipseFive from "../../../../images/background-images/services/services-ellipse-5.avif";

export const ServicesSection = styled.section`
  padding-top: 16px;
  padding-bottom: 30px;
  background: #daecff;
`;

export const ServicesTitle = styled.h2`
  margin-bottom: 17px;

  font-weight: 800;
  font-size: 23px;
  line-height: 1.5;

  text-align: center;

  color: #111111;
`;

export const ServicesItem = styled.li`
  position: relative;

  padding: 14px 0 17px 57px;

  text-align: start;

  background: #ffffff;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ServicesText = styled.p`
  width: 237px;
  font-size: 17px;
  font-weight: ${(props) => (props.isShowDescription ? "800" : "400")};
  line-height: ${(props) => (props.isShowDescription ? "1.58" : "1.75")};
  color: #111111;

  &::before {
    position: absolute;
    top: 23px;
    left: 24px;

    content: "";
    display: inline-block;

    width: 15px;
    height: 15px;
    background-image: url(${backgroundEllipseFour});
  }
`;

export const ServicesDescriptionText = styled(ServicesText)`
  margin-top: 19px;

  &::before {
    background-image: url(${backgroundEllipseFive});
  }
  &::after {
    position: absolute;
    content: "";
    border-left: 1px solid #000000;
    display: inline-block;
    height: 320px;
    top: 64px;
    left: 32px;
  }
`;

export const ServicesSvg = styled.svg`
  position: absolute;
  top: 24px;
  right: 25px;
`;
