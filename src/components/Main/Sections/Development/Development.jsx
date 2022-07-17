import { Container } from "../../../Container/Container.styled";
import { DevTitle, DevThumb } from "./Development.styled";
import { CustomSlider } from "../../../Slider/Slider";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const Development = () => {
  return (
    <section>
      <Container>
        <DevTitle>Этапы разработки интернет-магазина</DevTitle>
        <CustomSlider>
          <DevThumb>
            <h3>1. Анализ</h3>
            <p>
              Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском
              необходимо провести анализ других предложений рынка, оценить
              конкурентов и найти наиболее удобное решение.
            </p>
          </DevThumb>
          <DevThumb>
            <h3>2</h3>
          </DevThumb>
          <DevThumb>
            <h3>3</h3>
          </DevThumb>
          <DevThumb>
            <h3>4</h3>
          </DevThumb>
          <DevThumb>
            <h3>5</h3>
          </DevThumb>
          <DevThumb>
            <h3>6</h3>
          </DevThumb>
        </CustomSlider>
      </Container>
    </section>
  );
};

// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return <NextArrow onClick={onClick}>Next</NextArrow>;
// }

// function SamplePrevArrow(props) {
//   const { onClick } = props;

//   return <PrevArrow onClick={onClick}>Prev</PrevArrow>;
// }

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
// };

// export const CustomArrows = () => (
//   <Container>
//     <DevTitle>Этапы разработки интернет-магазина</DevTitle>
//     <Slider {...settings}>
//       <DevThumb>
//         <h3>1</h3>
//       </DevThumb>
//       <DevThumb>
//         <h3>2</h3>
//       </DevThumb>
//       <DevThumb>
//         <h3>3</h3>
//       </DevThumb>
//       <DevThumb>
//         <h3>4</h3>
//       </DevThumb>
//       <DevThumb>
//         <h3>5</h3>
//       </DevThumb>
//       <DevThumb>
//         <h3>6</h3>
//       </DevThumb>
//     </Slider>
//   </Container>
// );
