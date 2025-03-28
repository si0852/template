import React from 'react';
import styled from 'styled-components';

const StyledYearPicker = styled.input.attrs({ type: 'date' })`
  width: 150px;
  padding: 8px;
`;

const YearPicker = ({ value, onChange }) => {
  return <StyledYearPicker value={value} onChange={onChange} />;
};

export default YearPicker;