import styled from "styled-components";
import HeroBackgroundImgMob from "../../../../images/background-images/hero/hero-background-mobile.avif";
import HeroBackgroundSphere from "../../../../images/background-images/hero/hero-background-sphere-mobile.avif";
import HeroBackgroundImgDesktop from "../../../../images/background-images/hero/hero-background-cart-empty.avif";
import HeroBackgroundImgLayer from "../../../../images/background-images/hero/hero-background-layer.avif";
import HeroBackgroundImgEclipseThree from "../../../../images/background-images/hero/hero-background-eclipse-3.avif";
import HeroBackgroundImgEclipseTwo from "../../../../images/background-images/hero/hero-background-eclipse-2.avif";
import HeroBackgroundImgShape from "../../../../images/background-images/hero/hero-background-shape.avif";

export const HeroSection = styled.section`
  padding-top: 327px;
  @media screen and (min-width: 768px) {
    padding-top: 171px;
    padding-bottom: 180px;
  }
`;

export const HeroBackground = styled.div`
  background-image: url(${HeroBackgroundImgMob}), url(${HeroBackgroundSphere});
  background-repeat: no-repeat;
  background-size: 375px 546.97px, 26px;
  background-position: 0 28px, 325px 271px;

  @media screen and (min-width: 768px) {
    // background-size: cover, 26px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${HeroBackgroundImgDesktop}),
      url(${HeroBackgroundImgLayer}), url(${HeroBackgroundImgEclipseThree}),
      url(${HeroBackgroundImgEclipseTwo}), url(${HeroBackgroundImgShape});
    background-size: auto auto;
    background-position: center, 65px 608px, -2px 542px, 1311px 82px,
      1231px 92px;
  }
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
