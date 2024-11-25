import React from 'react';
import { Container, Title, Paragraph, Image, Content } from './WebsiteSection.styles';
import websiteImage from '../../../assets/ai.svg';

const WebsiteSection: React.FC = () => (
  <Container>
    <Image src={websiteImage} alt="Sites Gratuitos e Premium" />
    <Content>
      <Title>Sites Gratuitos e Premium</Title>
      <Paragraph>
        Crie sua página com layouts modernos e otimizados para gerar mais leads para sua imobiliária.
      </Paragraph>
    </Content>
  </Container>
);

export default WebsiteSection;
