import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 0 auto;
  background-color: black;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 3.3em;
  color: white;
  font-weight: 600;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.3em;
  color: white;
  font-weight: 100;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-top: 24px;
`;

export const PortalsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
`;

export const PortalItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  width: 100px;
  height: 100px;
`;

export const PortalLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
    max-width: 140%;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IntButton = styled.div`
  color: #e36108;
  text-decoration: none;
  font-size: 7em;
  display: inline-block;
  margin-bottom: 10px;
  animation: ${rotate} 10s linear infinite;

  &:hover {
    color: white;
  }
`;