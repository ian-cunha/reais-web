import styled from 'styled-components';

export const StyledButton = styled.a`
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