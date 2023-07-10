import { Body, Header, Title, Wrapper } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => {
  return (
    <Wrapper>
      <Header>
        <Title>
          {title}
        </Title>
        {extraHeaderContent}
      </Header>
      <Body>
        {body}
      </Body>
    </Wrapper>
  );
};