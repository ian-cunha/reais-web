import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3em;
  text-align: left;
  margin: 0;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 2.5em;
    margin-top: 30px;
    margin-bottom: 20px;
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
  max-width: 40vw;
  height: auto;
  margin-left: 24px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    max-width: 60%;
  }
`;