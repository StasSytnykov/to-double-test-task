import styled from "styled-components";
import devBackgroundImg from "../../../../images/developments-images/mobile/background-shape-sphere.avif";
import devBackWave from "../../../../images/developments-images/desktop/back-shape-wave.avif";
import devBackSphere from "../../../../images/developments-images/desktop/back-shape-sphere.avif";

export const DevSection = styled.section`
  position: relative;
  padding: 42px 0 130px 0;

  background-image: url(${devBackgroundImg});
  background-size: auto auto;
  background-repeat: no-repeat;
  background-position: 0 14px;

  @media screen and (min-width: 768px) {
    padding: 123px 0 272px 0;

    background-image: url(${devBackWave}), url(${devBackSphere});
    background-size: auto auto;
    background-repeat: no-repeat;
    background-position: 1544px 791px, 167px 129px;
  }
`;

export const DevTitle = styled.h2`
  font-weight: 800;
  font-size: 23px;
  line-height: 1.5;
  text-align: center;

  color: #111111;
  margin: 0 31px 20px 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
    text-align: center;

    margin: 0 auto 82px auto;
  }
`;

export const DevSliderThumb = styled.div`
  @media screen and (min-width: 1200px) {
    margin-left: 25vw;
  }
`;

export const DevItem = styled.div`
  box-sizing: border-box;

  display: flex;

  border: 2px solid #67aefc;
  border-radius: 15px;

  padding: 27px 31px 0 31px;
  margin-right: 25px;

  // width: 335px;
  height: 615px;

  @media screen and (min-width: 1200px) {
    height: 391px;
  }
`;

export const DevCardThumb = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const DevTextThumb = styled.div`
  @media screen and (min-width: 768px) {
    // width: 300px;
    // display: flex;
    // flex-direction: column;
  }
`;

export const DevCardTitle = styled.h3`
  font-weight: 800;
  font-size: 17px;
  line-height: 1.59;
`;

export const DevCardText = styled.p`
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 30px;
`;

export const DevImage = styled.img`
  margin: 0 auto;

  // @media screen and (min-width: 1200px) {
  // }
`;
