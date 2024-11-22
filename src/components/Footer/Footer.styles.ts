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

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;