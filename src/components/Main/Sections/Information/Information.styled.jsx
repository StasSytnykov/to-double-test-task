import styled from "styled-components";
import infoSphereMobile from "../../../../images/information-images/sphere-mobile.avif";
import infoSphereDsktop from "../../../../images/information-images/sphere-desktop.avif";

export const InfoSection = styled.section`
  position: relative;

  padding: 43px 0 50px 0;

  @media screen and (min-width: 1200px) {
    padding: 216px 0 180px 0;
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${infoSphereDsktop});
    background-size: auto auto;
    background-repeat: no-repeat;
    background-position: 153px 150px;
  }
`;

export const InforImgSphere = styled.span`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: -12px;
    right: 33px;
    width: 40px;
    height: 40px;

    background-image: url(${infoSphereMobile});
    background-size: auto auto;
    background-repeat: no-repeat;
  }
`;

export const InfoDescThumb = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 670px;
  }
`;

export const InfoTitle = styled.h2`
  font-weight: 800;
  font-size: 23px;
  line-height: 1.5;

  text-align: center;

  color: #111111;

  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-bottom: 53px;

    font-size: 32px;
    line-height: 1.25;
  }
`;

export const InfoImg = styled.img`
  margin: 28px auto 28px auto;

  @media screen and (min-width: 1200px) {
    position: absolute;
    top: 137px;
    right: 0;

    width: 500px;
  }

  @media screen and (min-width: 1920px) {
    position: absolute;
    top: 137px;
    right: 144px;
  }
`;

export const InfoDesc = styled.p`
  font-size: 17px;
  line-height: 1.75;

  color: #111111;

  margin-bottom: 30px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 45px;
  }
`;
