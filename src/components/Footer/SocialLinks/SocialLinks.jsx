import sprite from "../../../images/sprite.svg";
import { SocialList, SocialItem } from "./SocialLinks.styled";

export const SocialLinks = () => (
  <SocialList>
    <SocialItem>
      <a href="https://www.facebook.com/">
        <svg width={15.63} height={30.7}>
          <use href={sprite + "#facebook"}></use>
        </svg>
      </a>
    </SocialItem>
    <SocialItem>
      <a href="https://web.telegram.org/">
        <svg width={32.96} height={27}>
          <use href={sprite + "#telegram"}></use>
        </svg>
      </a>
    </SocialItem>
    <SocialItem>
      <a href="https://www.viber.com/">
        <svg width={32.84} height={34}>
          <use href={sprite + "#viber"}></use>
        </svg>
      </a>
    </SocialItem>
    <SocialItem>
      <a href="https://www.instagram.com/">
        <svg width={27.82} height={28}>
          <use href={sprite + "#instagram"}></use>
        </svg>
      </a>
    </SocialItem>
    <SocialItem>
      <a href="tel:+380505859409">
        <svg width={31.85} height={32}>
          <use href={sprite + "#phone"}></use>
        </svg>
      </a>
    </SocialItem>
  </SocialList>
);
