import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  color: white;
  padding: 24px 24px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #e36108;

  @media (max-width: 768px) {
    font-size: 1.6em;
    margin-bottom: 24px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-top: 16px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  gap: 8px;
  background: #1a1a1a;
  padding: 12px 24px;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  border-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e36108;
    border-style: dashed;
    background: transparent;
  }
`;

export const Icon = styled.div`
  font-size: 1.5em;
`;
