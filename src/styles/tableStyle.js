import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th, td {
    border: 1px solid #ddd;
    font-size: 12px;
    padding: 8px;
    text-align: center;
    word-break: break-word;
    white-space: normal;
  }

  .sum-header {
    font-size: 11px;
    color: #333;
  }

  tfoot td {
    font-weight: bold;
    background-color: #f9f9f9;
  }
`;
