import { PrevArrow, NextArrow } from "./Slider.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <NextArrow onClick={onClick}>Next</NextArrow>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return <PrevArrow onClick={onClick}>Prev</PrevArrow>;
}

const settings = {
  infinite: true,

  slidesToShow: window.innerWidth > 767 ? 3 : 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const CustomSlider = ({ children }) => (
  <Slider {...settings}>{children}</Slider>
);
