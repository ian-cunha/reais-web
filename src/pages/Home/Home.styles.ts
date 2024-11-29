import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 0;
  padding-bottom: 24px;
  background-color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
  max-width: 1200px;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3em;
  text-align: left;
  margin: 0;
  margin-bottom: -25px;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 2em;
    text-align: center;
  }
`;

export const BigTitle = styled.div`
  margin: 0;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    height: 100px;
  }

  @media (max-width: 768px) {
  align-items: center;
    img {
    height: 80px;
  }
  }
`;

export const SubTitle = styled.h3`
  color: white;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  color: white;
  margin: 0;
  font-size: 0.8em;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  max-width: 37vw;
  height: auto;
  margin-left: 24px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    max-width: 60%;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const ArrowDown = styled.button`
  color: white;
  font-weight: 100;
  font-size: 3em;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease;
  animation: ${bounce} 2s infinite;

  &:hover {
    color: #e36108;
  }
`;