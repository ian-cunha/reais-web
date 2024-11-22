import React, { useState } from 'react';
import { StyledNavbar, NavItem, LogoContainer, MenuButton, MenuContainer, NavButton, StoreButton } from './Navbar.styles';
import logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNavbar>
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <MenuButton onClick={toggleMenu}>
        &#9776;
      </MenuButton>
      <MenuContainer isOpen={isMenuOpen}>
        <NavItem href="/">Início</NavItem>
        <NavItem href="/planos">Planos</NavItem>
        <NavItem href="https://www.youtube.com/channel/UCeAgtObzcuLG6DLb0rcywyA/videos" target='_blank'>Videos</NavItem>
        <StoreButton target='_blank' href="https://play.google.com/store/apps/details?id=br.com.youdigital.smartimobiliario"><FontAwesomeIcon icon={faGooglePlay} /> Play Store</StoreButton>
        <StoreButton target='_blank' href="https://apps.apple.com/br/app/smart-imobiliario/id1128234098"><FontAwesomeIcon icon={faApple} /> Apple Store</StoreButton>
        <NavButton href="/gratuito">Plano Grátis</NavButton>
        <NavButton target='_blank' href="https://app.reaisystems.com.br/">Login</NavButton>
      </MenuContainer>
    </StyledNavbar>
  );
};

export default Navbar;