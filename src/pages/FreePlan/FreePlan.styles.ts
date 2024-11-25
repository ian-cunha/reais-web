import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  padding-top: 100px;
  background-color: black;
  overflow-y: auto;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const SubTitle = styled.h3`
  color: white;
  font-weight: 200;
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const Icon = styled.h3`
  color: white;
  font-weight: 100;
  padding: 20px;
`;

export const ButtonDetails = styled.a`
  color: #e36108;
  border-radius: 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  text-align: center;
  font-weight: 600;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;