import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Title, SocialLinks, SocialLink, Icon } from './Social.styles';

const Social: React.FC = () => (
  <Container>
    <Title>Siga-nos nas Redes Sociais:</Title>
    <SocialLinks>
      <SocialLink href="https://www.instagram.com/realestateaiplanner/" target="_blank" rel="noopener noreferrer">
        <Icon>
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        Instagram
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/company/real-estate-ai-planner/" target="_blank" rel="noopener noreferrer">
        <Icon>
          <FontAwesomeIcon icon={faLinkedin} />
        </Icon>
        LinkedIn
      </SocialLink>
    </SocialLinks>
  </Container>
);

export default Social;
