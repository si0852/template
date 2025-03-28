import styled from "styled-components";

const StyledDataInput = styled.input.attrs({type: 'date'})`
  width: 140px;
  padding: 6px;
`

const DataInput = ({ value, onChange }) => {
  return <StyledDataInput value={value} onChange={onChange}/>;
};

export default DataInput;