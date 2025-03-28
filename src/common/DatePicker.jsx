import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 6px;
  width: 120px;
`;

const DatePicker = ({ value, onChange }) => (
  <Input type="date" value={value} onChange={onChange} />
);

export default DatePicker;
