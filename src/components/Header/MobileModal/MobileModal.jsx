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
    event.preventDefault();
    setCurrentLinkClick(event.target.outerText.toLowerCase());
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
