import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 0;
  max-width: 1200px;
  width: 100%;
  background-color: black;
  padding: 24px;
  color: white;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;


export const FeatureCard = styled.div`
  background: #1a1a1a;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  border-color: transparent;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #e36108;
    border-style: dashed;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3em;
  color: #e36108;
  margin-bottom: 16px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 8px;
  color: #e36108;

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #bbb;

  @media (max-width: 480px) {
    font-size: 0.9em;
    line-height: 1.4;
  }
`;
