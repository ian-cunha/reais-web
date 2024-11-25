import React from 'react';
import Button from '../../components/Button/Button';
import { Buttons, Container, Paragraph, SubTitle, Title, Content, Image } from './Home.styles';
import ai from '../../assets/ai.svg';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const About = () => {
    window.open('https://wa.me/5581973382868?text=Quero%20saber%20mais%20sobre%20o%20plano%20gr%C3%A1tis!', '_blank');
  };

  const FreePlan = () => {
    navigate('/gratuito');
  };

  return (
    <Container>
      <Content>
        <div>
          <Title>Sistema imobiliário completo com site de imóveis</Title>
          <SubTitle>Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades.</SubTitle>
          <Paragraph>AUMENTE JÁ SUAS VENDAS!</Paragraph>
          <Buttons>
            <Button label="Fale com um consultor" onClick={About} />
            <Button label="Plano Gratuito" onClick={FreePlan} />
          </Buttons>
        </div>
        <Image src={ai} alt="Sistema RE.AI.s" />
      </Content>
    </Container>
  );
};

export default Home;
