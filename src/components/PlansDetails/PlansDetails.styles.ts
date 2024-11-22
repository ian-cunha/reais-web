import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10px;

    @media (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

export const Title = styled.h2`
  color: white;
  font-size: 1.5em;
  font-weight: 200;
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    background-color: black;

    @media (max-width: 768px) {
        min-width: 600px;
        display: block;
        overflow-x: auto;
    }
`;

export const TableHeader = styled.th`
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    background-color: #e36108;
    color: white;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const TableCell = styled.td`
    border: 1px solid #e36108;
    padding: 8px;
    text-align: left;
    color: white;
    background-color: black;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px;
    }
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #f1f1f1;
    }

    @media (max-width: 768px) {
        &:nth-child(even) {
            background-color: #333;
        }
    }
`;

export const ScrollHint = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        text-align: center;
        font-size: 12px;
        color: #e36108;
        margin-bottom: 10px;
    }
`;
