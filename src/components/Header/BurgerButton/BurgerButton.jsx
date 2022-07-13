import { useState } from "react";
import { MobileModal } from "../MobileModal/MobileModal";
import { BurgerButtonStyled } from "./BurgerButton.styled";
import { SvgStyled } from "./Svg.styled";
import sprite from "../../../images/sprite.svg";

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <BurgerButtonStyled type="button" onClick={toggleModal}>
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
      {isOpen && <MobileModal />}
    </>
  );
};
