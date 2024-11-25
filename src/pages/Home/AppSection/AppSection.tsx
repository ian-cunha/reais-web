import React from 'react';
import { Container, Title, Paragraph, Image, Content } from './AppSection.styles';
import appImage from '../../../assets/ai.svg';

const AppSection: React.FC = () => (
  <Container>
    <Image src={appImage} alt="Aplicativo RE.AI.s" />
    <Content>
      <Title>Aplicativo para Corretores, Imobiliárias e Construtoras</Title>
      <Paragraph>
        Baixe o aplicativo RE.AI.s e tenha todas as informações dos seus imóveis na palma da mão.
      </Paragraph>
    </Content>
  </Container>
);

export default AppSection;
