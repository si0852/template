import styled from 'styled-components';

const Button = styled.button`
  margin-left: auto;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SearchButton = ({ onClick }) => <Button onClick={onClick}>조회</Button>;

export default SearchButton;
