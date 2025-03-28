import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100px;
  padding: 6px;
`

const SelectBox = ({value, onChange, options, width = '100px'}) => {
  return (
    <StyledSelect value={value} onChange={onChange} style={{ width }}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </StyledSelect>
  )
};

export default SelectBox;