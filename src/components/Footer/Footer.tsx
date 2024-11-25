import CookiePolicy from './CookiePolicy';
import { Buttons, Container, SubTitle, Title } from './Footer.styles';
import IubendaConsent from './IubendaConsent';
import PrivacyPolicy from './PrivacyPolicy';

const Footer: React.FC = () => {

  return (
    <Container>
      <Title>Real Estate AI Planner LTDA - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330</Title>
      <SubTitle>"Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM."</SubTitle>

      <Buttons>
        <CookiePolicy />
        <PrivacyPolicy />
      </Buttons>

      <IubendaConsent />
    </Container>
  );
};

export default Footer;