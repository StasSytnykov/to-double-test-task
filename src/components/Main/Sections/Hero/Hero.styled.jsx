import styled from "styled-components";
import heroBackgroundImgMob from "../../../../images/background-images/hero/hero-background-mobile.avif";
import heroBackgroundSphere from "../../../../images/background-images/hero/hero-background-sphere-mobile.avif";
import heroBackgroundImgDesktop from "../../../../images/background-images/hero/hero-background-cart-empty.avif";
import heroBackgroundImgLayer from "../../../../images/background-images/hero/hero-background-layer.avif";
import heroBackgroundImgEclipseThree from "../../../../images/background-images/hero/hero-background-eclipse-3.avif";
import heroBackgroundImgEclipseTwo from "../../../../images/background-images/hero/hero-background-eclipse-2.avif";
import heroBackgroundImgShape from "../../../../images/background-images/hero/hero-background-shape.avif";

export const HeroSection = styled.section`
  padding-top: 327px;
  margin-bottom: 51px;

  background-image: url(${heroBackgroundImgMob}), url(${heroBackgroundSphere});
  background-repeat: no-repeat;
  background-size: cover, 26px;
  background-position: 0 28px, 325px 271px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 0;

    background-image: url(${heroBackgroundImgDesktop}),
      url(${heroBackgroundImgLayer}), url(${heroBackgroundImgEclipseThree}),
      url(${heroBackgroundImgEclipseTwo}), url(${heroBackgroundImgShape});
    background-size: contain, auto, auto, auto, auto;
    background-position: 0 225px, 65px 608px, -2px 542px, 1311px 82px,
      600px 50px;
  }
  @media screen and (min-width: 1200px) {
    background-position: 0 0px, 65px 608px, -2px 542px, 1311px 82px, 600px 50px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 171px;
    padding-bottom: 180px;
    background-position: center, 65px 608px, -2px 542px, 1311px 82px,
      1231px 92px;
    background-size: auto;
  } ;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 22px;
  font-weight: 800;
  font-size: 27px;
  line-height: 1.2;

  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    width: 670px;

    font-weight: 900;
    font-size: 50px;
    line-height: 1.25;

    color: #484848;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 34px;

  font-size: 16px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    margin-bottom: 58px;
    width: 432px;
  }
`;
