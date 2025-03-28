import React from 'react';
import Select from 'react-select';

const options = [
  { value: '성별', label: '성별' },
  { value: '거래처별', label: '거래처별' },
  { value: '유형별', label: '유형별' },
];

const MultiSelectDropdown = ({ value, onChange }) => {
  return (
    <div style={{ minWidth: '200px' }}>
      <Select
        isMulti
        options={options}
        value={value}
        onChange={onChange}
        placeholder="조합형 상세조회"
      />
    </div>
  );
};

export default MultiSelectDropdown;
