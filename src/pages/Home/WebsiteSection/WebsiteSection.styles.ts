import styled from 'styled-components';

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
  padding: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 24px;

  @media (max-width: 768px) {
    align-items: center;
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

export const Paragraph = styled.p`
  font-size: 1.2em;
  color: white;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Image = styled.img`
  width: 50%;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

export const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

export const FeatureText = styled.p`
  font-size: 1.1em;
  font-weight: 100;
  color: white;

  @media (max-width: 768px) {
    font-size: 1em;
    text-align: left;
    margin-left: 15px;
  }
`;

export const HighlightText = styled.span`
  color: #e36108;
  font-weight: bold;
`;