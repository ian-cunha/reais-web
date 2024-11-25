import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: black;
  padding: 20px;
  border-radius: 0;
  width: 400px;
  max-width: 90%;
  text-align: center;
  border-color: #e36108;
  border-width: 1px;
  border-style: dashed;
`;

export const CloseButton = styled.button`
  background-color: #e36108;
  color: white;
  border-radius: 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-color: #e36108;
  border-width: 1px;
  border-style: dashed;
  margin: 5px;

  &:hover {
    color: #e36108;
    background-color: transparent;
    border-color: #e36108;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #e36108;
  border-radius: 0;
  background-color: black;
`;

export const SubmitButton = styled.button`
  background-color: #e36108;
  color: white;
  border-radius: 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-color: #e36108;
  border-width: 1px;
  border-style: dashed;
  margin: 5px;

  &:hover {
    color: #e36108;
    background-color: transparent;
    border-color: #e36108;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const SubTitle = styled.h3`
  color: white;
  font-weight: 200;
  font-size: 1em;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;