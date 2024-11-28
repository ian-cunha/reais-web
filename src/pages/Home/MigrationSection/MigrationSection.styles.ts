import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 0 auto;
  background-color: black;
  padding: 24px;
  max-width: 1300px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  color: white;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  color: white;
  margin-bottom: 16px;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
  }
`;

export const HighlightText = styled.span`
  color: #e36108;
  font-weight: bold;
`;

export const Image = styled.img`
  margin-top: 34px;
  width: 50%;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-top: 24px;
    width: 90%;
  }
`;
