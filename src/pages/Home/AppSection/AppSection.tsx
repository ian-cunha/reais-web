import React from 'react';
import { Container, Title, SubTitle, Image, Content, Icon, IconStore, BtnStore, LinkApp, Paragraph } from './AppSection.styles';
import appImage from '../../../assets/app/App.svg';
import icon from '../../../assets/app/icon.svg';
import googlePlay from '../../../assets/app/gPlay.svg';
import appStore from '../../../assets/app/appStore.svg';

const AppSection: React.FC = () => (
  <Container>
    <Image src={appImage} alt="Aplicativo RE.AI.s" />
    <Content>
      <Icon src={icon} alt="Icone do RE.AI.s" />
      <Title>RE.AI.s (Smart Imobiliário)</Title>
      <SubTitle>
      Aplicativo para Corretores e Imobiliárias
      </SubTitle>
      <Paragraph>
        Baixe o aplicativo RE.AI.s e tenha todas as informações dos seus imóveis na palma da mão.
      </Paragraph>
      <BtnStore>
        <LinkApp href="https://play.google.com/store/apps/details?id=br.com.youdigital.smartimobiliario" target='_blank'>
          <IconStore src={googlePlay} alt="Icone Google Play" />
        </LinkApp>
        <LinkApp href="https://apps.apple.com/br/app/re-ai-s-smart-imobili%C3%A1rio/id1128234098" target='_blank'>
          <IconStore src={appStore} alt="Icone App Store" />
        </LinkApp>
      </BtnStore>
    </Content>
  </Container>
);

export default AppSection;
