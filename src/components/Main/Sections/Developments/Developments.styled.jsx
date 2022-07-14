import styled from "styled-components";
import backgroundImgMob from "../../../../images/backgroundImages/background-mobile.avif";
import backgroundSphere from "../../../../images/backgroundImages/background-sphere.avif";
import backgroundImgDesktop from "../../../../images/backgroundImages/background-desktop.png";

export const DevSection = styled.section`
  padding-top: 327px;
  @media screen and (min-width: 376px) {
    padding-top: 171px;
    padding-bottom: 180px;
  }
`;

export const Background = styled.div`
  background-image: url(${backgroundImgMob}), url(${backgroundSphere});
  background-repeat: no-repeat;
  background-size: 375px 546.97px, 26px;
  background-position: 0 28px, 325px 271px;

  @media screen and (min-width: 376px) {
    // background-size: cover, 26px;
  }

  @media screen and (min-width: 376px) {
    background-image: url(${backgroundImgDesktop});
    background-size: auto auto;
    background-position: center;
  }
`;

export const DevTitle = styled.h1`
  margin-bottom: 22px;
  font-weight: 800;
  font-size: 27px;
  line-height: 1.2;

  text-transform: uppercase;

  @media screen and (min-width: 376px) {
    margin-bottom: 20px;
    width: 670px;

    font-weight: 900;
    font-size: 50px;
    line-height: 1.25;

    color: #484848;
  }
`;

export const DevText = styled.p`
  margin-bottom: 34px;

  font-size: 16px;
  line-height: 1.4;

  @media screen and (min-width: 376px) {
    margin-bottom: 58px;
    width: 432px;
  }
`;
