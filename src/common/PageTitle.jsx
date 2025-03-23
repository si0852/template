import styled from 'styled-components';

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  border-bottom: 2px solid #333;
  padding-bottom: 8px;
`;

const PageTitle = ({ children }) => <Title>{children}</Title>;

export default PageTitle;
