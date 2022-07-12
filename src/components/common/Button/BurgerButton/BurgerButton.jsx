import { BurgerButtonStyled } from "./BurgerButton.styled";
import { SvgStyled } from "./Svg.styled";
import sprite from "../../../../images/sprite.svg";

export const BurgerButton = () => {
  return (
    <BurgerButtonStyled>
      <SvgStyled width={13} height={13}>
        <use href={sprite + "#burger"}></use>
      </SvgStyled>
      <SvgStyled width={13} height={13}>
        <use href={sprite + "#burger"}></use>
      </SvgStyled>
      <SvgStyled width={13} height={13}>
        <use href={sprite + "#burger"}></use>
      </SvgStyled>
    </BurgerButtonStyled>
  );
};
