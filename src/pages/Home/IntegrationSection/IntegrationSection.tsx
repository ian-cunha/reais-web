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
import chaveFacilLogo from '../../../assets/integracao/logo-chave.svg';
import mercadoLivreLogo from '../../../assets/integracao/logo_mercadolivre.svg';
import ademiLogo from '../../../assets/integracao/logo-ademi.svg';
import olxLogo from '../../../assets/integracao/logo-olx.svg';
import vivaRealLogo from '../../../assets/integracao/logo-viva.svg';
import casaMineiraLogo from '../../../assets/integracao/logo-casamineira.svg';
import creciLogo from '../../../assets/integracao/logo-creci.svg';
import dfImoveisLogo from '../../../assets/integracao/logo-df.svg';
import dreamCasaLogo from '../../../assets/integracao/logo-dreamcasa.svg';
import imowebLogo from '../../../assets/integracao/logo-imoWeb.svg';
import lugarCertoLogo from '../../../assets/integracao/logo-lugarcerto.svg';
import smartXmlLogo from '../../../assets/integracao/logo-smartxml.svg';
import zapImoveisLogo from '../../../assets/integracao/logo-zap.svg';
import movingLogo from '../../../assets/integracao/logo-moving.svg';

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
