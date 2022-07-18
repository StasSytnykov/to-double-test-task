import { useEffect, useState } from "react";
import { Container } from "../../../Container/Container.styled";
import { ExamplesMobile } from "./ExamplesMobile";
import {
  ExamplesSection,
  ExamplesTitle,
  ExamplesThumb,
  ExamplesImages,
  ExamplesDescThumb,
  ExamplesDescTitle,
  ExamplesDescText,
} from "./Examples.styled";
import pictureOneDesktop from "../../../../images/examples-images/desktop/picture-one.avif";
import pictureTwoDesktop from "../../../../images/examples-images/desktop/picture-two.avif";
import pictureThreeDesktop from "../../../../images/examples-images/desktop/picture-three.avif";
import pictureFourDesktop from "../../../../images/examples-images/desktop/picture-four.avif";
import pictureFiveDesktop from "../../../../images/examples-images/desktop/picture-five.avif";
import pictureSixDesktop from "../../../../images/examples-images/desktop/picture-six.avif";

export const Exeamples = () => {
  const [isShowSlider, setIsShowSlider] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsShowSlider(true);
    }
  }, [isShowSlider]);

  return (
    <ExamplesSection>
      <ExamplesTitle>Примеры онлайн-магазинов</ExamplesTitle>

      {isShowSlider ? (
        <ExamplesMobile />
      ) : (
        <Container>
          <ExamplesThumb>
            <ExamplesImages
              src={pictureOneDesktop}
              alt="Картинка онлайн магазина для оптовых покупок"
            />
            <ExamplesImages
              src={pictureTwoDesktop}
              alt="Картинка онлайн магазина для парикмахеров"
            />
            <ExamplesImages
              src={pictureThreeDesktop}
              alt="Картинка онлайн магазина для кондитеров"
            />
            <ExamplesImages
              src={pictureFourDesktop}
              alt="Картинка онлайн магазина для флористов"
            />
            <ExamplesImages
              src={pictureFiveDesktop}
              alt="Картинка онлайн магазина для визажистов"
            />
            <ExamplesImages
              src={pictureSixDesktop}
              alt="Картинка онлайн магазина для художников"
            />
          </ExamplesThumb>
        </Container>
      )}
    </ExamplesSection>
  );
};
