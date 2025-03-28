import React from 'react';
import styled from 'styled-components';

// styled-components로 작성된 CategorySelect
const StyledCategorySelect = styled.select`
  width: 120px;
  padding: 8px;
`;

const CategorySelect = ({ value, onChange, options }) => {
  return (
    <StyledCategorySelect value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledCategorySelect>
  );
};

export default CategorySelect;
