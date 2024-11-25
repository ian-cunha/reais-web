import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 24px 15px;
  background-color: black;
`;

export const Title = styled.h4`
  color: white;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

export const SubTitle = styled.p`
  color: white;
  font-weight: 300;
  font-size: 0.8em;

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 14px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
  }
`;