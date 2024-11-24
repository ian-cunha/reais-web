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
    flex-direction: column;
    align-items: center;
  }
`;

export const PlanTitle = styled.h4`
  font-size: 2em;
  font-weight: 300;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #e36108;
`;

export const PlanPrice = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  margin: 10px 0;
  color: #e36108;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0 25px 0;

  li {
    font-size: 1em;
    margin: 5px 0;
  }
`;

export const PlanListWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow: visible;
  }
`;

export const PlanList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow: visible;
    gap: 10px;
  }
`;

export const PlanCard = styled.div`
  min-width: 300px;
  background-color: #1a1a1a;
  border-radius: none;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  flex-shrink: 0;
  text-align: center;
  max-width: 400px;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    font-size: 1em;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: #e36108;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
