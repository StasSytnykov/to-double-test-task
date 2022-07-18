import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Slider.styled";
import sprite from "../../images/sprite.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <NextArrow onClick={onClick}>
      <svg width={12} height={24}>
        <use href={sprite + "#arrow-right"}></use>
      </svg>
    </NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <PrevArrow onClick={onClick}>
      <svg width={12} height={24}>
        <use href={sprite + "#arrow-left"}></use>
      </svg>
    </PrevArrow>
  );
}

const settings = {
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
    // {
    //   breakpoint: 768,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 2,
    //   },
    // },
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

export const CustomSlider = ({ children }) => (
  <Slider {...settings}>{children}</Slider>
);
