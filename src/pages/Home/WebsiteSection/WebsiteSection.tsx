import React from 'react';
import {
  Container,
  Title,
  Paragraph,
  Image,
  Content,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  HighlightText
} from './WebsiteSection.styles';
import websiteImage from '../../../assets/website/site.svg';

import timeIcon from '../../../assets/website/icon-tempo.svg';
import searchIcon from '../../../assets/website/icon-busca.svg';
import smartphoneIcon from '../../../assets/website/icon-cel.svg';

const WebsiteSection: React.FC = () => (
  <Container>
    <Image src={websiteImage} alt="Sites Gratuitos e Premium" />
    <Content>
      <Title>Sites Grátis e Premium</Title>
      <Paragraph>
        Crie sua página com layouts modernos e otimizados para gerar mais leads para sua imobiliária.
      </Paragraph>
      <FeatureList>
        <FeatureItem>
          <FeatureIcon src={timeIcon} alt="Tempo" />
          <FeatureText>
            Crie seu site profissional <HighlightText>em menos de 5 minutos</HighlightText> e comece a divulgá-lo na internet.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={searchIcon} alt="Busca" />
          <FeatureText>
            Sua página otimizada para aparecer nos <HighlightText>primeiros resultados do Google</HighlightText>.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={smartphoneIcon} alt="Smartphone" />
          <FeatureText>
            Seu site responsivo e adaptado para <HighlightText>todos os dispositivos</HighlightText> (Smartphone, Computador e Tablet).
          </FeatureText>
        </FeatureItem>
      </FeatureList>
    </Content>
  </Container>
);

export default WebsiteSection;
