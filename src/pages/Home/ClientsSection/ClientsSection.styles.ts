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
  color: white;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 2.3em;
  color: white;
  font-weight: 600;
  margin-bottom: 24px;
  @media (max-width: 768px) {
      font-size: 1.4em;
      text-align: center;
      margin-bottom: 15px;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const TestimonialCard = styled.div`
  background: #1a1a1a;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 16px;
  }
`;

export const ClientName = styled.h3`
  font-size: 1.5em;
  color: #e36108;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

export const ClientPosition = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: #bbb;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 0.9em;
    margin-bottom: 12px;
  }
`;

export const ClientMessage = styled.p`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9em;
    line-height: 1.4;
  }
`;
