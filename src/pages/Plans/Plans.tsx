import React from 'react';
import { Buttons, Container, SubTitle, Title } from './Plans.styles';
import Button from '../../components/Button/Button';
import PlansDetails from '../../components/PlansDetails/PlansDetails';

const Plans: React.FC = () => {
  const mensalClick = () => {
    alert('Mensal');
  };

  const anualClick = () => {
    alert('Anual');
  };

  return (
    <Container>
      <Title>Planos</Title>
      <SubTitle>Escolha o plano ideal para deixar o seu negócio mais inteligente.</SubTitle>
      <Buttons>
        <Button label="Mensal" onClick={mensalClick} />
        <Button label="Anual" onClick={anualClick} />
      </Buttons>

      {/* Detalhes dos Planos */}
      <PlansDetails />
    </Container>
  );
};


export default Plans;