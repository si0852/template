import styled from "styled-components";

const StyledInput = styled.input`
  padding: 6px;
  width: 120px;
`;

const InputBox = ({ value, onChange, placeholder }) => (
  <StyledInput
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default InputBox;
