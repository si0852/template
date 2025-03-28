import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 8px;
`;

const RadioGroup = ({ name, label, options, value, onChange }) => (
  <Group>
    <Label>{label}</Label>
    {options.map((opt) => (
      <label key={opt.value}>
        <input
          type="radio"
          name={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
        />
        {opt.label}
      </label>
    ))}
  </Group>
);

export default RadioGroup;
