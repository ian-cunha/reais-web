import React from 'react';
import { Container, Title, Paragraph, Image, Content } from './IntegrationSection.styles';
import integrationImage from '../../../assets/ai.svg';

const IntegrationSection: React.FC = () => (
  <Container>
    <Image src={integrationImage} alt="Integração com Portais" />
    <Content>
      <Title>Integração com os Principais Portais</Title>
      <Paragraph>
        Anuncie seus imóveis e aumente a visibilidade de seu negócio de forma eficiente e profissional!
      </Paragraph>
    </Content>
  </Container>
);

export default IntegrationSection;
