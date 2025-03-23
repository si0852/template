import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const FilterBar = ({ children }) => <Bar>{children}</Bar>;

export default FilterBar;
