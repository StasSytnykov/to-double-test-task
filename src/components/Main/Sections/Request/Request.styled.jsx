import styled from "styled-components";
import reqPostpaidMobile from "../../../../images/request-images/postpaid-mobile.avif";
import reqPhoneDesktop from "../../../../images/request-images/call-phone-desktop.avif";
import reqgroupDesktop from "../../../../images/request-images/group-desktop.avif";

export const RequestSection = styled.section`
  padding: 42px 0 358px 0;

  background: #daecff;

  background-image: url(${reqPostpaidMobile});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center 485px;

  @media screen and (min-width: 768px) {
    background-position: right 0;
    padding: 50px 0;
    background-image: url(${reqgroupDesktop});
  }

  @media screen and (min-width: 1200px) {
    padding: 100px 0;
    background-image: url(${reqPhoneDesktop}), url(${reqgroupDesktop});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: left 200px, right 200px;
  }

  @media screen and (min-width: 1920px) {
    padding: 180px 0 128px 0;
    background-image: url(${reqPhoneDesktop}), url(${reqgroupDesktop});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 232px 262px, 1331px 289px;
  }
`;

export const RequestTitle = styled.h2`
  font-weight: 800;
  font-size: 23px;
  line-height: 1.5;

  text-align: center;

  color: #111111;

  margin-bottom: 17px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
    margin-bottom: 30px;
  }
`;

export const RequestText = styled.p`
  font-size: 17px;
  line-height: 1.75;
  width: 335px;
  margin: 0 auto;

  text-align: center;

  color: #111111;

  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 470px;
    text-align: center;
  }
`;
