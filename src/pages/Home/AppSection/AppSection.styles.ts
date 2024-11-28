import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 0;
  max-width: 1200px;
  width: 100%;
  background-color: black;
  @media (max-width: 768px) {
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
  padding: 24px 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 1em;
  color: white;
  font-weight: 100;
  @media (max-width: 768px) {
      font-size: 1em;
      text-align: center;
      margin-bottom: 15px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2.3em;
  color: white;
  font-weight: 600;
  @media (max-width: 768px) {
      font-size: 1.8em;
      text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.3em;
  color: white;
  font-weight: 100;
  @media (max-width: 768px) {
      font-size: 1em;
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
  }
`;

export const Image = styled.img`
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
  }
`;

export const Icon = styled.img`
    width: 100px;
    margin-bottom: 24px;
`;

export const IconStore = styled.img`
    width: 180px;
    margin-bottom: 24px;
    @media (max-width: 1080px) {
      width: 150px;
  }
`;

export const BtnStore = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const LinkApp = styled.a`
`;
