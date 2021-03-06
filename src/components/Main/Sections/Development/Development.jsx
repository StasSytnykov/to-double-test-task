import { CustomSlider } from "../../../Slider/Slider";
import {
  DevSection,
  DevSliderThumb,
  DevTitle,
  DevItem,
  DevCardThumb,
  DevCardTitle,
  DevCardText,
  DevImage,
} from "./Development.styled";
import { PrevArrow, NextArrow, SvgArrow } from "../../../Slider/Slider.styled";
import devCardOne from "../../../../images/developments-images/mobile/dev-card-one.avif";
import devCardTwo from "../../../../images/developments-images/mobile/dev-card-two.avif";
import devCardThree from "../../../../images/developments-images/mobile/dev-card-three.avif";
import devCardFour from "../../../../images/developments-images/mobile/dev-card-four.avif";
import devCardFive from "../../../../images/developments-images/mobile/dev-card-five.avif";
import devCardOneDesktop from "../../../../images/developments-images/desktop/dev-card-one-desktop.avif";
import devCardTwoDesktop from "../../../../images/developments-images/desktop/dev-card-two-desktop.avif";
import devCardThreeDesktop from "../../../../images/developments-images/desktop/dev-card-three-desktop.avif";
import devCardFourDesktop from "../../../../images/developments-images/desktop/dev-card-four-desktop.avif";
import devCardFiveDesktop from "../../../../images/developments-images/desktop/dev-card-five-desktop.avif";
import sprite from "../../../../images/sprite.svg";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <NextArrow onClick={onClick}>
      <SvgArrow width={12} height={24}>
        <use href={sprite + "#arrow-right"}></use>
      </SvgArrow>
    </NextArrow>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;

  return (
    <PrevArrow onClick={onClick}>
      <SvgArrow width={12} height={24}>
        <use href={sprite + "#arrow-left"}></use>
      </SvgArrow>
    </PrevArrow>
  );
};

const settingsSlider = {
  infinite: false,
  slidesToShow: 2.3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 767,
      infinite: true,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Development = () => {
  return (
    <DevSection>
      <DevTitle>?????????? ???????????????????? ????????????????-????????????????</DevTitle>
      <DevSliderThumb>
        <CustomSlider settings={settingsSlider}>
          <DevItem>
            <DevCardThumb>
              <div>
                <DevCardTitle>1. ????????????</DevCardTitle>
                <DevCardText>
                  ?????? ????????, ?????????? ????????????-?????????????? ???????????????? ????????????, ?????????? ??????
                  ???????????????? ???????????????????? ???????????????? ???????????? ???????????? ?????????????????????? ??????????,
                  ?????????????? ?????????????????????? ?? ?????????? ???????????????? ?????????????? ??????????????.
                </DevCardText>
              </div>
              <DevImage
                src={devCardOne}
                srcSet={`${devCardOne} 220w, ${devCardOneDesktop} 250w`}
                sizes="(min-width: 1200px) 250px, (min-width: 768px) 220px, 220px"
                alt="???????????????? ??????????????"
              />
            </DevCardThumb>
          </DevItem>
          <DevItem>
            <DevCardThumb>
              <div>
                <DevCardTitle>2. ???????????????????? ??????????????</DevCardTitle>
                <DevCardText>
                  ???????????????????? ?????????????? ???????????????? ?????????????? ???????????????? ??? ??????????????,
                  ??????????????, ???????????????????????????? ??????????????, ???????????? ??????????????, ??????????????. ??????
                  ?????? ?????????????? ??? ???????????????? ???????????????????? ????????????, ?????????????? ??????????????
                  ????????.
                </DevCardText>
              </div>
              <DevImage
                srcSet={`${devCardTwo} 220w, ${devCardTwoDesktop} 227w`}
                sizes="(min-width: 1200px) 227px, (min-width: 375px) 220px, 220px"
                src={devCardTwo}
                alt="???????????????? ???????????????????? ??????????????"
              />
            </DevCardThumb>
          </DevItem>
          <DevItem>
            <DevCardThumb>
              <div>
                <DevCardTitle>3. ?????????????????????? ????????????????????</DevCardTitle>
                <DevCardText>
                  ?????????? ?????????????????????? ????????????-???????????? ?????????????????? ?????????????????? ???????? ???
                  ??????????????. ?????? ???????????????????? ??????????????: ???????????????????????? ???????????? ??????
                  ?????????????????? ??????????????????, ?????????? ???? ?????????????????? ?????????????????????? ????????????.
                </DevCardText>
              </div>
              <DevImage
                srcSet={`${devCardThree} 274w, ${devCardThreeDesktop} 310w`}
                sizes="(min-width: 1200px) 310px, (min-width: 375px) 274px, 274px"
                src={devCardThree}
                alt="???????????????? ?????????????????????? ????????????????????"
              />
            </DevCardThumb>
          </DevItem>
          <DevItem>
            <DevCardThumb>
              <div>
                <DevCardTitle>4. ???????????????????? ?????????????????? </DevCardTitle>
                <DevCardText>
                  ???????????????? ?? ???????????????????? ??????????????, ?? ?????????? ?????????? ??????????????????.
                  ?????????????? ?????????????? ?? ???????????????????????? ???????????????????? ???????????????????? ????????????
                  ?????????????????????? ?? ???????????????? ?????????????? ?????????? ???????????????????????? ??
                  ??????????????????????????.
                </DevCardText>
              </div>
              <DevImage
                srcSet={`${devCardFour} 250w, ${devCardFourDesktop} 250w`}
                sizes="250px"
                src={devCardFour}
                alt="???????????????? ???????????????????? ??????????????????"
              />
            </DevCardThumb>
          </DevItem>
          <DevItem>
            <DevCardThumb>
              <div>
                <DevCardTitle>5. ????????????????????????</DevCardTitle>
                <DevCardText>
                  ?????????????????????? ?????????? ???????????????????????? ?????? ?????????????????????? ????????????.
                  ???????????????? ???????????? ?????????? ?? ?????????????????????? ???????????????????? ?????? ??????????????????
                  ??????????. ?????????? ???????????????????????? ??????-?????????? ?????? ?????????????? ??????????????????????
                  ???????????? ?? ???? ????????????????????.
                </DevCardText>
              </div>
              <DevImage
                srcSet={`${devCardFive} 280w, ${devCardFiveDesktop} 278w`}
                sizes="(min-width: 1200px) 278px, (min-width: 375px) 280px, 280px"
                src={devCardFive}
                alt="???????????????? ????????????????????????"
              />
            </DevCardThumb>
          </DevItem>
        </CustomSlider>
      </DevSliderThumb>
    </DevSection>
  );
};
