import styled from "styled-components";
import exemplBackWave from "../../../../images/examples-images/desktop/back-wave.avif";
import exemplBackSphere from "../../../../images/examples-images/desktop/back-sphere.avif";

export const ExamplesSection = styled.section`
  background: #daecff;
  padding: 23px 0 120px 0;

  @media screen and (min-width: 1920px) {
    padding: 120px 0;
    background-image: url(${exemplBackWave}), url(${exemplBackSphere});
    background-size: auto auto;
    background-repeat: no-repeat;
    background-position: 23px 301px, 1683px 1390px;
  }
`;

export const ExamplesTitle = styled.h2`
  font-weight: 800;
  font-size: 23px;
  line-height: 1.5;

  text-align: center;

  color: #111111;

  margin: 0 32px 14px 23px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 32px;
    line-height: 1.25;
    margin-bottom: 51px;
  }
`;

export const ExamplesSliderThumb = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ExamplesThumb = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 354px 354px;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 563px 563px;
    gap: 30px 35px;
  }
`;

export const ExamplesImages = styled.img`
  height: 260px;
  @media screen and (max-width: 767px) {
    object-fit: contain;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 280px;
  }

  @media screen and (min-width: 1200px) {
    height: 447px;
  }
`;

export const ExamplesDescThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  width: 335px;
  height: 260px;
  background: #67aefc;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ExamplesDescTitle = styled.h3`
  font-weight: 800;
  font-size: 17px;
  line-height: 1.59;

  text-transform: uppercase;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 21px;
    line-height: 1.25;
  }
`;

export const ExamplesDescText = styled.p`
  font-size: 17px;
  line-height: 1.75;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
