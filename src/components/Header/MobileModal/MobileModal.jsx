import { createPortal } from "react-dom";
import { useState } from "react";
import { StyledModal } from "./MobileModal.styled";
import {
  UlNavMobile,
  HeaderNavLink,
  LiNav,
} from "../HeaderMenu/HeaderMeny.styled";
import { navItems } from "../HeaderMenu/HeaderMenu";

const modalRoot = document.querySelector("#modal-root");

export const MobileModal = () => {
  const [currentLinkClick, setCurrentLinkClick] = useState("");

  const handleClick = (event) => {
    if (event.target.outerText === "УСЛУГИ") {
      setCurrentLinkClick("Услуги");
    }
    if (event.target.outerText === "ПОРТФОЛИО") {
      setCurrentLinkClick("Портфолио");
    }
    if (event.target.outerText === "ЭТАПЫ") {
      setCurrentLinkClick("Этапы");
    }
    if (event.target.outerText === "ДИЗАЙНЕРЫ") {
      setCurrentLinkClick("Дизайнеры");
    }
  };

  return createPortal(
    <StyledModal>
      <UlNavMobile>
        {navItems.map((item) => (
          <LiNav key={item}>
            {item === currentLinkClick ? (
              <HeaderNavLink current={true} onClick={handleClick}>
                {item}
              </HeaderNavLink>
            ) : (
              <HeaderNavLink current={false} onClick={handleClick}>
                {item}
              </HeaderNavLink>
            )}
          </LiNav>
        ))}
      </UlNavMobile>
    </StyledModal>,
    modalRoot
  );
};
