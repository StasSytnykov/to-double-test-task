import { CustomSlider } from "../../../Slider/Slider";
import {
  ExamplesDescText,
  ExamplesThumb,
  ExamplesImages,
  ExamplesDescThumb,
  ExamplesDescTitle,
  ExamplesSliderThumb,
} from "./Examples.styled";
import {
  ExamplesNextArrow,
  ExamplesPrevArrow,
} from "../../../Slider/Slider.styled";
import sprite from "../../../../images/sprite.svg";
import pictureOneMobile from "../../../../images/examples-images/mobile/picture-one.avif";
import pictureTwoMobile from "../../../../images/examples-images/mobile/picture-two.avif";
import pictureThreeMobile from "../../../../images/examples-images/mobile/picture-three.avif";
import pictureFourMobile from "../../../../images/examples-images/mobile/picture-four.avif";
import pictureFiveMobile from "../../../../images/examples-images/mobile/picture-five.avif";
import pictureSixMobile from "../../../../images/examples-images/mobile/picture-six.avif";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <ExamplesNextArrow onClick={onClick}>
      <svg width={12} height={24}>
        <use href={sprite + "#arrow-right"}></use>
      </svg>
    </ExamplesNextArrow>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;

  return (
    <ExamplesPrevArrow onClick={onClick}>
      <svg width={12} height={24}>
        <use href={sprite + "#arrow-left"}></use>
      </svg>
    </ExamplesPrevArrow>
  );
};

const settingsSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const ExamplesMobile = () => (
  <CustomSlider settings={settingsSlider}>
    <ExamplesThumb>
      <ExamplesSliderThumb>
        <ExamplesImages
          src={pictureOneMobile}
          alt="Картинка онлайн магазина для оптовых покупок"
        />
        <ExamplesImages
          src={pictureTwoMobile}
          alt="Картинка онлайн магазина для парикмахеров"
        />
        <ExamplesImages
          src={pictureThreeMobile}
          alt="Картинка онлайн магазина для кондитеров"
        />
      </ExamplesSliderThumb>
    </ExamplesThumb>
    <ExamplesThumb>
      <ExamplesSliderThumb>
        <ExamplesImages
          src={pictureFourMobile}
          alt="Картинка онлайн магазина для флористов"
        />
        <ExamplesImages
          src={pictureFiveMobile}
          alt="Картинка онлайн магазина для визажистов"
        />
        <ExamplesImages
          src={pictureSixMobile}
          alt="Картинка онлайн магазина для художников"
        />
      </ExamplesSliderThumb>
    </ExamplesThumb>

    <ExamplesThumb>
      <ExamplesSliderThumb>
        <ExamplesDescThumb>
          <ExamplesDescTitle>Онлайн-магазин</ExamplesDescTitle>
          <ExamplesDescText>для оптовых покупок</ExamplesDescText>
        </ExamplesDescThumb>
        <ExamplesDescThumb>
          <ExamplesDescTitle>Онлайн-магазин</ExamplesDescTitle>
          <ExamplesDescText>для парикмахеров</ExamplesDescText>
        </ExamplesDescThumb>
        <ExamplesDescThumb>
          <ExamplesDescTitle>Онлайн-магазин</ExamplesDescTitle>
          <ExamplesDescText>для кондитеров</ExamplesDescText>
        </ExamplesDescThumb>
      </ExamplesSliderThumb>
    </ExamplesThumb>
    <ExamplesThumb>
      <ExamplesSliderThumb>
        <ExamplesDescThumb>
          <ExamplesDescTitle>Онлайн-магазин</ExamplesDescTitle>
          <ExamplesDescText>для флористов</ExamplesDescText>
        </ExamplesDescThumb>
        <ExamplesDescThumb>
          <ExamplesDescTitle>Онлайн-магазин</ExamplesDescTitle>
          <ExamplesDescText>для визажистов</ExamplesDescText>
        </ExamplesDescThumb>
        <ExamplesDescThumb>
          <ExamplesDescTitle>Онлайн-магазин</ExamplesDescTitle>
          <ExamplesDescText>для художников</ExamplesDescText>
        </ExamplesDescThumb>
      </ExamplesSliderThumb>
    </ExamplesThumb>
  </CustomSlider>
);
