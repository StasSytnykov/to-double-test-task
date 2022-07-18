import styled from "styled-components";

export const ExamplesSection = styled.section`
  background: #daecff;
  padding: 23px 0 120px 0;
`;

export const ExamplesTitle = styled.h2`
  font-weight: 800;
  font-size: 23px;
  line-height: 1.5;

  text-align: center;

  color: #111111;

  margin: 0 32px 14px 23px;
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
    grid-template-columns: auto auto;
  }
`;

export const ExamplesImages = styled.img`
  @media screen and (max-width: 767px) {
    height: 260px;
    object-fit: contain;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // @media screen and (min-width: 768px) {
  //   display: grid;
  //   grid-template-columns: 400px 400px;
  // }
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
`;

export const ExamplesDescTitle = styled.h3`
  font-weight: 800;
  font-size: 17px;
  line-height: 1.59;

  text-transform: uppercase;

  color: #ffffff;
`;

export const ExamplesDescText = styled.p`
  font-size: 17px;
  line-height: 1.75;

  color: #ffffff;
`;
