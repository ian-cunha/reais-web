import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Buttons, Container, Paragraph, SubTitle, Title, Content, Image, BigTitle } from './Home.styles';
import ai from '../../assets/ai.svg';
import { useNavigate } from 'react-router-dom';
import PopupForm from '../../components/PopupForm/PopupForm';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const FreePlan = () => {
    navigate('/gratuito');
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <Container>
      <Content>
        <div>
          <Title>SMART AGORA É </Title>
          <BigTitle>RE.AI.s</BigTitle>
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
    </Container>
  );
};

export default Home;
