import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 5;
`;

export const LogoContainer = styled.a`
  img {
    height: 30px;
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const NavItem = styled.a`
  color: white;
  margin: 0 15px;
  padding: 10px 15px;
  text-decoration: none;
  border-color: transparent;
  border-width: 1px;
  border-style: dashed;

  &:hover {
    border-color: #e36108;
  }

  @media (max-width: 1024px) {
    margin: 5px 5px;
    padding: 20px 35px;
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    position: static;
    box-shadow: none;
  }
`;

export const NavButton = styled.a`
  margin: 0 5px;
  text-decoration: none;
  background-color: #e36108;
  color: white;
  border: none;
  border-radius: 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-color: #e36108;
  border-width: 1px;
  border-style: dashed;

  &:hover {
    color: #e36108;
    background-color: transparent;
    border-color: #e36108;
  }

  @media (max-width: 1024px) {
    margin: 5px 5px;
    padding: 20px 35px;
    width: 100%;
  }
`;

export const StoreButton = styled.a`
  color: white;
  margin: 0 15px;
  padding: 10px 15px;
  text-decoration: none;
  border-color: transparent;
  border-width: 1px;
  border-style: dashed;

  &:hover {
    border-color: #e36108;
    color: #e36108;
  }

  @media (max-width: 1024px) {
    margin: 5px 5px;
    padding: 20px 35px;
    width: 100%;
  }
`;