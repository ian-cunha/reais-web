import React from 'react';
import { Container, Title, SubTitle, Buttons, Icons, Icon } from './FreePlan.styles';
import Button from '../../components/Button/Button';
import PlansDetails from '../../components/PlansDetails/PlansDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCircleUser, faGlobe, faTableList } from '@fortawesome/free-solid-svg-icons';

const FreePlan: React.FC = () => {
  const about = () => {
    alert('Saber mais');
  };

  const sign = () => {
    window.open('https://app.reaisystems.com.br/SmartImobiliario-Corretor');
  };

  return (
    <Container>
      <Title>Plano Gratuito</Title>
      <SubTitle>Para quem deseja começar a organizar seu site, cadastro, imóveis e clientes.</SubTitle>

      <Icons>
        <Icon>
          <FontAwesomeIcon icon={faCircleUser} /> 1 usuário
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faBuilding} /> 50 Imóveis ativos
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faTableList} /> Cadastro de Clientes
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faGlobe} /> Site Personalizado
        </Icon>
      </Icons>

      <Buttons>
        <Button label="Saber mais" onClick={about} />
        <Button label="✓ Assinar" onClick={sign} />
      </Buttons>

      <PlansDetails />
    </Container>
  );
};

export default FreePlan;