import React from 'react';
import {
  Container,
  Title,
  Paragraph,
  Content,
  PortalsList,
  PortalItem,
  PortalLogo,
} from './IntegrationSection.styles';

// Importação das logos
import chaveFacilLogo from '../../../assets/integration/logo-chave.svg';
import mercadoLivreLogo from '../../../assets/integration/logo_mercadolivre.svg';
import ademiLogo from '../../../assets/integration/logo-ademi.svg';
import olxLogo from '../../../assets/integration/logo-olx.svg';
import vivaRealLogo from '../../../assets/integration/logo-viva.svg';
import casaMineiraLogo from '../../../assets/integration/logo-casamineira.svg';
import creciLogo from '../../../assets/integration/logo-creci.svg';
import dfImoveisLogo from '../../../assets/integration/logo-df.svg';
import dreamCasaLogo from '../../../assets/integration/logo-dreamcasa.svg';
import imowebLogo from '../../../assets/integration/logo-imoWeb.svg';
import lugarCertoLogo from '../../../assets/integration/logo-lugarcerto.svg';
import smartXmlLogo from '../../../assets/integration/logo-smartxml.svg';
import zapImoveisLogo from '../../../assets/integration/logo-zap.svg';
import movingLogo from '../../../assets/integration/logo-moving.svg';

// Lista de portais com as logos
const portals = [
  { name: 'Chave Fácil', logo: chaveFacilLogo },
  { name: 'Mercado Livre', logo: mercadoLivreLogo },
  { name: 'Ademi Imóveis', logo: ademiLogo },
  { name: 'OLX', logo: olxLogo },
  { name: 'Viva Real', logo: vivaRealLogo },
  { name: 'Casa Mineira', logo: casaMineiraLogo },
  { name: 'Portal Creci', logo: creciLogo },
  { name: 'DF Imóveis', logo: dfImoveisLogo },
  { name: 'Dream Casa', logo: dreamCasaLogo },
  { name: 'ImoWEB', logo: imowebLogo },
  { name: 'Lugar Certo', logo: lugarCertoLogo },
  { name: 'Smart XML', logo: smartXmlLogo },
  { name: 'Zap Imóveis', logo: zapImoveisLogo },
  { name: 'Moving Imóveis', logo: movingLogo },
];

const IntegrationSection: React.FC = () => (
  <Container>
    <Content>
      <Title>Integração com os Principais Portais</Title>
      <Paragraph>
        Anuncie seus imóveis e aumente a visibilidade de seu negócio de forma eficiente e profissional!
      </Paragraph>
    </Content>
    <Content>
      <PortalsList>
        {portals.map((portal, index) => (
          <PortalItem key={index}>
            <PortalLogo src={portal.logo} alt={portal.name} title={portal.name} />
          </PortalItem>
        ))}
      </PortalsList>
    </Content>
  </Container>
);

export default IntegrationSection;
