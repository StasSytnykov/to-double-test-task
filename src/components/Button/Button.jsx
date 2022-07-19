import { HeroButton } from "./Button.Styled";

export const Button = ({ title, type }) => (
  <HeroButton type={type}>{title}</HeroButton>
);
