import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomSlider = ({ children, settings }) => (
  <Slider {...settings}>{children}</Slider>
);
