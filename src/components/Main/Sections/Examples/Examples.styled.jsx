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

export const ExamplesThumb = styled.div`
  margin: 0 0 0 6px;
`;

export const ExamplesImages = styled.img`
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  @media and screen (min-width: 768px) {
    width: 400px;
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
