import styled from "styled-components";

export const ReqFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReqInputThumb = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ReqInput = styled.input`
  margin-bottom: 15px;
  background: #ffffff;
  border: 1px solid #67aefc;
  border-radius: 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  color: #939393;

  padding: 19px 0 19px 17px;
  width: 335px;

  outline: 1px solid #67aefc;
  outline-color: transparent;
  transition: outline-color 250ms ease-in-out, color 250ms ease-in-out;

  &:focus,
  &:hover {
    outline-color: #67aefc;
    color: #292929;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    width: 470px;
  }
`;

export const ReqAlertText = styled.p`
  color: red;
  position: absolute;
  left: 17px;
  bottom: 0;

  font-weight: 400;
  font-size: 13px;
  line-height: 1.25;
`;

export const ReqButtonThumb = styled.div`
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
