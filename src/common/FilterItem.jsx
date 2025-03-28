import styled from 'styled-components';

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Checkbox = styled.input`
  margin-right: 0px;
`;

const FilterItem = ({ label, id }) => (
  <FilterGroup>
    <Checkbox type="checkbox" id={id} />
    <Label htmlFor={id}>{label}</Label>
  </FilterGroup>
);

export default FilterItem;
