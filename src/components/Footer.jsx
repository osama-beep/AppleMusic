import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333333;
  color: #888;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
  padding-bottom: 100px;
`;

const FooterContent = styled.div`
  text-align: left;
`;
const FooterText = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterText>Italia | English (UK)</FooterText>
          <FooterText>
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </FooterText>
          <FooterText>
            Condizioni dei servizi internet | Apple Music e privacy | Avviso sui
            cookie
          </FooterText>
          <FooterText>Supporto | Feedback</FooterText>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
