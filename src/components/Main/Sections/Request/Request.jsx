import { Container } from "../../../Container/Container.styled";
import { RequestForm } from "./RequestForm/RequestForm";
import { RequestSection, RequestTitle, RequestText } from "./Request.styled";

export const Request = () => (
  <RequestSection>
    <Container>
      <RequestTitle>Обсудить проект</RequestTitle>
      <RequestText>
        Расскажите о своих бизнес-целях и мы поможем вам в их достижении
      </RequestText>
      <RequestForm />
    </Container>
  </RequestSection>
);
