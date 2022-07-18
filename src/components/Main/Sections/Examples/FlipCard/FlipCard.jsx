import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
} from "../FlipCard.styled";

export const ExempleFlipCard = ({ children }) => (
  <FlipCard>
    <FlipCardInner>
      <FlipCardFront>{children}</FlipCardFront>
      <FlipCardBack>{children}</FlipCardBack>
    </FlipCardInner>
  </FlipCard>
);
