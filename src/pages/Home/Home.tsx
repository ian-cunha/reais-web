import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Buttons, Container, Paragraph, SubTitle, Title, Content, Image, BigTitle, ArrowDown } from './Home.styles';
import ai from '../../assets/ai.svg';
import { useNavigate } from 'react-router-dom';
import PopupForm from '../../components/PopupForm/PopupForm';
import whiteLogo from '../../assets/White.svg';
import AppSection from './AppSection/AppSection';
import IntegrationSection from './IntegrationSection/IntegrationSection';
import WebsiteSection from './WebsiteSection/WebsiteSection';
import MigrationSection from './MigrationSection/MigrationSection';
import ClientsSection from './ClientsSection/ClientsSection';
import ManagerSection from './ManagerSection/ManagerSection';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const FreePlan = () => {
    navigate('/gratuito');
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      const offset = -100;
      const elementPosition = nextSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };


  return (
    <Container>
      <Content>
        <div>
          <Title>SMART AGORA É </Title>
          <BigTitle><img src={whiteLogo} alt="Logo RE.AI.s" /></BigTitle>
          <SubTitle>Sistema imobiliário completo com site de imóveis</SubTitle>
          <Paragraph>Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades.</Paragraph>
          <Buttons>
            <Button label="Fale com um consultor" onClick={togglePopup} />
            <Button label="Plano Gratuito" onClick={FreePlan} />
          </Buttons>
        </div>
        <Image src={ai} alt="Sistema RE.AI.s" />
      </Content>

      {isPopupOpen && <PopupForm onClose={togglePopup} planId={''} />}

      <ArrowDown onClick={handleScroll}>↓</ArrowDown>
      <div id="next-section"></div>
      <AppSection />
      <ManagerSection />
      <IntegrationSection />
      <WebsiteSection />
      <ClientsSection />
      <MigrationSection />
    </Container>
  );
};

export default Home;
